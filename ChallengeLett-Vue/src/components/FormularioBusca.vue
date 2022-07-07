<template>
    <section>
        <h2 class="instrucoes">Digite um nome para encontrar usuários ou repositórios</h2>
        <!-- Formulário que realiza a pesquisa -->
        <form id="formulario-busca">
            <!-- Ressaltando o v-model que, basicamente, associa o valor deste input com a variável  'pesquisa'-->
            <input type="text" id="pesquisa" name="pesquisa" v-model="pesquisa" placeholder="Pesquise um nome..."/>
           <!-- Sub-Formulário que decide o tipo da pesquisa (Por usuário ou por repositório) -->
           <div id="radio-escolha">
                <!-- Obs.: que o v-model se associa ao 'value' -->
                <input type="radio" id="user" value="1" v-model="tipo_pesquisa">
                <label for="user">Usuário</label>
                <br>
                <input type="radio" id="repos" value="2" v-model="tipo_pesquisa">
                <label for="repos">Repositório</label>
            </div>
            
            <!-- Importante ressaltar que: 
            @ == v-on
            O click deste botão possui duas diferentes ações:
                Retornar a contagem da página atual para 1 (com preventDefault())
                Invocar a função que realiza a pesquisa -->
            <button class="button-contrast" @click.prevent="this.pageNumber = 1" @click="pesquisar">Pesquisar</button>
        </form>
    </section>

    <!-- Resultado da busca que só é renderizado no caso de resposta positiva da API -->
    <ResultadoBusca :v-if="userApiInfo" :userApiInfo="userApiInfo" :reposApiInfo="reposApiInfo" />
    <!-- Controle de paginação dos repositórios com a mesma condição da renderização -->
    <div v-if="userApiInfo" id="controle-paginas">
        <a id="controle-paginas-anterior" @click="anteriorPagina">&lt;</a>
        <p id="controle-paginas-numeracao">{{ this.pageNumber }}</p>
        <a id="controle-paginas-proximo" @click="proximaPagina">></a>
    </div>
</template>

<script>
// Impot do componente
import ResultadoBusca from './ResultadoBusca.vue'

export default {
    name: 'FormularioBusca',
    data() {
        return {
            // Valores que a aplicação busca na API, e envia para os componentes
            userApiInfo: null,
            reposApiInfo: null,
            pageNumber: 1,
            count: 6,
            tipo_pesquisa: null,
            userName: null
        }
    },
    components: {
        ResultadoBusca
    },
    methods: {
        async pesquisar(e) {
            // Previne a atualização automática da página (do submit do form)
            e.preventDefault();
            // Variável que armazena as variáveis de ambiente do arquivo .env
            const VITE_ENV = import.meta.env
            //Variáveis necessárias para montar as URL's
            const url = 'https://api.github.com';
            const client_id = VITE_ENV.VITE_CLIENT_ID;
            const client_secret = VITE_ENV.VITE_CLIENT_SECRET;
            const input = pesquisa.value;
            const sort = 'created: desc';

            // Caso o usuário tente pesquisar por nome de Usuário
            if (this.tipo_pesquisa == '1') {
                // Válido ressaltar que as variáveis inciadas com this. referem-se às variáveis em Data()
                this.userName = input;
                // Requisições do tipo fetch à API construídas dinamicamente
                const userResponse = await fetch(`${url}/users/${this.userName}?client_id=${client_id}&client_secret=${client_secret}`);
                const reposResponse = await fetch(`${url}/users/${this.userName}/repos?per_page=${this.count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}&page=${this.pageNumber}`);

                // Converte as respostas em json e já as passa para a Data deste 
                // componente que será passado para as prpops de seu filho (ResultadoBusca)
                const userApiInfo = await userResponse.json();
                const reposApiInfo = await reposResponse.json();

                // Pequena validação, com base na informação de login do usuária (que não é carregada caso
                // o usuário não exista), repassa a resposta para Data() que a resposta só é exibida caso tenha
                // informação deste campo
                if(userApiInfo.login){
                    this.userApiInfo = userApiInfo;
                    this.reposApiInfo = reposApiInfo;
                } else {
                    alert('Não encontramos nenhum resultado, por favor tente novamente...')
                }
            // Caso o usuário pesquise (filtre) por repositório
            } else if (this.tipo_pesquisa == '2') {
                const reposFilteredResponse = await fetch(
                    `${url}/search/repositories?q=${input}+in:name+user:${this.userName}&per_page=${this.count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}&page=${this.pageNumber}`
                );
                const reposApiInfo = await reposFilteredResponse.json();
                this.reposApiInfo = reposApiInfo.items;
            // Caso o usuário não selecione nenhuma opção para a busca
            } else {
                alert('Por favor, selecione uma opção de busca')
            }
        },
        //Funções dedicadas à paginação que basicamente altera a numeração da página e faz uma nova requisição
        proximaPagina(e) {
            let qtdPag = this.userApiInfo.public_repos / this.count
            if (this.pageNumber < qtdPag) {
                this.pageNumber ++;
                this.pesquisar(e);
            }

        },
        anteriorPagina(e) {
            if (this.pageNumber > 1) {
                this.pageNumber --;
                this.pesquisar(e);
            }
        }
    }
}
</script>

<style scoped>
/* Estilos que são aplicados apenas à este componente (scoped) */
.instrucoes {
    text-align: center;
}

#formulario-busca {
    display: flex;
    justify-content: center;
    align-items: center;
}


#pesquisa {
    width: 60%;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.15rem;
    font-weight: 100;
}

.button-contrast {
    margin: 0 1.5em;
}

#controle-paginas {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5%;
    font-size: 1.25rem;
    font-weight: bold;
}

#controle-paginas-anterior,
#controle-paginas-proximo {
    padding: 0.45rem 1.6rem;
    ;
}

#controle-paginas-anterior:hover,
#controle-paginas-proximo:hover {
    cursor: pointer;
    color: var(--color-contraste);
    font-size: 1.65rem;
}

#controle-paginas-numeracao {
    margin: 0 2rem;
    background-color: var(--color-branco);
    color: var(--color-destaque-escuro);
    padding: 0.50rem 0.75rem;
    border-radius: 0.5rem;
}
</style>
<template>
    <section>
        <h2 class="instrucoes">Digite um nome para encontrar usuários ou repositórios</h2>
        <form id="formulario-busca">
            <!-- TODO: fazer a pesquisa baseada neste valor -->
            <input type="text" id="pesquisa" name="pesquisa" v-model="pesquisa" placeholder="Pesquise um nome..." />
            <!-- TODO: Botão pode fazer pesquisa de user ou filtro de repositórios com base neste resultado -->
            <div id="radio-escolha">
                <input type="radio" id="user" value="1" v-model="tipo_pesquisa">
                <label for="user">Usuário</label>
                <br>
                <input type="radio" id="repos" value="2" v-model="tipo_pesquisa">
                <label for="repos">Repositório</label>
            </div>

            <button class="button-contrast" @click.prevent="this.pageNumber = 1" @click="pesquisar">Pesquisar</button>
        </form>
    </section>
    <ResultadoBusca :v-if="userApiInfo" :userApiInfo="userApiInfo" :reposApiInfo="reposApiInfo" />
    <div v-if="userApiInfo" id="controle-paginas">
        <a id="controle-paginas-anterior" @click="anteriorPagina">&lt;</a>
        <p id="controle-paginas-numeracao">{{ this.pageNumber }}</p>
        <a id="controle-paginas-proximo" @click="proximaPagina">></a>
    </div>
</template>

<script>
import { processExpression } from '@vue/compiler-core';
import ResultadoBusca from './ResultadoBusca.vue'
export default {
    name: 'FormularioBusca',
    data() {
        return {
            // Valores que a aplicação busca na API, e envia para os componentes
            userApiInfo: null,
            reposApiInfo: null,
            pageNumber: 1,
            tipo_pesquisa: null,
            userName: null
        }
    },
    components: {
        ResultadoBusca
    },
    methods: {
        async pesquisar(e) {
            e.preventDefault();
            //Variáveis para montar as URL's
            const url = 'https://api.github.com';
            // TODO: passar esse user/pass para ser consumido por um JSON
            const client_id = 'a758c30ae6bd78739ead';
            // const client_secret = '';
            const client_secret = process.env.VUE_APP_CLIENT_SECRET;
            const input = pesquisa.value;
            const count = 5;
            const sort = 'created: asc';

            if (this.tipo_pesquisa == '1') {
                // Requisição na userApiInfo, invocada com o toque do botão
                this.userName = input;
                const userResponse = await fetch(`${url}/users/${this.userName}?client_id=${client_id}&client_secret=${client_secret}`);
                const reposResponse = await fetch(`${url}/users/${this.userName}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}&page=${this.pageNumber}`);

                // Converte as respostas em json e já as passa para a Data deste componente que será passado para as prpops de seu filho
                const userApiInfo = await userResponse.json();
                const reposApiInfo = await reposResponse.json();
                this.userApiInfo = userApiInfo;
                this.reposApiInfo = reposApiInfo;

                console.log(userApiInfo);
                console.log(reposApiInfo);
            } else if (this.tipo_pesquisa == '2') {
                const reposFilteredResponse = await fetch(
                    `${url}/search/repositories?q=${input}+in:name+user:${this.userName}&per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}&page=${this.pageNumber}`
                );
                const reposApiInfo = await reposFilteredResponse.json();
                this.reposApiInfo = reposApiInfo.items;
                console.log(reposApiInfo.items)
            } else {
                alert('Por favor, selecione uma opção de busca')
            }
        },
        proximaPagina(e) {
            let qtdPag = this.userApiInfo.public_repos / 5
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
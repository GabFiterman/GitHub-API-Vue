<template>
    <section>
        <h2 class="instrucoes">Digite um nome para encontrar usuários ou repositórios</h2>
        <form id="formulario-busca">
            <input type="text" id="pesquisa" name="pesquisa" v-model="pesquisa" placeholder="Pesquise um nome..." />
            <form>
                <input type="radio" id="user" name="tipo_pesquisa" value="user">
                <label for="user">Usuários</label><br/>
                <input type="radio" id="repos" name="tipo_pesquisa" value="repos">
                <label for="repos">Repositórios</label>
            </form>
            <button class="button-contrast">Pesquisar</button>
        </form>
    </section>
    <ResultadoBusca />
</template>

<script>
import ResultadoBusca from './ResultadoBusca.vue'
export default {
    name: 'FormularioBusca',
    components: {
        ResultadoBusca
    }
}
</script>

<style scoped>
.instrucoes {
    text-align: center;
}

#formulario-busca{
    display: flex;
    justify-content: center;
    align-items: center;
}

#pesquisa{
    width: 60%;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 2rem;
    font-size: 1.15rem;
    font-weight: 100;
}

.button-contrast{
    margin: 0 1.5em;
}
</style>
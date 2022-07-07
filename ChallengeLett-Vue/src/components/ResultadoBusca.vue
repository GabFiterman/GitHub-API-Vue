<template>
    <main id="response" v-if="userApiInfo">
        <!-- Componente que exibe separadamente os resultados da API, recebendo as informações do componente 'FormularioBusca' -->
        <UsuarioLayout :userApiInfo="userApiInfo" />
        <ReposLayout :reposApiInfo="reposApiInfo" />
    </main>
</template>

<script>
// Imports dos componentes
import UsuarioLayout from './UsuarioLayout.vue'
import ReposLayout from './ReposLayout.vue';
export default {
    name: "ResultadoBusca",
    data() {
        return {
            // Passa a prop (this.) recebida de FormularioBusca para a data,
            // que sua vez distribui para os respectivos componentes de layouts
            userApiInfo: this.userApiInfo,
            reposApiInfo: this.reposApiInfo
        };
    },
    props: {
        // Válido ressaltar que as propriedades são passadas como 'parâmetros' em outros componentes
        userApiInfo: Object,
        reposApiInfo: Array
    },
    components: {
        UsuarioLayout,
        ReposLayout
    }
}
</script>

<style scoped>
#response {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    /* background-color: rgba(0, 230, 118, 0.03); */
    border-radius: 1.5rem;
    padding: 2rem 2rem;
    margin-top: 3rem;
}
</style>
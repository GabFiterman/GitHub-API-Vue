<template>
    <main id="response" v-if="userApiInfo">
        <UsuarioLayout :userApiInfo="userApiInfo" />
        <ReposLayout :reposApiInfo="reposApiInfo" />
        
    </main>
</template>

<script>
import UsuarioLayout from './UsuarioLayout.vue'
import ReposLayout from './ReposLayout.vue';
export default {
    name: "ResultadoBusca",
    data() {
        return {
            // Passa a prop (this.) recebida de FormularioBusca para a data, que sua vez distribui para os respectivos layouts
            userApiInfo: this.userApiInfo,
            reposApiInfo: this.reposApiInfo
        };
    },
    props: {
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
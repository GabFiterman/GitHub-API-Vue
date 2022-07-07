<!-- Por se tratar de objeto único, foi possível extrair as variáveis diretamente de sua props -->
<template>
    <article id="usuario-layout">
        <img class="usuario-avatar" :src="this.userApiInfo.avatar_url" alt="Imagem de perfil do usuário" />
        <h2 class="usuario-nome">{{this.userApiInfo.login}}</h2>
        <ul class="usuario-informacoes">
            <li>Repositórios: <span>{{this.userApiInfo.public_repos}}</span></li>
            <li>Seguidores: <span>{{this.userApiInfo.followers}}</span></li>
            <li>Seguindo: <span>{{this.userApiInfo.following}}</span></li>
        </ul>
        <button class="button-contrast usuario-btn"><a :href="this.userApiInfo.html_url" target="_blank">Ver perfil</a></button>
    </article>
</template>

<script>
export default {
    name: 'UsuarioLayout',
    props: {
        userApiInfo: Object
    }
}
</script>

<style scoped>
#usuario-layout {
    /* background-color: rgba(0, 255, 89, 0.203); */
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.usuario-avatar {
    max-width: 18rem;
    border-radius: 100%;
}

.usuario-nome {
    text-align: center;
    color: var(--color-contraste);
    font-size: 1.8rem;
}

.usuario-informacoes {
    padding: 0;
    margin: 0;
    margin-bottom: 2rem;
}

.usuario-informacoes li {
    list-style-type: none;
    line-height: 2.75rem;
}

.usuario-informacoes span{
    padding: 0.35rem 0.75rem;
    border-radius: 25%;
    background-color: var(--color-destaque-escuro);
    color: var(--color-contraste);
}

.usuario-informacoes li:first-child span{
    background-color: var(--color-contraste);
    color: var(--color-destaque-escuro);
    font-weight: bold;
}

.usuario-btn{
    padding: 0.35rem;
    width: 100%;
}

.usuario-btn a{
    color: var(--color-destaque-escuro);
    text-decoration: none;
}
</style>
<template>
    <article class="repo-card">
        <h2 class="repo-nome"><a :href="repo_link" target="_blank">{{repo_name}}</a></h2>
        <ul class="repo-info">
            <li><img :src="icoStar" />Stars: <span>{{repo_star}}</span></li>
            <li><img :src="icoEye" />Watch: <span>{{repo_watch}}</span></li>
            <li><img :src="icoFork" />Forks: <span>{{repo_fork}}</span></li>
        </ul>
    </article>

</template>

<script>
export default {
    name: 'ReposCard',
    data() {
        return {
            icoStar: '/icons/Star.svg',
            icoEye: '/icons/Eye.svg',
            icoFork: '/icons/Fork.svg'
        }
    },
    props:{
        repo_link: String,
        repo_name: String,
        repo_star: String,
        repo_watch: String,
        repo_fork: String
    }
}
</script>

<style scoped>
.repo-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-destaque-escuro);
    border: 0.35rem solid var(--color-contraste);
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    padding: 0 1.6rem;
    width: 100%;
}

.repo-nome, a{
    color: var(--color-contraste);
    font-weight: 600;
    font-size: 1.4rem;
    text-decoration: none;
}

.repo-nome:hover{
    cursor: pointer;
    filter: brightness(1.5);
}

.repo-info{
    display: flex;
    align-items: flex-end;
    list-style-type: none;
    text-align: center;
}

.repo-info li img{
    height: 1rem;
    margin-left: 1rem;
    margin-right: 0.15rem;
}

</style>
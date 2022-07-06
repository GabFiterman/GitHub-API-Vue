<template>
    <ul class="repo-list">
        <li v-for="(repo, index) in this.reposApiInfo">
            <ReposCard 
                :repo_name="this.reposApiInfo[index].name" 
                :repo_link="this.reposApiInfo[index].html_url"
                :repo_star="this.reposApiInfo[index].stargazers_count"
                :repo_watch="this.reposApiInfo[index].watchers_count"
                :repo_fork="this.reposApiInfo[index].forks_count"
            />
        </li>
    </ul>
</template>

<script>
import ReposCard from './ReposCard.vue';
export default {
    name: "ReposLayout",
    components: { ReposCard },
    props: {
        reposApiInfo: Array
    },
    methods: {
        montarRepos() {
        }
    },
    mounted() {
        this.montarRepos();
    }
}
</script>

<style scoped>
.repo-list {
    display: flex;
    flex-direction: column;
    list-style: none;
}
</style>
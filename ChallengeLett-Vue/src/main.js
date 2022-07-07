/* importações básicas do Vue: Vue library, o componente App, e router. */
import { createApp, VueElement } from 'vue';
import App from './App.vue';
import router from './router';

/* Criação de um novo Vue app. */
const app = createApp(App);

/* Monta as rotas em Vue app. */
app.use(router);

/* Montando o aplicativo Vue no elemento DOM com o id de app. */
app.mount('#app');

// require('dotenv').config()
import * as dotenv from 'dotenv';
// dotenv.config();
// import express from 'express';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');

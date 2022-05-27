import { createRouter, createWebHistory } from 'vue-router'

import Profissional from "./views/Profissional.vue";
import Atendimento from "./views/Atendimento.vue";
import Cadastro from "./views/Cadastro.vue";

const routes = [
    {
        path: '/',
        name: 'profissional',
        component: Profissional
    },
    {
        path: '/atendimento',
        name: 'atendimento',
        component: Atendimento
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
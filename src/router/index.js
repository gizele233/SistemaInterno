import Vue from 'vue'
import VueRouter from 'vue-router'
import telaUsuario from '@/components/telaUsuario.vue'
import usuarioEdit from '@/components/usuarioEdit.vue'
import usuarioAlterSenha from '@/components/usuarioAlterSenha.vue'
import telaSistema from '@/components/telaSistema.vue'
import telaGrupo from '@/components/telaGrupo.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usuario',
    name: 'telaUsuario',
    component: telaUsuario
  },
  {
    path: '/editarusuario',
    name: 'usuarioEdit',
    component: usuarioEdit
  },
  {
    path: '/alterarsenha',
    name: 'usuarioAlterSenha',
    component: usuarioAlterSenha
  },
  {
    path: '/sistema',
    name: 'telaSistema',
    component: telaSistema
  },
  {
    path: '/grupo',
    name: 'telaGrupo',
    component: telaGrupo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

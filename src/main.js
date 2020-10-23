import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

// Instale BootstrapVue
Vue.use (BootstrapVue)
// Opcionalmente, instale o plug-in de componentes do ícone BootstrapVue 
Vue.use (IconsPlugin)

Vue.config.productionTip = false




import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

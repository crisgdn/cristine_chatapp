import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.js';
import Chat from './components/Chat.js';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/chat',
      component: Chat
    }
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


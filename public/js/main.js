import ChatMsg from './components/ChatMessage.js';
import Login from './components/Login.js';
import Chat from './components/Chat.js';
import Error from './components/Error.js';

const { createApp } = Vue

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/chat', name: 'chat', component: Chat },
    { path: '/:pathMach(.*)*', name: 'error', component: Error }
  ]
})

const app = Vue.createApp({
  methods: {
    tryRouterPus(){
      this.$router.push({name: "login"})
    }
  }
})

const vm = createApp({
  data() {
    return {
      socketID: '',
      message: '',
      messages: [],
      nickname: ''
    }
  }, 
  mounted() {
    const socket = io();
    socket.on('connected', (sID) => {
      this.socketID = sID;
    });
    socket.on('new_message', (message) => {
      this.messages.push(message);
    });
    socket.on('typing', (user) => {
      console.log('somebody is typing something');
    });
  },
  methods: {
    dispatchMessage() {
      socket.emit('chat_message', {
        content: this.message,
        name: this.nickname || 'anonymous',
        id: this.socketID
      });
      this.message = "";
    },
    catchTextFocus() {
      socket.emit('user_typing', {
        name: this.nickname || 'anonymous'
      });
    }
  },
  components: {
    newmsg: ChatMsg,
    login: Login,
    chat: Chat
  }
}).mount('#app');

app.use(router)

app.mount('#app')

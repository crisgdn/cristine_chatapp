
export default {
    name: 'TheLoginPage',

    props: ['item'],

    emits: ['closelogin'],


  template: `
  <article class="login-grid" v-if="openlogin">
  <section>
    <div class="login-container">
      <h2>Login</h2>
      <form>
        <div class="form-group">
          <label for="username">Username:</label>
          <input id="username" v-model="username" type="text" placeholder="username">
        </div>
        <button @closelogin="this.showLogin-false" v-if="showLogin">Login</button>
        
      </form>
    </div>
  </section>
  </article>
  `,


  methods: {
    catchTextFocus() {
      // emit a custom typing event and broadcast it to the server
      socket.emit('user_typing', {
        name: this.nickname || 'anonymous'
      })
    },

      closeLogin() {
        this.$emit('closelogin');
    }
}
  
}
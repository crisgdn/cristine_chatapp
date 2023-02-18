
export default {
  template: `
  <article class="login-grid">
  <section>
    <div class="login-container">
      <h2>Login</h2>
      <form>
        <div class="form-group">
          <label for="username">Username:</label>
          <input id="nickname" v-model="nickname" type="text" placeholder="Nickname?">
        </div>

        <router-link to="/chat">Login</router-link>
        
      </form>
    </div>
  </section>
  </article>
  `,

    data: function() {
      return {
        nickname: ""

      }
  },

  methods: {
      submitData() {
          // hit an api with a Fetch call
          // refer to the mailForm example from last semester -> the node mailer setup

          debugger;
      }
  }
}
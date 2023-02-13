
export default {
    name: 'Login',
    props: ['message'],

    template: `
    <section class="login-container">
    <h2>Login</h2>
    <form action="chat.html">
      <div class="form-group">
        <label for="username">Username:</label>
        <input id="nickname" v-model="nickname" type="text" placeholder="username" required/>
      </div>
      <a href="/chat" @click.prevent="dispatchMessage" type="submit" value="Login">Login</a>
      <router-link to="/chat">Go to chat</router-link>
      <router-link to="/login">log out</router-link>
    </form>
    </section>
    `,

    data()  {
        return {
            message: 'hello from the template',
            //every timean incoming message arrives, check against the user Id to see if this is ours.
            //If it Is, apply a CSS class to indicate that it's ours.
            //If is Isn't, apply a different CSS class to make that obvious.
            matchedID: this.$parent.socketID == this.message.id
        }
    }
}


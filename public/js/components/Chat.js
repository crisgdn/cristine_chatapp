export default {
    name: 'Chat',
    props: ['message'],

    template: `
    <header>
    <i class="fa-solid fa-comments fa-2x"></i>
    <h1>Chat App</h1>
    <button>Log out</button>
    </header>
    <main id="app" class="grid">
        <section class="generate">
            <h2>Imput message here:</h2>
            <input id="nickname" v-model="nickname" type="text" placeholder="Nickname?">
        <form>
            
            <label for="message">Something to say?</label>
            <!-- typing -->
            <textarea @focus="catchTextFocus" v-model="message" id="textarea" class="message" autocomplete="off"></textarea>
            <button @click.prevent="dispatchMessage" type="submit" value="Chat">Chat</button>
            <router-link to="/chat">Go to chat</router-link>
            <router-link to="/login">log out</router-link>
        </form>
        </section>

        <section class="messages">
            <ul id="messages">
                <!-- render a new message component for every message -->
                <newmsg v-for="message in messages" :message="message"></newmsg>
            </ul>
        </section>
    </main>

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

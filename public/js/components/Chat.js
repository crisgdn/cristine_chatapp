 
export default {

    template: `
        <header>
        <i class="fa-solid fa-comments fa-2x"></i>
        <h1>Chat App</h1>
        <router-link to="/">Log out</router-link>
        </header>
        <article class="grid">
            <section class="generate">
                <h3>Imput message here:</h3>
                <input id="nickname" v-model="nickname" type="text" placeholder="Nickname?">
            <form>
                
                <label for="message">Something to say?</label>
                <!-- typing -->
                <textarea @focus="catchTextFocus" v-model="message" id="textarea" class="message" autocomplete="off"></textarea>
                <button @click.prevent="dispatchMessage" type="submit" value="Chat">Chat</button>
            </form>
            </section>

            <section class="messages">
                <ul id="messages">
                    <!-- render a new message component for every message -->
                    <newmsg v-for="message in messages" :message="message"></newmsg>
                </ul>
            </section>
        </article>
    `,

}  
  
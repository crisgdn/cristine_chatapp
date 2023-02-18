export default {
    name: 'User',
    props: ['user'],

    template: `

    <div v-if="joined">
    <h1>Welcome, {{ currentUser }}!</h1>
    </div>
    `,

    data() {
        return {
          joined: false,
          currentUser: '',

          // rendering the user name once they join the chat     


        }
    },

    methods: {
        join() {
            this.joined = true;
            console.log(this.currentUser);
            // rendering the user name once they join the chat
            this.$emit('joined', this.currentUser);
        },
}
}
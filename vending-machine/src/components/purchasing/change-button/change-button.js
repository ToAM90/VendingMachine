export default {
    name: 'change-button',
    components: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        giveChange()
        {
            const change = this.$store.state.balance.toFixed(2)
            const message = `Thank you. Your change is  $ ${ change }`
            
            this.$store.commit('SET_MESSAGE', message)
            this.$store.commit('GIVE_CHANGE')
        }
    }
}

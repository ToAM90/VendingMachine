export default {
    name: 'current-balance',
    components: {},
    data() {
        return {}
    },
    computed: {
        balance(){
            return this.$store.state.balance.toFixed(2)
        }
    },
    methods: {}
}

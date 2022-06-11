export default {
    name: 'add-money-button',
    props: {
        value: 0
    },
    data() {
        return {}
    },
    computed: {},
    // events goes into methods
    methods: {
        addMoney() {
            this.$store.commit('ADD_MONEY', this.value)
        }
    }
}

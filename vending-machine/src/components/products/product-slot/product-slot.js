export default {
    name: 'product-slot',
    props: {
        product: {
            slotId: '',
            name: '',
            category: '',
            price: 0,
            quantity: 5
        }
    },
    data() {
        return {}
    },
    computed: {},
    methods: {
        buy()
        {
            const balance = this.$store.state.balance.toFixed(2)
            const price = this.product.price.toFixed(2)
            const quantity = this.product.quantity.toFixed(0)

            if (balance < price)
            {
                this.$store.commit('SET_MESSAGE', 'YOU OUTTA MONEY')
                return
            }

            if (quantity <= 0)
            {
                this.$store.commit('SET_MESSAGE', 'SOLD OUT')
                return
            }

            this.$store.commit('BUY_PRODUCT', this.product)
            this.$store.commit('SET_MESSAGE', 'mmmmm ...' + this.product.name)
        }
    }
}
import ProductSlot from '../product-slot/ProductSlot.vue'
import vendingMachineService from '../../../services/vending-machine-service.js'

export default {
    name: 'product-grid',
    components: {
        ProductSlot
    },
    data() {
        return {}
    },
    created(){
        //populate products when starting application from service
        const products = vendingMachineService.getAllProducts()
        //.map(product => ){    can inject here instead of through API or service 
            // return {
            //     ...product,
            //     quantity: 5
            // }
        //}
        ;
        console.table(products);
        //add products to the store
        this.$store.commit('LOAD_PRODUCTS', products);

    },
    computed: {},
    methods: {}
}
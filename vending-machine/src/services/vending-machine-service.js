//benefits of doing a service is you can point to API, dynamically change (add quantity) without changing every data
//easier to test 
class VendingMachineService{
    products = []
    constructor(){
        this.products = [
            {
                slotId: "A1",
                name: "Potato Crisps",
                price: 3.05,
                category: "Chip"
            },
            {
                slotId: "A2",
                name: "Stackers",
                price: 1.45,
                category: "Chip"
            },
            {
                slotId: "A3",
                name: "Grain Waves",
                price: 2.75,
                category: "Chip"
            },
            {
                slotId: "A4",
                name: "Cloud Popcorn",
                price: 3.65,
                category: "Chip"
            },
            {
                slotId: "B1",
                name: "Moonpie",
                price: 1.80,
                category: "Candy"
            },
            {
                slotId: "B2",
                name: "Cowtales",
                price: 1.50,
                category: "Candy"
            },
            {
                slotId: "B3",
                name: "Wonka Bar",
                price: 1.50,
                category: "Candy"
            },
            {
                slotId: "B4",
                name: "Crunchie",
                price: 1.75,
                category: "Candy"
            },
            {
                slotId: "C1",
                name: "Cola",
                price: 1.25,
                category: "Drink"
            },
            {
                slotId: "C2",
                name: "Dr. Salt",
                price: 1.50,
                category: "Drink"
            },
            {
                slotId: "C3",
                name: "Mountain Melter",
                price: 1.50,
                category: "Drink"
            },
            {
                slotId: "C4",
                name: "Heavy",
                price: 1.50,
                category: "Drink"
            },
            {
                slotId: "D1",
                name: "U-Chews",
                price: 0.85,
                category: "Gum"
            },
            {
                slotId: "D2",
                name: "Little League Chew",
                price: 0.95,
                category: "Gum"
            },
            {
                slotId: "D3",
                name: "Chiclets",
                price: 0.75,
                category: "Gum"
            },
            {
                slotId: "D4",
                name: "Triplemint",
                price: 0.75,
                category: "Gum"
            }
        ]
    }
    getAllProducts(){
        return this.products.map((product) => {
            return {
                ...product, //"..." create new object and expand properties, dont have to map everything manually
                quantity: 5 //add new property
                // API is responsible for adding quantity 
            }
        })

    }
}

export default new VendingMachineService()
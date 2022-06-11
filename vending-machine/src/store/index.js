import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    balance: 0,
    message: 'ppp',
    isMessageVisible: false
  },
  mutations: {
    // mutating products
    LOAD_PRODUCTS(state, products)
    {
      state.products = products
    },
    BUY_PRODUCT(state, product)
    {
      const balance = parseFloat(state.balance)
      const price = parseFloat(product.price)
      
      if (product.quantity > 0 &&  balance >= price)
      {
        state.balance -= price
        product.quantity -= 1
      }
    },

    // mutating balance
    ADD_MONEY(state, amount)
    {
      state.balance += amount
    },
    GIVE_CHANGE(state)
    {
      state.balance = 0
    },

    // mutate message
    SET_MESSAGE(state, message)
    {
      state.message = message
      state.isMessageVisible = true

      setTimeout(() =>
      {
        state.isMessageVisible = false
      }, 3000)
    }
  },
  actions: {
  },
  modules: {
  }
})

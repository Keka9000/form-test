
export default {

  state: [],

  mutations: {

    ADD_ORDER (state, data) {

        state.push(data)

    },

    CHANGE_ORDER (state, {data, index}) {

        state.splice(index, 1, data)

    },

  },

  actions: {

    addOrder ({ commit, getters }, data) {

        var orders = getters.getOrders
        var changedOrderIndex = -1

        orders.forEach((item, index) => {
            if(item.orderID === data.orderID) {
              changedOrderIndex = index
            }
          })

        changedOrderIndex > -1 ? commit('CHANGE_ORDER', {data, changedOrderIndex}) : commit('ADD_ORDER', data)

    },

  },

  getters: {

    getOrders (state) {

        return state

    },

  }

}

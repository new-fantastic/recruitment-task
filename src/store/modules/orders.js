const state = {
    orders: [],
    summaryPrice: 0,
    order: {
        pizzaPrice: null,
        name: null,
        ingredients: [
            {
                name: 'Pickled Cucumber ',
                value: null
            },
            {
                name: 'Broccoli',
                value: null
            },
            {
                name: 'Cherry Tomatoes',
                value: null
            },
            {
                name: 'Roasted Onion',
                value: null
            },
            {
                name: 'White Onion',
                value: null
            },
            {
                name: 'Beef',
                value: null
            },
            {
                name: 'Sausage',
                value: null
            },
            {
                name: 'Ham',
                value: null
            },
            {
                name: 'Green Olives',
                value: null
            },
            {
                name: 'Chicken',
                value: null
            }
        ]
    }
}

const getters = {
    orders: state => state.orders,
    pizzaWeight: state => state.weight,
    ingredients: state => state.order.ingredients,
    summaryPrice: state => state.summaryPrice
}

const actions = {
    addSize({ commit }, {name, weight, price}) {
        commit('setSize', name)
        commit('setWeight', weight)
        commit('setPizzaPrice', price)
        commit('setSummaryPrice', price)
    },
    addIngredients({ commit }, {quantity, index}) {
        state.summaryPrice += (quantity * 4)
        commit('setIngredient', {quantity, index})
    },
    pushOrder({ commit }) {
        commit('setOrders')
    }

}

const mutations = {
    setOrders: (state) => (state.orders.push(state.order)),
    setSize: (state, name) => (state.order.name = name),
    setWeight: (state, weight) => (state.weight = weight),
    setPizzaPrice: (state, price) => (state.order.pizzaPrice = parseFloat(price)),
    setSummaryPrice: (state, price) => (state.summaryPrice += parseFloat(price)),
    setIngredient: (state, {quantity, index}) => (state.order.ingredients[index].value = quantity)
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


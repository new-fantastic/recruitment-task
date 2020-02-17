const state = {
    orders: [],
    weight: null,
    order: {
        size: null,
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
    pizzaWeight: state => state.weight,
    ingredients: state => state.order.ingredients
}

const actions = {
    addSize({ commit }, {size, weight}) {
        commit('setSize', size)
        commit('setWeight', weight)
    },
    addIngredients({ commit }, {quantity, index}) {
        commit('setIngredient', {quantity, index})
    }

}

const mutations = {
    setSize: (state, size) => (state.order.size = size),
    setWeight: (state, weight) => (state.weight = weight),
    setIngredient: (state, {quantity, index}) => (state.order.ingredients[index].value = quantity)
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


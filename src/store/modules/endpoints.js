const endpointsService = require('../../services/EndpointsService')

const state = {
    startEndpoints: [],
    sizeEndpoints: [],
    ingredientsEndpoints: []
}

const getters = {
    startEndpoints: state => state.startEndpoints,
    sizeEndpoints: state => state.sizeEndpoints,
    ingredientsEndpoints: state => state.ingredientsEndpoints
}

const actions = {
    async getAllEndpoints ({ commit }) {
        const startEndpointsResponse = await endpointsService.getStartEndpoints()
        const sizeEndpointsResponse = await endpointsService.getOtherEndpoints('pizza_sizes')
        const ingredientsEndpointsResponse = await endpointsService.getOtherEndpoints('pizza_ingredients')

        commit('setStartEndpoints', startEndpointsResponse)
        commit('setSizeEndpoints', sizeEndpointsResponse)
        commit('setIngredientsEndpoints', ingredientsEndpointsResponse)
    }
}
const mutations = {
    setStartEndpoints: (state, startEndpoints) => state.startEndpoints = startEndpoints[0],
    setSizeEndpoints: (state, sizeEndpoints) => state.sizeEndpoints = sizeEndpoints,
    setIngredientsEndpoints: (state, ingredientsEndpoints) => state.ingredientsEndpoints = ingredientsEndpoints
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}

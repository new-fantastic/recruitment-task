const axios = require('axios')
const functions = require('../libs/helperFunctions')

module.exports = {
    getStartEndpoints: async () => {
        return axios.get('https://wp.recruitment.newfantastic.com/wp-json/wp/v2/pages?slug=welcome')
            .then(functions.getData)
            .then((data) => {
                return data.map(functions.filterStartEndpoints)
            })
    },
    getOtherEndpoints: async (view) => {
        return axios.get(`https://wp.recruitment.newfantastic.com/wp-json/wp/v2/${view}`)
            .then(functions.getData)
            .then((data) => {
                return data.map(functions.filterOtherEndpoints)
            })
    }
}



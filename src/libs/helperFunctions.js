module.exports = {
    getData: function ({ data }) {
        return data
    },
    filterStartEndpoints: function ({ title, content }) {
        return {
            title: title.rendered,
            content: content.rendered.substring(4, 31)
        }
    },
    filterOtherEndpoints: function ({ acf }) {
        return acf
    }
}

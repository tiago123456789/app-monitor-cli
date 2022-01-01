const { default: axios } = require("axios")

module.exports = {

    publishMetrics(data) {
        return axios.post("https://webhook.site/1672d769-11de-4304-9f1c-a6ef04f96015", data)
    }
}
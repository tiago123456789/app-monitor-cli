const metric = require("./metric")
const notificator = require("./notificator")

setInterval(async () => {
    const metrics = {
        cpu: await metric.cpu(),
        memory: await metric.memory(),
        createdAt: new Date()
    }

    console.log(metrics)
    notificator.publishMetrics(metrics);
    console.log("Published metrics in server %s", new Date())
}, 5000)

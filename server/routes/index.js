module.exports = app => {
    app.use("/api/jobs", require("./jobs.routes"))
    app.use("/api/user", require("./user.routes"))
    app.use("/api/message", require("./message.routes"))
}
import apiRouter from "./routes.js"

export default (app) => {
    app.use("/", apiRouter)
}
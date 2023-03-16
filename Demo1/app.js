import express from "express"
import routes from "./api/routes/index.js"
import cookieParser from "cookie-parser"
import cors from "cors"
// import preconditions from "express-preconditions"

const PORT = process.env.PORT || 5001;

const app = express()
//Node js handles etags logic on its own
app.use(express.json())
app.set("etag", false)
app.use(cookieParser())
app.use(cors())
// app.use(preconditions())

routes(app)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
import express, {urlencoded} from "express"
import router from "./routes/todo.routes.js"

const app = express()

app.use(express.json({limit:"16kb"}))
app.use(urlencoded({extended:true}))


app.use("/todo", router)
export default app
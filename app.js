import express, {urlencoded} from "express"
import router from "./routes/todo.routes.js"
import cors from "cors"
const app = express()


app.use(cors({
    origin: '*'
}))
app.use(express.json({limit:"16kb"}))
app.use(urlencoded({extended:true}))


app.use("/todo", router);


export default app
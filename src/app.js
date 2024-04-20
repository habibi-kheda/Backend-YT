import express from "express"
import cookieParser from "cookie-parser"
import { User } from "./models/user.models.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("C:/Users/HUZAIFA ANSARI/Documents/Backend Project/public"))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index")
});

export { app }
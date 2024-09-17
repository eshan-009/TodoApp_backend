const express = require("express");
const app = express();
const dbConnect = require("./config/database");
const routeIndex = require("./routes/routeIndex")
var cookieParser = require('cookie-parser')
const cors = require('cors')
require("dotenv").config()
const PORT =process.env.PORT || 4000;


dbConnect();
app.use(cors({
    credentials: true,
    origin: ['http://127.0.0.1:5500',`https://eshan-009.github.io/TodoApp_FrontEnd/`,`https://eshan-009.github.io`,`https://eshan-009.github.io/TodoApp_FrontEnd`,`https://eshan-009.github.io/`],
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
 }))

app.options('*', cors());

app.use(cookieParser());
app.use(express.json());

app.use("/api",routeIndex)

app.listen(PORT,()=>{
    console.log(`Server Started Successfully at ${PORT}`);
})
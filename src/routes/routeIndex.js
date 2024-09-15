const express = require("express");
const router = express.Router();
const todoRouter = require("./todoRoutes");
const authRouter = require("./authRoutes");




router.use("/todo",todoRouter);

router.use("/auth",authRouter);


module.exports = router
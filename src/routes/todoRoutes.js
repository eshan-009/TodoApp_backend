const express = require("express");
const router = express.Router();
const {addTodo} = require("../controllers/addTodo");
const {auth} = require("../middleware/auth");
const { getTodo } = require("../controllers/getTodo");
const { updateTodoStatus} = require("../controllers/updateTodoStatus");
const { updateTodo } = require("../controllers/updateTodo");
const { deleteTodo } = require("../controllers/deleteTodo");


router.post("/addTodo",auth,addTodo)
router.get("/getTodo",getTodo)
router.get("/getTodo/:id",getTodo)
router.put("/updateTodo/:id",auth,updateTodo)
router.patch("/updateTodoStatus/:id",auth,updateTodoStatus)
router.delete("/deleteTodo/:id",auth,deleteTodo)

module.exports = router
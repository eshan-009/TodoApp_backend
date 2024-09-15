const { default: mongoose } = require("mongoose");
const Todo = require("../models/todo");
const User = require("../models/user")
async function deleteTodo(req,res) {
   try{
    const {id} = req.params;
    const {userData} = req.body;
    await Todo.findByIdAndDelete({_id:id})
  
    const updateUser = await User.findById(userData);

    const index = updateUser.todos.indexOf(new mongoose.Types.ObjectId(id));
    updateUser.todos.splice(index,1); 
    updateUser.save()

    return res.status(200).json({
        message: " Todo Deleted Successfully"
    })
   }
   catch (err)
   {
    return res.status(500).json({
        message:"Error Deleting Todo",
        error : err
    })
   }
}

module.exports = {deleteTodo}
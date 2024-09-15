const Todo = require("../models/todo");
const User = require("../models/user");


async function addTodo(req,res) {

   try{
    const{title,description,dueDate,userData} = req.body;
    

    if(!title || !description || !dueDate)
    {
        return res.json({
            message:"Please Fll All details"
        })
    }

    const newProduct = await Todo.create({
        title:title,
        description:description,
        dueDate:new Date(dueDate),
        completed:false
    })
  
    const updateUser = await User.findById(userData)
  
    if(newProduct)
    {
        updateUser.todos.push(newProduct._id)
        updateUser.save()
        res.status(200).json({
            message:"Todo Added Successfully",
            productData : newProduct
        })
    }
   
   }
   catch (err){
    res.status(500).json({
        message : "Error Adding new Todo"
    })
   }
}

module.exports = {addTodo}
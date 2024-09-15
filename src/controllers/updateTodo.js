const Todo = require("../models/todo");


async function updateTodo(req,res) {
    try{
        const {id} = req.params;
        const {title,description,dueDate} = req.body
        if(!title || !description || !dueDate)
        {
            return res.status(400).json({
                message:"Please Fil all details"
            })
        }

       const productData =  await Todo.findById({_id:id})
    
      
    if(!productData)
    {
        return res.json({
            message:"Could Not find Todo"
        })
    }

  
    productData.title = title;
    productData.description = description;
    productData.dueDate = new Date(dueDate);


    productData.save();
    console.log(productData)
  

        return res.status(200).json({
            message: "Todo updated Successfully",
            data : productData
        })
       }
       catch (err)
       {
        return res.status(500).json({
            message:"Error updating  Todo",
            error : err
        })
       }
}

module.exports = {updateTodo}
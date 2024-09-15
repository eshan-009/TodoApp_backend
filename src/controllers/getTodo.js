const Product = require("../models/todo");

async function getTodo(req,res) {

try{
    const {id} = req.params;
    if(id)
    {
        const product = await Product.findById({_id:id});
        return res.status(200).json({
            message:"Todo fetched successfully",
            data : product
        })
    }
    
    const products = await Product.find()
    return res.status(200).json({
        message:"Todo fetched successfully",
        data : products
    })
}
catch (err){
    return res.status(500).json({
        message: "Error Fetching Todo Data",
        error : err
    })
}

}

module.exports = {getTodo}
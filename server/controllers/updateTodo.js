import TodoModel from "../models/todo.js"

const updateTodo = async(req,res,next)=>{
    try {
        const {id} = req.params;
        const {text,user_ID} = req.body;
        const todo = await TodoModel.findById(id);
        todo.text = text;
        await todo.save()
        const todos = await TodoModel.find({id:user_ID});
        res.json(todos);
    } catch (error) {
        console.log(error)
    }
}




export default updateTodo;
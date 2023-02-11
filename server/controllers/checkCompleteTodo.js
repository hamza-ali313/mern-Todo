import TodoModel from "../models/todo.js"

const checkCompleteTodo = async(req,res,next)=>{
    try {
        const {_id} = req.params;
        const {user_ID} = req.body;
        const todo = await TodoModel.findById(_id);
        todo.completed === false ? todo.completed = true : todo.completed = false;
        await todo.save()
        const todos = await TodoModel.find({id:user_ID});
        res.json(todos);
    } catch (error) {
        console.log(error)
    }
}




export default checkCompleteTodo;
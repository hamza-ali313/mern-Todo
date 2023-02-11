import TodoModel from "../models/todo.js"


const deleteTodo = async(req,res,next)=>{
  const {id} = req.params;
  const{localStorage_id} = req.body;
  const todo = await TodoModel.findById(id);
  await todo.remove();
  const todos = await TodoModel.find({id:localStorage_id});
  res.json(todos);
}

export default deleteTodo;
import TodoModel from "../models/todo.js"


const checkEditing = async(req,res,next)=>{
  const {_id} = req.params;
  const {user_ID} = req.body;
  const todo = await TodoModel.findById(_id)
  todo.editing === false ? todo.editing = true : todo.editing = false;
  await todo.save();
  const allTodos = await TodoModel.find({id:user_ID})
  res.json(allTodos)
}

export default checkEditing
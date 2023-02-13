import TodoModel from "../models/todo.js"
// import UserModel from "../models/users.js";

const readTodo = async(req,res,next)=>{
  // const user = await UserModel.find({id:req.params.id});
  const todos = await TodoModel.find({id:req.params.id});
  res.json(todos);
}

export default readTodo;
// {username:req.cookies['username']}
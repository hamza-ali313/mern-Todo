import TodoModel from "../models/todo.js"


const createTodo = async(req,res,next)=>{
  const {text,id} = req.body;
  const todo = new TodoModel({
    id:id,
    text,// if key and are same we can write single name
    completed:false,
    editing:false
  });
  const newTodo = await todo.save()
  const allTodos = await TodoModel.find({id:id})
  res.json(allTodos)
}

export default createTodo
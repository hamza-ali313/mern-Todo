import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  editing: {
    type: Boolean,
  }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

export default TodoModel;
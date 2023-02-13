import express from 'express'
import createTodo from '../controllers/createTodo.js'
import deleteTodo from '../controllers/deleteTodo.js'
import updateTodo from '../controllers/updateTodo.js'
import readTodo from '../controllers/readTodo.js'
import checkCompleteTodo from '../controllers/checkCompleteTodo.js'
import checkEditing from '../controllers/checkEditing.js'


const router = express.Router();

// createTodo
router.post('/',createTodo);
// readTodo
router.get('/:id',readTodo);
// updateTodo
router.put('/update/:id',updateTodo);
// deleteTodo
router.post('/:id',deleteTodo);
// checkCompleteTOdo
router.post('/complete/:_id',checkCompleteTodo);
// check Editing
router.put('/checkediting/:_id',checkEditing);

export default router;
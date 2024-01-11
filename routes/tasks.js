const express=require('express');
const router=express.Router();
const {getAllTasks,createTask,getTask,deleteTask,updateTask}=require('../controllers/tasks')
router.route('/').get(getAllTasks)
router.route('/:id').get(getTask)
router.route('/').post(createTask)
router.route('/:id').delete(deleteTask)
router.route('/:id').patch(updateTask)


module.exports=router
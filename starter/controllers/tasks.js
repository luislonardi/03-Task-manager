const Task=require('../models/Task')

const getAllTasks= (req,res)=>{
    res.send('All Items from the file')
}

const createTask= async (req,res)=>{
    const task= await Task.create(req.body)
    res.status(201).json({task})
    console.log(req.body)
}
const getTask=(req,res)=>{
    res.send('Get single task')
}

const updateTask=(req,res)=>{
    res.send('Update Task')
}

const deleteTask=(req,res)=>{
    res.send('delete Task')
}



module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
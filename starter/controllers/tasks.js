const getAllTasks= (req,res)=>{
    res.send('All Items from the file')
}

const createTask=(res,req)=>{
    res.send('create Tasks')
}
const getTask=(res,req)=>{
    res.send('Get single task')
}

const updateTask=(res,req)=>{
    res.send('Update Task')
}

const deleteTask=(res,req)=>{
    res.send('delete Task')
}



module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
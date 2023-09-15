const Task = require('../models/tasks')
const creating = async(Instance)=>{
try{
    return await Task.create(Instance)
}catch(e){return {error:e}}}
creating()

const getAllTasks = (req,res)=>{
    res.json(req.params)
}
const getSingleTask = (req,res)=>{
    console.log('task has been created');
    if(Number(req.params.id)===1){ 
    return res.json({name:'hi'})}
    res.send('id not found')
}
const createTask = async(req,res)=>{
    const data = await creating(req.body)
    res.json(data)
}
const updateTask = (req,res)=>{
    console.log('task has been created'); 
    res.send('id changed')   
}
const deleteTask = (req,res)=>{
    res.send('account has been deleted')
}

module.exports={getAllTasks,getSingleTask,createTask,updateTask,deleteTask}
const express = require('express')
const connectDB = require('./db/connect')
const app = express()
const tasks = require('./routes/tasks.js')
const port = 5000
require('dotenv').config()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome')
})

app.use('/api/v1/tasks',tasks)

const start = async()=>{
    try{
        await connectDB(process.env.Mongo_Uri)
        app.listen(port,()=>{console.log(`server started on port ${port}`)})        
    }catch{(error)=>{
        console.log(error);
    }}
}
start()
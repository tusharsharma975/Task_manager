
const express= require('express');
const app=express();
const port=process.env.PORT || 3000;
require('dotenv').config()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')

//Routes
app.use(express.static('./public'))
app.use(express.json()); 

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)


const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        console.log(`Connected to DB on port ${port}...`);
        app.listen(port,()=>{
            console.log("Server is Live")
        })
    } catch(err){
        console.log(err)
    }
}

start();

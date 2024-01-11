const mongoose=require('mongoose')

const connectDB=(url)=>{
    //returning promise here
   return mongoose.connect(url,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}
module.exports=connectDB
// .then(()=>console.log('Connected to DB...')).catch((err)=>console.log(err))

const mongoose =require('mongoose');

//validation here 
const TaskSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide a name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 character'],
    },
        completed:{
            type:Boolean,
            default:false,
        }
})
//the property we define in schema will be pass to database everything else will be ignored..
//mongose.model is wrapper for schema it provide interface to Database
module.exports=mongoose.model('Task',TaskSchema)
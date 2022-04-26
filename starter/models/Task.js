const mongoose=require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,'must provide a name'],
        trim:true,
        maxLength: [20, 'name can not be greater than 20']
    },
    completed:{
        type: Boolean,
        default: false,
    }
})
module.exports=mongoose.model('Task',TaskSchema)
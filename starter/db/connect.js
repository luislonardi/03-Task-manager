const mongoose=require('mongoose')


//password para la BD


const connectDB= (url)=>{
    return
    mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}

module.exports=connectDB

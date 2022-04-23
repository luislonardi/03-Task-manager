const mongoose=require('mongoose')
// const connectionString= "mongodb+srv://luis:Kolo1980@cluster0.rrt53.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority"

//password para la BD

const connectDB=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports= connectDB



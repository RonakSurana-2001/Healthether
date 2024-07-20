const mongoose=require("mongoose")
const connectToDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to DB")
    }catch(err){
        console.log("Not able to connect to db",err)
    }
}
module.exports=connectToDb
const mongoose=require("mongoose")

const followUpSchema=new mongoose.Schema({
    followupDate:{
        type:String,
        required:true
    },
    timeHours:{
        type:String,
        required:true
    },
    timeMinutes:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('followups',followUpSchema)
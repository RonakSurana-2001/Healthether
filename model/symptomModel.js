const mongoose=require("mongoose")

const symptomsSchema=new mongoose.Schema({
    symptomName:{
        type:String,
        required:true
    },
    healingTime:{
        type:Number,
        required:true
    },
    diagnosis:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("symptoms",symptomsSchema)
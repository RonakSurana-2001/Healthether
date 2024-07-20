const symptomModel=require("../model/symptomModel")

const symptomsContoller=async(req,res)=>{
    try{
        const {symptomName,healingTime,diagnosis}=req.body
        const data=new symptomModel({symptomName,healingTime,diagnosis})
        data.save()
        res.send({success:true,message:"Information Saved"})
    } catch(err){
        console.log(err)
        res.send({success:false,message:err})
    }
}

module.exports={symptomsContoller}
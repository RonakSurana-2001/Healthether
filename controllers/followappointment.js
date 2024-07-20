const followUpSchema=require("../model/followupdb")

const followup = async (req, res) => {
    try {
        const {followupDate,timeHours,timeMinutes}=req.body
        const data=new followUpSchema({followupDate:followupDate,timeHours:timeHours,timeMinutes:timeMinutes})
        await data.save()
        res.send({success:true,message:"Information Saved Successfully"})
    } catch (err) {
        console.log(err)
        res.send({ success: false, message: "Some Error Occurred" })
    }
}

module.exports={followup}
const express=require("express")
const router=express.Router()
const {followup}=require("../controllers/followappointment")

router.post('/follow',followup)

module.exports=router
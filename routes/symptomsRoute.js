const express=require("express")
const router=express.Router()
const {symptomsContoller}=require("../controllers/symptomsController")

router.post("/sym",symptomsContoller)

module.exports=router
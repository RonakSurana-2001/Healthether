const express=require("express")
const app=express()
const connectToDb=require("./db/db")
const { configDotenv } = require("dotenv")
const PORT=3000 || process.env.PORT

app.use(express.json())
configDotenv()
connectToDb()

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.use('/followUpAppointment',require("./routes/FollowUpAppointment"))
app.use('/symptoms',require("./routes/symptomsRoute"))

app.listen(PORT,()=>{
    console.log("App is listening to PORT ",PORT)
})
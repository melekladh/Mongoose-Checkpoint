const express=require("express")
const router=express.Router()
const User=require("../models/userSchema")
router.post("/post",async(req,res)=>{

    try {
        const user=await User.create(req.body)
        res.status(201).json({ msg:"user created",user})
    } catch (error) {
        res.json({ err:"sthng went wrong try again ",error})

    }
})

module.exports=router
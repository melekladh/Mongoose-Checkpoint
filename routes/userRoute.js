const express=require("express")
const router=express.Router()
const User=require("../models/userSchema")
router.post("/postt",async(req,res)=>{

    try {
        const user=await User.create(req.body)
        res.status(201).json({ msg:"user created",user})
    } catch (error) {
        res.json({ err:"sthng went wrong try again ",error})

    }
})

router.get("/get",async(req,res)=>{

    try {
        res.status(201).json({ msg:"user created"})
    } catch (error) {
        res.json({ err:"sthng went wrong try again ",error})

    }
})
router.get("/getusers",async(req,res)=>{

    try {
        const users=await User.find()
        res.status(200).json({msg:"get all users" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
router.get("/getfoods/:food",async(req,res)=>{

    try {
        const users=await User.findOne({favoriteFoods:req.params.food})
        res.status(200).json({msg:"get all users" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
router.get("/getuser/:user",async(req,res)=>{

    try {
        const users=await User.findById(req.params.user)
        res.status(200).json({msg:"get all users" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
router.put("/updateuser/:user",async(req,res)=>{

    try {
        const users=await User.findByIdAndUpdate(req.params.user, req.body,{new:true})
        res.status(200).json({msg:"get all users" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})

router.delete("/deleteuser/:user",async(req,res)=>{

    try {
        const users=await User.findByIdAndDelete(req.params.user, req.body)
        res.status(200).json({msg:"get all users" ,users})

    } catch (error) {
        res.status(500).json({msg:"something went wrong" })

    }
})
module.exports=router
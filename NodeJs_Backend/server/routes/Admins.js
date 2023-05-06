const express = require('express');
const router = express.Router();
const { admin, selling_company, ship_company } = require("../models")
//const { company } = require("../models");
const { json } = require('body-parser');

//Register as an admin
router.post("/Register", async (req,res)=>{
    const adminData = req.body
    await admin.create(adminData)
    res.json(adminData)
    
})

//Get all Admins
router.get("/getAdmins", async (req,res)=>{
    const listOfAdmins = await admin.findAll(); 
    res.json(listOfAdmins)
})



//Register A selling company
router.post("/RegisterCompany", async (req,res)=>{
    const companyData = req.body
    await selling_company.create(companyData)
    res.json(companyData)
    
    
})


//Get all Selling Companies
router.get("/getSellingCompanies", async (req,res)=>{
    const listOfCompanies = await selling_company.findAll(); 
    res.json(listOfCompanies)
})


//Add SHipping company
router.post("/AddShippingCompany", async (req,res)=>{
    const shipData = req.body
    await ship_company.create(shipData)
    res.json(shipData)
    
    
})


//Get all Selling Companies
router.get("/getShippingCompanies", async (req,res)=>{
    const listOfCompanies = await ship_company.findAll(); 
    res.json(listOfCompanies)
})

module.exports = router;
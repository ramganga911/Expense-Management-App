const transactionModel = require('../models/transectionModel');
const TransectionModel= require('../models/transectionModel');
const moment = require('moment')

const getAlltransection=async(req,res)=>{
    try {
        const {frequency, selectDate, type} = req.body
        const transection = await TransectionModel.find({
            ...(frequency !== "custom"?{
                date:{$gt: moment().subtract(Number(frequency),"d").toDate()},
            }:{
                date:{
                    $gte: selectDate[0],
                    $lte: selectDate[1],
                },
            }),
            userid:req.body.userid,
            ...(type !== 'all'&& {type}),
        });
        res.status(200).json(transection);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const deleteTransection= async(req,res)=>{
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transacationId})
        res.status(200).send("Transaction Deleted");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const editTransection = async(req,res)=>{
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transacationId}, req.body.payload);
        res.status(200).send("Edit Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}


const addTransection=async(req,res)=>{
    try {
        const newTransection  = new TransectionModel(req.body);
        await newTransection.save();
        res.status(201).send('Transection Created');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }

}

module.exports={getAlltransection,addTransection,editTransection,deleteTransection};
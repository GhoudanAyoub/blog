var express = require('express');
var cors = require('cors');
var bp = require('body-parser');
var path =require('path');
var MongoClient = require("mongodb").MongoClient;


const app=express();

app.use(cors());
app.use(express.static(path.join(__dirname,'/build')));
app.use(bp.json());

app.get("/api/articles/:name",async (req,res)=>{
    console.log("Post recieved");
   try {
    const name=req.params.name;
    const client= await MongoClient.connect("mongodb://localhost:27017",{useNewUrlParser:true, useUnifiedTopology: true });
    const db= client.db('blogdb');
    const ars=await db.collection('articles').findOne({name});

    res.status(200).json(ars);
    client.close();
       
   } catch (error) {
    res.status(200);
       
   } 
});

app.get("/api/articles/:name/up",async (req,res)=>{
    try {
        const name=req.params.name;
        const client= await MongoClient.connect("mongodb://localhost:27017",{useNewUrlParser:true, useUnifiedTopology: true });
        const db= client.db('blogdb');
        const ars=await db.collection('articles').findOne({name});

        ars.votes+=1;
        await db.collection('articles').updateOne({name}, {'$set' :ars});
        res.status(200).json(ars);
        client.close();
           
       } catch (error) {
        res.status(500);
           
       } 
});

app.post("/api/articles/:name/ud",async (req,res)=>{
    try {
        const name=req.params.name;
        const {user, comment}=req.body;
        const client= await MongoClient.connect("mongodb://localhost:27017",{useNewUrlParser:true, useUnifiedTopology: true });
        const db= client.db('blogdb');
        const ars=await db.collection('articles').findOne({name});

        ars.comments.push({user, comment});
        await db.collection('articles').updateOne({name}, {'$set' :ars});
        res.status(200).json(ars);
        client.close();
           
       } catch (error) {
        res.status(500);
           
       } 
});
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'build/index.html'))
})

app.listen(8000, (err)=>console.log("port 8000"));
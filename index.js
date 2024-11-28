const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, "public")))
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"public", "try.html"));
})

app.listen(PORT, (err)=>{
    if (err){
        console.log(err);
    }
    console.log(`Connected to ${PORT}`);
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((err)=>{
        console.log(err);
    });
})
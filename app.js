const express = require("express");
const app = express();
const port = 7000 || process.env.PORT;
const razorPay = require("./razorpay")
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/razorpay",razorPay)
app.listen(port,(port)=>{console.log("Server running on port "+port)})
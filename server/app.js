const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expenseRouter=require('./routes/expenseRoutes');
const cors = require("cors");

const { User, Expense } = require("./models/expense");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',expenseRouter);



app.listen(8000,()=>{
    console.log("port is listening on 8000");
})

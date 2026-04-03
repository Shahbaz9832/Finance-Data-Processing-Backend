const express=require('express');

const dotenv=require('dotenv')
dotenv.config();
connectDB=require('./config/config.database.js');
connectDB();


const app=express();
app.use(express.json());
// Routes
app.use("/auth", require("./routes/auth.routes"));
app.use("/records", require("./routes/record.routes"));
app.use("/dashboard", require("./routes/dashboard.routes"));
app.use("/users", require("./routes/user.routes"));
app.use("/", require("./routes/test.routes"));

app.get('/',(req,res)=>{
    res.send("Finance API Running");
});
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});

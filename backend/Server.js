import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/ConnectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/UserRoutes.js";
import TaskRoutes from "./Routes/TaskRoutes.js"
dotenv.config();
connectDB();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use("/api/users",userRoutes);
app.use("/api",TaskRoutes);
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server Started at local host ${PORT}`)
})
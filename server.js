import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";


dotenv.config();

await mongoose.connect(process.env.MONGO_URL);
console.log("connected to mongodb;");

// db.on("error", (err)=>{
//     console.log(err)
// })

// db.once("open",()=>{
//     console.log("Database Conection Esablished!")
// })

const app = express();
const PORT = 5000;
app.use(express.json());

// process.env.PORT ||

app.listen(PORT, (req, res) => {
  console.log(`listening on port ${PORT}`);
});

app.use("/api/user", userRouter);

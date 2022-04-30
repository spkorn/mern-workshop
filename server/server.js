import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import blogRoute from "./route/blogs.js";

dotenv.config();

const app = express();
const port = 4000;

// connect cloud database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  })
  .then(() => console.log("เชื่อมต่อเรียบร้อย"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// route
app.use("/api", blogRoute);

app.listen(port, () => {
  console.log(`Server run on port ${port}`);
});

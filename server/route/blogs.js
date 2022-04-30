import express from "express";
import { create } from "../controller/blogController.js";

const router = express.Router();

router.get("/blogs", create);

export default router;

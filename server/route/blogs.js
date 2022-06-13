import express from "express";
import { create } from "../controller/blogController.js";

const router = express.Router();

router.post("/create", create);

export default router;

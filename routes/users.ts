import express from "express";
const router = express.Router();
import { listUsers } from "../src/controllers/userController";

router.get("/", listUsers);

export default router;

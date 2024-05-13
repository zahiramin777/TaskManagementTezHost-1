import express from "express";
import { Router } from "express";
import { AddTask, RemoveTask, getalltask } from "../Controllers/TaskController.js";

const router =express.Router();

router.post("/addtask", AddTask);
router.get("/getalltask", getalltask);
// router.post("/removetask:id", RemoveTask);
export default router;
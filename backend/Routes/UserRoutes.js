import express from "express";
import { Router } from "express";
import { signupUser,loginUser,logoutUser} from "../Controllers/UserController.js";
import protectRoute from "../Middlewares/ProtectRoute.js";

const router =express.Router();
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout",logoutUser);

export default router;
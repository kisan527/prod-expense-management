import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

//router object

const router = express.Router();

//routers
//POST/Login
router.post("/login", loginController);

//POST/Register
router.post("/register", registerController);

export default router;

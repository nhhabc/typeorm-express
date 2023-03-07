import { UserController } from './../src/controller/UserController';
import { Router } from "express";

const router = Router();

const userController = new UserController 

router.get("/user", userController.getAllUsers)

export default router
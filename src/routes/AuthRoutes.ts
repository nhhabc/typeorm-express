import { AuthController } from '../controller/AuthController';
import { Router } from "express";

const router = Router();

router.post("/login", AuthController.login)

export default router
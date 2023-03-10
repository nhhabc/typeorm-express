import { checkUser } from "./../middleware/check-user";
import { Router } from "express";
import { ApartmentController } from "../controller/ApartmentController";
import { upload } from "../middleware/multer";

const router = Router();

router.post(
  "/admin/:query",
  upload.fields([{ name: "detail", maxCount: 1 }, { name: "files" }]),
  ApartmentController.createApartmentPost
);

router.get('/:query', ApartmentController.getAllApartmentPost)

export default router;

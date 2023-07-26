import { Router } from "express";
import multer from "multer";
import uploadConfig from "../config/upload";

import { OrphanageController } from "../controllers/OrphanagesController";

const orphanageRoute = Router();

const orphanageController = new OrphanageController();
const upload = multer(uploadConfig);

orphanageRoute.get("/", orphanageController.getAll);
orphanageRoute.get("/:id", orphanageController.getOne);
orphanageRoute.post("/", upload.array("images"), orphanageController.create);

export default orphanageRoute;

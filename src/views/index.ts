import { Router } from "express";
import orphanageRoute from "./OrphanagesRoute";

const router = Router();

router.use("/orphanage", orphanageRoute);

export default router;

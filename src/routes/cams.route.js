import { Router } from "express";
import cams_controller from "../controllers/cams.controller.js";

const route = Router();

route.get("/", cams_controller.getAllReport)
route.get("/:id", cams_controller.getOneReport)
route.post("/", cams_controller.createReport)

export default route;
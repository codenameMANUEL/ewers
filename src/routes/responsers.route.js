import { Router } from "express";
import responsers_controller from  "../controllers/responders.controller.js"

const route = Router();

route.get("/", responsers_controller.getAllReport)
route.get("/:id", responsers_controller.getOneReport)
route.post("/", responsers_controller.createReport)

export default route;
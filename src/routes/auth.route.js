import { Router } from "express";
import auth_controller from '../controllers/auth.controller.js'

const route = Router();


route.post("/login", auth_controller.login);


export default route;

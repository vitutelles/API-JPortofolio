import { Router } from "express";
const router = Router();

import { create, findAll, topNews, findByid } from "../controllers/news.contoller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


router.post("/",authMiddleware, create)
router.get("/", findAll)
router.get("/top" , topNews)
router.get("/:id", findByid)











export default router;
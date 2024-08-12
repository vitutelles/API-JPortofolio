import { Router } from "express";
const router = Router();

import { create, findAll, topNews, findByid, searchByTitle } from "../controllers/news.contoller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


router.post("/",authMiddleware, create)
router.get("/", findAll)
router.get("/top" , topNews)
router.get("/search" , searchByTitle)



router.get("/:id", authMiddleware, findByid)









export default router;
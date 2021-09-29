import { Router } from "express";

import { UserController } from "./controller/UserController";

const router = Router();

router.get("/users", UserController.find);
router.post("/users", UserController.create);

export default router;
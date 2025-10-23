import express from "express";
import { sepatuController } from "../controllers/sepatuController.js";

const router = express.Router();

router.get("/", sepatuController.getAll);
router.get("/:id", sepatuController.getById);
router.post("/", sepatuController.create);
router.put("/:id", sepatuController.update);
router.delete("/:id", sepatuController.remove);

export default router;

import { Router } from "express";
import { addUserHandler, deleteUserHandler, getUserById, getUsers, updateUserHandler } from "../data/controllers/user.controller";

export const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", addUserHandler);
router.delete("/:id", deleteUserHandler);
router.patch("/:id", updateUserHandler);

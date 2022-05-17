import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
import { verifyAdmin, verifyUser } from "../middleware/authUser.js";

const router = express.Router();

router.get("/", verifyAdmin, getUsers);

router.get("/:id", verifyUser, getUser);

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

export default router;

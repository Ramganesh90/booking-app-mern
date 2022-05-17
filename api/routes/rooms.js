import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../middleware/authUser.js";

const router = express.Router();

router.get("/", getRooms);

router.post("/:hotelId", verifyAdmin, createRoom);

router.get("/:id", verifyAdmin, getRoom);

router.put("/:id", verifyAdmin, updateRoom);

router.delete("/:hotelId/:id", verifyAdmin, deleteRoom);

export default router;

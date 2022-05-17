import express from "express";
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../middleware/authUser.js";

const router = express.Router();

router.get("/", getHotels);

router.get("/:id", getHotel);

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

export default router;

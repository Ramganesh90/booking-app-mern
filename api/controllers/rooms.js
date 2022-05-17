import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelId, {
            $push: { rooms: savedRoom._id }
        });
        res.status(200).json(savedRoom);
    } catch (error) {
        next(error);
    }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updatedRoom);
    } catch (error) {
        return next(error);
    }
};

export const deleteRoom = async (req, res, next) => {
    try {
        const hotelId = req.params.hotelId;
        await Room.findByIdAndDelete(req.params.id);
        await Hotel.findByIdAndUpdate(hotelId, {
            $pull: { rooms: req.params.id }
        });
        res.status(200).json("Room Deleted");
    } catch (error) {
        return next(error);
    }
};

export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) {
            return next({ status: 404, message: "Room Not found" });
        }
        res.status(200).json(room);
    } catch (error) {
        return next(error);
    }
};

export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        return next(error);
    }
};

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import { handleError } from "./middleware/handleError.js";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 5000;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN_URL);
        console.log("Connected to mongo");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Mongo DB disconnected!!!");
});

mongoose.connection.on("connected", () => {
    console.log("Mongo DB connected!!!");
});
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", userRoute);

app.use(handleError);

app.listen(PORT, () => {
    connect();
    console.log("API started and listening at Port " + PORT);
});

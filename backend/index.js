import { app } from "./app.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

//cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}...`);
    });
  } catch (error) {
    console.log("Connection error : ", error);
  }
};

start();

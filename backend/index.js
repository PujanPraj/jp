import { app } from "./app.js";
import { connectDB } from "./config/db.js";

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

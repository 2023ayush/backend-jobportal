import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch(() => {
      console.log("Failed connection");
    });
};

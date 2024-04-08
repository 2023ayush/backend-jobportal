import mongoose from "mongoose";
import validator from "validator";
//import bcrypt from "bcrypt";
//import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name!"],
    minLength: [3, "Name Must Contain at least 3 Characters"],
    maxLength: [30, "Name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, " Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  phone: {
    type: Number,
    required: [true, " Please provide your phone number"],
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
    minLength: [8, "Password Must Contain at least 8 Characters"],
  },
  role: {
    type: String,
    required: [true, "Please provide your role"],
    enum: ["Job Seeker", "Employer"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    min: [4, "Too short, min is 4 characters"],
    max: [32, "Too long, max is 32 characters"],
    required: "Username is Required",
  },
  email: {
    type: String,
    min: [4, "Too short, min is 4 characters"],
    max: [32, "Too long, max is 32 characters"],
    unique: true,
    lowercase: true,
    required: "Email is Required",
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
  },
  password: {
    type: String,
    min: [8, "Too short, min is 8 characters"],
    max: [32, "Too long, max is 32 characters"],
    required: "Password is Required",
  },
  isAdmin: {
    type: Boolean
  },
  timestamps: true,
});

const User = model("users", UserSchema);

module.exports = User;

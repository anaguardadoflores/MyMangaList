const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    avatar: {
      type: String,
      default: 'https://i.pinimg.com/originals/f8/1b/a6/f81ba6a46659f461955e27a8959ced46.jpg',
    },
    lists: [{
      type: Schema.Types.ObjectId,
      ref: 'List'
    }],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
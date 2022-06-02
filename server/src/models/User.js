import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
    },
    genre: {
      type: [String],
      default:[]
    },
    tag: {
      type: [String],
      default:[]
    },
  },
  { timestamps: true },
);
const UserModel = mongoose.model("User", UserSchema);
export { UserModel };

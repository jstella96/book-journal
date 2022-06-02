import mongoose from "mongoose";
const Tag = new mongoose.Schema({ color: String, name: String})
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      index: true,
    },
    tag: {
      type: [Tag]
    },
  },
  { timestamps: true },
);
const UserModel = mongoose.model("User", UserSchema);
export { UserModel };

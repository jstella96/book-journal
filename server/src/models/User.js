import mongoose from "mongoose";
const TagShema = new mongoose.Schema({ name : String });

const GenreShema = new mongoose.Schema({ name : String });

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      index: true,
      required:true,
      unique: true
    },
    name: {
      type: String,
      required:true,
      default:''
    },
    genres: {
      type: [GenreShema],
      default:[]
    },
 
    tags: {
      type: [TagShema],
      default:[]
    },
  },
  { timestamps: true },
);
const UserModel = mongoose.model("User", UserSchema);
export { UserModel };

import { Schema, model, models } from "mongoose";
import { nanoid } from "nanoid";


const administradores = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    rol: {
      type: Number,
      default: 1,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
     _id: false 
  },
);

export default models.administradores ||
  model("administradores", administradores);

import { Schema, model, models } from "mongoose";
import { nanoid } from "nanoid";
const productos = new Schema(
  {
    _id: {
      type: String,
      default: () => nanoid(),
    },
    nombre: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
      trim: true,
    },
    cantidad: {
      type: Number,
      required: true,
      trim: true,
    },
    marca: {
      type: String,
      required: true,
      trim: true,
    },
    proveedor: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    id: false,
  }
);

export default models.productos || model("productos", productos);

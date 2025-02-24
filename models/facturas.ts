import { Schema, model, models } from "mongoose";
const clientes = new Schema(
  {
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
  }
);

export default models.clientes || model("clientes", clientes);

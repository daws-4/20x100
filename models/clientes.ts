import { Schema, model, models } from "mongoose";
const clientes = new Schema(
  {
    cedula:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    nombres: {
      type: String,
      required: true,
      trim: true,
    },
    apellidos: {
      type: String,
      required: true,
      trim: true,
    },
    direccion: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    id: false,
    timestamps: true,
  }
);

export default models.clientes ||
  model("clientes", clientes);

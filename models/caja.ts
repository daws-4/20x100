import { Schema, model, models } from "mongoose";
const caja = new Schema(
  {
    debito: {
      type: Number,
      trim: true,
    },
    credito: {
      type: Number,
      trim: true,
    },
    balance: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.caja || model("caja", caja);

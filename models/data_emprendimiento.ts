import { Schema, model, models } from "mongoose";
const data_emprendimiento = new Schema(
  {
    nombres: {
      type: String,
      required: true,
      trim: true,
    },
    dirección: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.data_emprendimiento || model("data_emprendimiento", data_emprendimiento);

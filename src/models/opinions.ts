import mongoose, { Schema, models, model } from "mongoose";

const opinionSchema = new Schema({
  userName: { type: String, required: true },
  opinion: { type: String, required: true },
  rate: { type: Number, required: true }
});
 const Opinion = models.Opinion || model("Opinion", opinionSchema);
 export default Opinion;

import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const playerSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  position: { type: String, required: true }, 
  image: { type: String, required: true }, 
  number: { type: Number, required: true }, 
  nationality: { type: String, required: true }, 
});

const Player = mongoose.models.Player || mongoose.model("Player", playerSchema);

export default Player;

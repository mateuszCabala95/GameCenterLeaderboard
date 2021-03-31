import {Schema, model} from "mongoose";
import * as mongoose from "mongoose";

const ScoreSchema = new Schema({
  score: {
    type: Number,
    required: true
  },

  player:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "PlayerModel"
  }
})

const ScoreModel = model("ScoreModel", ScoreSchema)

export default ScoreModel

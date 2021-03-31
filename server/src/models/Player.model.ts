import {Schema, model} from "mongoose";

const PlayerSchema = new Schema({
  name:{
    type: String,
    required: true
  }
})



const PlayerModel = model("PlayerModel", PlayerSchema)
export default PlayerModel

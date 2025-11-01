import mongoose from "mongoose";

import { PositionSchema } from "../schemas/PositionsSchema.js";
export const Positionmodel =mongoose.model("position",PositionSchema)

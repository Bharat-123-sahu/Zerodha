import mongoose from "mongoose";

import { HoldingSchema } from "../schemas/HoldingsSchema.js";
export const Holdingmodel = mongoose.model("holding", HoldingSchema);

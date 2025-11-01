import mongoose from "mongoose";

import { OrdersSchema } from "../schemas/OrdersSchema.js";
export const Ordersmodel = mongoose.model("order", OrdersSchema);

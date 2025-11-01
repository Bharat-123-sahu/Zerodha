import { config } from "dotenv";
import jwt from "jsonwebtoken";

config(); // initialize dotenv

export const CreateSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60, // 3 days in seconds
  });
};

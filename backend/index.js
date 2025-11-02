import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import bcrypt from "bcryptjs";
import { CreateSecretToken } from "./utils/SecretToken.js";
import cookieParser from "cookie-parser";

import { Holdingmodel } from "./model/Holdingmodel.js";
import { Positionmodel } from "./model/Positionmodel.js";
import { Ordersmodel } from "./model/Ordersmodel.js";
import { UserModel } from "./model/Usermomdel.js";
import { userVerification } from "./middleware/Authmiddleware.js";

const app = express();
app.use(cookieParser());
config();
const allOrigin = ["http://localhost:3000", "http://localhost:4000"];
app.use(
  cors({
    origin: allOrigin, // React app URL
    credentials: true,
  })
);
app.use(express.json());
const uri = process.env.MONGO_URL;
const PORT = process.env.PORT || 1245;
app.get("/", (req, res) => {
  res.send(`HELLO`);
});

// app.get("/addholdings", async (req, res) => {
//   try {
//     let tempHolding = [
//       {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
//     ];
//     tempHolding.forEach((item) => {
//       let newHolding =  new Holdingmodel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//       });
//        newHolding.save();

//     });
//     res.send("done");
//   } catch (err) {
//     console.log(err);
//   }
// });
// app.get("/addposition",async(req,res)=>{
//   try{
//     let tempposition = [

//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },

//     ];
//     tempposition.forEach((item)=>{
//       let newposition=new Positionmodel({
//         product: item.product,
//   name: item.name,
//   qty: item.qty,
//   avg: item.avg,
//   price: item.price,
//   net: item.net,
//   day: item.day,
//   isloss: item.isLoss,
//       });
//       newposition.save();

//     })
//     res.send("done")
//   }
//   catch(err){
//   console.log(err)
//   }
// })
app.get("/allholding", async (req, res) => {
  let allHoldings = await Holdingmodel.find({});

  res.json(allHoldings);
});
app.get("/allposition", async (req, res) => {
  let allpositions = await Positionmodel.find({});

  res.json(allpositions);
});
app.post("/newOrder", async (req, res) => {
  const neworders = new Ordersmodel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  neworders.save();
  res.send("done success");
});
app.get("/allorder", async (req, res) => {
  const resu = await Ordersmodel.find({});
  res.json(resu);
});

app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const existing = await UserModel.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    // 🔑 Hash the password properly
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await UserModel.create({
      email,
      username,
      password: hashedPassword,
    });

    const token = CreateSecretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: true });

    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ---------------- Login ----------------
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const pass = await bcrypt.compare(password, user.password);
    console.log("Password match:", pass); // ✅ Should print true

    if (!pass)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = CreateSecretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: true });
    res.status(200).json({ message: "User login successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/", userVerification);

app.listen(PORT, () => {
  console.log(
    `the app is running on this port http://localhost:1245/ success run on port `
  );
  mongoose.connect(uri);
  console.log("db connect");
});

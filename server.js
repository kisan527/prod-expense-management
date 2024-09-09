import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
import transactionRoute from "./routes/transactionRoute.js";
import path from "path";

//config dotenv file

dotenv.config();

//connect DB __ call database
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = 8080 || process.env.PORT;

//routes
//user route
app.use("/api/v1/users", userRoute);

//transaction route
app.use("/api/v1/transactions", transactionRoute);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!!</h1>");
});

//listen
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import bodyParser from "body-parser";
import cors from "cors";

//Importing routes
import leaderboardRouter from "./routes/leaderboard.js";

const app = express();

//Middleware

app.use(bodyParser.json());
app.use(cors());

app.use("/leaderboard", leaderboardRouter);

//Routes

app.get("/", (req, res) => {
  res.send("Home page");
});

//Database connection

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(process.env.DB_CONNECTION, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

//Listening on port 4000

app.listen(4000);

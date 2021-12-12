import  express from "express";
import { router } from "./routes";
import mongoose, { Mongoose } from "mongoose";

const app = express();

app.use(express.json())
app.use(router)

export { app }
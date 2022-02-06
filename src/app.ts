import express from "express";
import { setRateLimitServer } from "./middlewares/middlewares";
import http from "http";

const app = express();

const minutesRateLimit = 2;
app.use(setRateLimitServer(minutesRateLimit));

export const server = http.createServer(app);
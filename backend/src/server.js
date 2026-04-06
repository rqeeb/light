import express from "express";
import cookieParser from "cookie-parser";
import { ENV } from "./lib/env.js";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

const PORT = ENV.PORT || 3000;


app.use(
  cors({
    origin: "https://zonnect.vercel.app",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({limit: "5mb"}));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  connectDB();
});

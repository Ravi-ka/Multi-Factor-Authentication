import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import passport from "passport";
import { databaseConnection } from "./src/config/dbConnection.js";
import { userRoutes } from "./src/routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
const corsOption = {
  origin: ["*"], // Update the origin according to the client side request url
  credentials: true,
};
app.use(cors(corsOption));
app.use(json({ limit: "100mb" })); // JSON max file size is 100mb
app.use(urlencoded({ limit: "100mb", extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 6000 * 60,
      secure: true,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Routes
app.use("/api/auth", userRoutes);

// Server Listening
app.listen(port, (err) => {
  if (err) return err;
  else console.log(`Server is listening on port ${port}`);
  databaseConnection();
});

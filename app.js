require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const passport = require("passport");
const cors = require("cors");

const session = require("express-session");

const booksRoutes = require("./routes/booksRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname + "/public")));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/books", booksRoutes);
app.use("/", authRoutes);

app.listen(PORT);
console.log(`The server is listening on port ${PORT}`);

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const articlesRoutes = require("./routes/articlesRoutes");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
};

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/article", articlesRoutes);

module.exports = app;

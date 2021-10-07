require("dotenv").config({ path: "./config.env" });

const express = require("express");
const connectDB = require("./config/db");
const postRoutes = require("./routes/postRoutes");

connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/v1/posts", postRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API RUNNING JENNAYYY");
  });
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

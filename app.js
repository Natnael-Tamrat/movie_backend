const express = require("express");
const app = express();
// const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
dotenv.config();
// app.use(cors());
const sequelize = require("./db");
const {
  addUser,
  getUserFavourites,
  addUserFavourites,
  removeUserFavourites,
  getUser,
} = require("./Controller/userController");
app.use(express.json());

sequelize
  .sync()
  .then((req) => {
    app.listen(process.env.PORT, () => console.log("listening"));
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getUser(req.body);

  if (!user) {
    res.status(401).send("Invalid username or password");
    return;
  }
  // const isValidPassword = await bcrypt.compare("12345678", user.password);
  if (password !== user.password) {
    res.status(401).send("Invalid username or password");
    return;
  }
  res.status(200).send("Authentication successful");
});
app.get("/favourites", async (req, res) => {
  const favourites = await getUserFavourites(req.body);
  res.send(favourites);
});
app.post("/addUser", async (req, res) => {
  const createdUser = await addUser(user);
  res.send(createdUser);
});
app.post("/insertMovie", async (req, res) => {
  const insertedResult = await addUserFavourites(req.body);
  res.send(insertedResult);
});

app.delete("/deleteMovie", async (req, res) => {
  const result = await removeUserFavourites(req.body);
  res.send(result);
});

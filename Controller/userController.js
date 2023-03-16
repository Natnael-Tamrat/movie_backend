const users = require("../models/User");

const addUser = async (user) => {
  try {
    const createdUser = await users.create(user);
    return createdUser;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
const getUser = async (user) => {
  try {
    const result = await users.findOne({
      where: {
        email: user.email,
      },
    });
    if (result) {
      return result;
    } else {
      throw new Error("User not found.");
    }
  } catch (error) {
    return error.message;
  }
};
const getUserFavourites = async (user) => {
  try {
    const result = await users.findOne({
      where: {
        email: user.email,
      },
    });
    if (result) {
      return result;
    } else {
      throw new Error("User not found.");
    }
  } catch (error) {
    return error.message;
  }
};

const addUserFavourites = async (data) => {
  const user = data.user;
  const movie = data.movie;
  console.log(user);
  const favs = await getUserFavourites(user);
  if (favs.favourite_movies == null) {
    try {
      const result = await users.update(
        { favourite_movies: movie },
        { where: { email: user.email } }
      );
      return result;
    } catch (error) {
      return error.message;
    }
  } else {
    try {
      const result = await users.update(
        { favourite_movies: favs.favourite_movies + "," + movie },
        { where: { email: user.email } }
      );
      return result;
    } catch (error) {
      return error.message;
    }
  }
};

const removeUserFavourites = async (data) => {
  const user = data.user;
  const movie = data.movie;
  const favs = await getUserFavourites(user);
  let favArray = favs.favourite_movies.split(",");
  let newFav = "";
  favArray.forEach((fav) => {
    if (fav != movie) {
      newFav += fav + ",";
    }
  });
  newFav = newFav.slice(0, -1);
  if (newFav == "") {
    newFav = null;
  }
  try {
    const result = await users.update(
      { favourite_movies: newFav },
      { where: { email: user.email } }
    );
    return result;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  addUser,
  getUserFavourites,
  addUserFavourites,
  removeUserFavourites,
  getUser,
};

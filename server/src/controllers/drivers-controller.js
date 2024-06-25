const axios = require("axios");
const { Driver } = require("../db");

const URL = "http://localhost:6000/drivers";

const getAllDriversController = async () => {
  try {
    const dbDriver = await Driver.findAll();
    const apiDrivers = (await axios.get(URL)).data;
    return [...dbDriver, ...apiDrivers]
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDriversController,
};

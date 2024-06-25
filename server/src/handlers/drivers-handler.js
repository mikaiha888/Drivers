const {
  getAllDriversController,
} = require("../controllers/drivers-controller");

const getAllDrivers = async (req, res) => {
  try {
    const response = await getAllDriversController();
    return res.status(200).json(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDrivers,
};

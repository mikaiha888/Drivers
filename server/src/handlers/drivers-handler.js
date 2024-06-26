const {
  getAllDriversController,
  getDriverByIdController,
} = require("../controllers/drivers-controller");

const getAllDrivers = async (req, res) => {
  try {
    const response = await getAllDriversController();
    return res.status(200).json(response);
  } catch (error) {
    throw error;
  }
};

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    const response = await getDriverByIdController(id, source);
    return res.status(200).json(response);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDrivers,
  getDriverById,
};

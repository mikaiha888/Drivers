const {
  getAllDriversController,
  getDriverByIdController,
  getDriversByNameController,
} = require("../controllers/drivers-controller");

const getAllDrivers = async (req, res) => {
  try {
    const response = await getAllDriversController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getDriverById = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "db" : "api";
    const response = await getDriverByIdController(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getDriversByName = async (req, res) => {
  try {
    const query = req.query.name.toLowerCase();
    if (!query) res.status(400).send("Faltan datos");
    const response = await getDriversByNameController(query);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllDrivers,
  getDriverById,
  getDriversByName,
};

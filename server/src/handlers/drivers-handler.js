const {
  getAllDriversController,
  getDriverByIdController,
  getDriversByNameController,
  createDriverController,
  updateDriverController,
  deleteDriverController
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

const createDriver = async (req, res) => {
  try {
    const driverData = req.body;
    for (const key in driverData) 
      if (!key) res.status(400).send("Faltan datos");
    const response = await createDriverController(driverData);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const driverData = req.body;
    for (const key in driverData) 
      if (!key) res.status(400).send("Faltan datos");
    const response = await updateDriverController(driverData, id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteDriver = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteDriverController(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllDrivers,
  getDriverById,
  getDriversByName,
  createDriver,
  updateDriver,
  deleteDriver
};

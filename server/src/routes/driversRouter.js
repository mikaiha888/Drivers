const { Router } = require("express");
const {
  getAllDrivers,
  getDriverById,
  getDriversByName,
  createDriver,
  updateDriver,
  deleteDriver
} = require("../handlers/drivers-handler");

const driversRouter = Router();
driversRouter.get("/search", getDriversByName);
driversRouter.get("/", getAllDrivers);
driversRouter.get("/:id", getDriverById);
driversRouter.post("/", createDriver);
driversRouter.put("/:id", updateDriver);
driversRouter.delete("/:id", deleteDriver);

module.exports = driversRouter;

const { Router } = require("express");
const {
  getAllDrivers,
  getDriverById,
  getDriversByName,
  createDriver,
} = require("../handlers/drivers-handler");

const driversRouter = Router();
driversRouter.get("/search", getDriversByName);
driversRouter.get("/", getAllDrivers);
driversRouter.get("/:id", getDriverById);
driversRouter.post("/", createDriver);
// driversRouter.put("/");
// driversRouter.delete("/:id");

module.exports = driversRouter;

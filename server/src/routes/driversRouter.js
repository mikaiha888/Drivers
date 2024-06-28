const { Router } = require("express");
const {
  getAllDrivers,
  getDriverById,
  getDriversByName,
} = require("../handlers/drivers-handler");

const driversRouter = Router();
driversRouter.get("/search", getDriversByName);
driversRouter.get("/", getAllDrivers);
driversRouter.get("/:id", getDriverById);
// driversRouter.post("/");
// driversRouter.put("/");
// driversRouter.delete("/:id");

module.exports = driversRouter;

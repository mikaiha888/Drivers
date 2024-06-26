const { Router } = require("express");
const { getAllDrivers, getDriverById } = require("../handlers/drivers-handler");

const driversRouter = Router();
// driversRouter.get("/search");
driversRouter.get("/", getAllDrivers);
driversRouter.get("/:id", getDriverById);
// driversRouter.post("/");
// driversRouter.put("/");
// driversRouter.delete("/:id");

module.exports = driversRouter;

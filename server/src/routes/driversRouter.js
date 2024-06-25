const { Router } = require("express");
const { getAllDrivers } = require("../handlers/drivers-handler");

const driversRouter = Router();
// driversRouter.get("/search");
driversRouter.get("/", getAllDrivers);
// driversRouter.get("/:id");
// driversRouter.post("/");
// driversRouter.put("/");
// driversRouter.delete("/:id");

module.exports = driversRouter;

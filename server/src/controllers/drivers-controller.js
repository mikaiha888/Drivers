const axios = require("axios");
const { Driver, Team } = require("../db");
const { modifyDbDrivers, modifyApiDrivers } = require("./utils");

const URL = "http://localhost:6000/drivers";

const getAllDriversController = async () => {
  try {
    const apiDrivers = (await axios.get(URL)).data;
    const dbDrivers = await Driver.findAll({
      include: [{ model: Team, as: "teams" }],
    });
    return [...modifyApiDrivers(apiDrivers), ...modifyDbDrivers(dbDrivers)];
  } catch (error) {
    throw error;
  }
};

const getDriverByIdController = async (id, source) => {
  try {
    let driver;
    if (source === "db")
      driver = await Driver.findByPk(id, {
        include: [{ model: Team, as: "teams" }],
      });
    if (source === "api") driver = (await axios.get(`${URL}/${id}`)).data;
    return driver;
  } catch (error) {
    throw error;
  }
};

const getDriversByNameController = async (name) => {
  try {
    const drivers = await Promise.all(
      (
        await getAllDriversController()
      ).filter(
        (d) =>
          d.firstName.toLowerCase().includes(name) ||
          d.lastName.toLowerCase().includes(name)
      )
    );
    return drivers;
  } catch (error) {
    throw error;
  }
};

const createDriverController = async (newDriverData) => {
  try {
    const { teams, ...driverData } = newDriverData;
    const [newDriver] = await Driver.findOrCreate({
      where: { ...driverData },
    });
    const newTeams = await Promise.all(
      teams.map(
        async (team) => (await Team.findOrCreate({ where: { name: team } }))[0]
      )
    );
    await newDriver.addTeams(newTeams);
    return { ...newDriver.dataValues, teams: newTeams };
  } catch (error) {
    throw error;
  }
};

const updateDriverController = async (newDriverData, id) => {
  try {
    const { teams, ...driverData } = newDriverData;
    await Driver.update(driverData, { where: { id: id } });
    const updatedDriver = await Driver.findByPk(id);
    const updatedTeams = await Promise.all(
      teams.map(
        async (team) => (await Team.findOrCreate({ where: { name: team } }))[0]
      )
    );
    await updatedDriver.setTeams(updatedTeams);
    return { ...updatedDriver.dataValues, teams: updatedTeams };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllDriversController,
  getDriverByIdController,
  getDriversByNameController,
  createDriverController,
  updateDriverController,
};

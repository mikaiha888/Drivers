const DEFAULT_IMAGE_PATH =
  "https://www.palomacornejo.com/wp-content/uploads/2021/08/no-image.jpg";

  const modifyDbDrivers = (drivers) =>
    drivers.map((d) => {
      return {
        id: d.id,
        firstName: d.firstName,
        lastName: d.lastName,
        dob: d.dob,
        nationality: d.nationality,
        description: d.description,
        image: d.image,
        teams: d.teams.map((team) => {
          return { id: team.id, name: team.name };
        }),
      };
    });

const modifyApiDrivers = (drivers) =>
  drivers.map((d) => {
    return {
      id: d.id,
      firstName: d.name.forename,
      lastName: d.name.surname,
      dob: d.dob,
      nationality: d.nationality,
      description: d.description,
      image: d.image.url ? d.image.url : DEFAULT_IMAGE_PATH,
      team: d.teams?.split(/,\s*/),
    };
  });

module.exports = {
  modifyDbDrivers,
  modifyApiDrivers,
};

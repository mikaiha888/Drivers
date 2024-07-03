import { Driver } from "../../types/global";

const Drivers: React.FC = () => {
  const drivers: Driver[] = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      dob: new Date("1981-01-11"),
      nationality: "American",
      description:
        "A skilled and strategic driver with numerous podium finishes.",
      image: "https://example.com/john-doe.jpg",
      teams: ['teamOne', 'teamTwo']
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      dob: new Date("1982-02-12"),
      nationality: "British",
      description: "A talented and upcoming driver with a lot of potential.",
      image: "https://example.com/jane-smith.jpg",
      teams: ['teamThree', 'teamFour']
    },
  ];

  return (
    <div>
      <div>
        <h2>Drivers</h2>
        <p>Comparte Tus Momentos de F1 con Nosotros</p>
      </div>

      <div>
        <div>
          {drivers.map((driver) => {
            const fullname = `${driver.firstName} ${driver.lastName}`
            return <div key={driver.id}>
              <div>
                <img src={driver.image} alt={fullname} />
              </div>
              <div>
                <h3>{fullname}</h3>
                <p>{driver.teams.join(' ')}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Drivers;

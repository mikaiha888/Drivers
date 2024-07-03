import { Team } from "../../types/global";

const Teams: React.FC = () => {
  const teams: Team[] = [
    {
      id: 1,
      name: "teamOne",
    },
    {
      id: 2,
      name: "teamTwo",
    },
  ];

  return (
    <div>
      <div>
        <h2>Teams</h2>
        <p>Los mejores equipos que podes encontrar</p>
      </div>

      <div>
        <div>
          {teams.map((team) => (
            <div key={team.id}>
              <h4>{team.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

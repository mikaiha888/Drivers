import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <h1>Drivers <span>F1</span></h1>
        <span>Los Reyes de la Pista</span>
      </div>

      <div>
        <Link to="/drivers">
          <button>Ver drivers</button>
        </Link>
        <Link to="/teams">
          <button>Ver teams</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

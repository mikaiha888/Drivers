import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const navItems = [
    { link: "/home", buttonName: "Home" },
    { link: "/drivers", buttonName: "Drivers" },
    { link: "/teams", buttonName: "Teams" },
  ];

  return (
    <nav>
      <div>
        {navItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <button>{item.buttonName}</button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

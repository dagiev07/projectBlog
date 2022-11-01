import { Link } from "react-router-dom";

const NavMenu = () => {
  const links = [
    { name: "Tourism" },
    { name: "Technology" },
    { name: "fitness" },
    { name: "food" },
  ];
  return (
    <div className="navMenu">
      <li>
        <Link  className="link" to="/">
          Home
        </Link>
      </li>
      {links.map((item) => (
        <li>
          <Link key={item.id} className="link" to={`/${item.name}`}>
            {item.name}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default NavMenu;
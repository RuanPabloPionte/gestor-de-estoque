import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const NavLink = ({ text, to, className }) => {
  return (
    <Link className={`mx-2 link ${className || " "}`} to={to}>
      {text}
    </Link>
  );
};

export default NavLink;

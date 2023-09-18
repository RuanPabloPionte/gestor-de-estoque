import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

// eslint-disable-next-line react/prop-types
export default function LinkBtn({ to, text, className, onClick }) {
  return (
    <Link to={to}>
      <Button className={className} onClick={onClick}>
        {text}
      </Button>
    </Link>
  );
}

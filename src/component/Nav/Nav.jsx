import "./Nav.css";
import { Link } from "react-router-dom";
import Icon from "../../images/icon.png";

export function Nav() {
  return (
    <nav>
      <ul>
        <div className="nav-title">
          <li>
            <img src={Icon} alt="Icon HP" />
          </li>
          <li>
            <h1>Personagens do Harry Potter</h1>
          </li>
        </div>
        <div className="nav-Links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

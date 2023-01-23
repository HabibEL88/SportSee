import meditation from "../assets/meditation.webp";
import swimming from "../assets/swimming.webp";
import bike from "../assets/bike.webp";
import fitness from "../assets/fitness.webp";

import MaterialIcons from "./MaterialIcons";

import "../styles/leftbar.css";

const Leftbar = () => {
  return (
    <nav className="leftbar">
      <ul className="icons">
        <li>
          <MaterialIcons bgcolor="white" icon={meditation} />
        </li>
        <li>
          <MaterialIcons bgcolor="white" icon={swimming} />
        </li>
        <li>
          <MaterialIcons bgcolor="white" icon={bike} />
        </li>
        <li>
          <MaterialIcons bgcolor="white" icon={fitness} />
        </li>
      </ul>
      <div className="copyright">
        <small>Copyright, SPortSee 2020</small>
      </div>
    </nav>
  );
};

export default Leftbar;

import {
  FiLayout,
  FiFolder,
  FiGrid,
  FiUser,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import logo from "../assets/images/logo.svg";
import Frame from "../assets/images/Frame.png";
import "../style/components/lateralOne.css";
function LateralOne() {
  return (
    <section className="lateral-1">
      <div>
        <img src={logo} id="logo" alt="Logo" />
        <button className="button button_primary "> Join a course </button>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">
              <FiLayout />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="active">
            <a href="#">
              <FiGrid />
              <span>All Courses</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FiFolder />
              <span>Resources</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FiUser />
              <span>Friends</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FiMessageSquare />
              <span>Chats</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FiSettings />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      <footer>
        <img src={Frame} alt="file" />
        <strong>Upgrade to for more resources</strong>
        <button className="button button_primary">Upgrade</button>
      </footer>
    </section>
  );
}

export default LateralOne;

import { FiSettings } from "react-icons/fi";
import { BiPencil, BiWebcam,BiChat, BiBox, BiBraille} from "react-icons/bi";
// Components
import Central from "./components/Central";
import LateralOne from "./components/LateralOne";

// Img Files
import profile from "./assets/images/profile.png";
function App() {
  return (
    <div className="container">
      <LateralOne />
      <Central />

      <section id="lateral-2">
        <div className="profile">
          <div className="profile_square">
            <img src={profile} alt="Profile" />
          </div>
          <strong>André Souza</strong>
        </div>

        <div className="progress">
          <h3>Progress</h3>

          <div className="itemtask">
            <div className="icon" style={{ backgroundColor: "#EEF2FD" }}>
              <BiPencil size={20} color="#5E81F4" />
            </div>
            <div className="data">
              <h4>UI/UX Design</h4>
              <span>Advanced</span>
            </div>
          </div>

          <div className="itemtask">
            <div className="icon" style={{ backgroundColor: "#D5F5FB" }}>
              <BiWebcam size={20} color="#0CC3E7" />
            </div>
            <div className="data">
              <h4>Photography</h4>
              <span>Intermediate</span>
            </div>
          </div>

          <div className="itemtask">
            <div className="icon" style={{ backgroundColor: "#FFEFD6" }}>
              <BiBraille size={20} color="#FFAE33" />
            </div>
            <div className="data">
              <h4>Animation</h4>
              <span>Advanced</span>
            </div>
          </div>


          <h3>Upcoming Task</h3>

          <div className="itemtask">
            <div className="icon" style={{ backgroundColor: "#EEF2FD" }}>
              <BiChat size={20} color="#5E81F4" />
            </div>
            <div className="data">
              <h4>UI/UX - Discussion</h4>
              <span>27 Oct 2020, Tuesday</span>
            </div>
          </div>
          <div className="itemtask">
            <div className="icon" style={{ backgroundColor: "#FFEFD6" }}>
              <BiBox size={20} color="#FFAE33" />
            </div>
            <div className="data">
              <h4>Animation - 3D Animation</h4>
              <span>27 Oct 2020, Tuesday</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

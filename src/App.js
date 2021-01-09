import { FiSettings } from "react-icons/fi";
// Components
import Central from './components/Central';
import LateralOne from "./components/LateralOne";

// Img Files
import profile from './assets/images/profile.png';
function App() {
  return (
    <div className="container">
      <LateralOne />
      <Central/>

      <section id="lateral-2">
        <div className="profile">
          <div className="profile_square">
            <img src={profile} alt="Profile" />
          </div>
          <strong>André Souza</strong>
        </div>

        <div className="progress">
          <h3>Progress</h3>

          <div className="item-progress">
            <div>
              <FiSettings />
              <div>
                <h3>UI/UX Design</h3>
                <small>Advanced</small>
              </div>
            </div>
            <div>
              <FiSettings />
              <div>
                <h3>UI/UX Design</h3>
                <small>Advanced</small>
              </div>
            </div>
            <div>
              <FiSettings />
              <div>
                <h3>UI/UX Design</h3>
                <small>Advanced</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

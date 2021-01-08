import {FiLayout, FiFolder,FiGrid,FiUser,FiMessageSquare,FiSettings } from 'react-icons/fi';
import logo from '../assets/images/logo.svg';
import Frame from '../assets/images/Frame.png';
import '../style/components/lateralOne.css';
function LateralOne()
{return (
    <section className="lateral-1">
    <div>
      <img src={logo} id="logo" alt="Logo" />
      <button className="button button_primary "> Join a course </button>
    </div>
    <nav>
      
      <ul>
        <li>
          <FiLayout/>
          <span>Dashboard</span>
        </li>
        <li className="active">
          <FiGrid/>
          <span>
          All Courses</span>
        </li>
        <li>
          <FiFolder/>
          <span>Resources</span>
        </li>
        <li>
          <FiUser/>
          <span>Friends</span>
        </li>
        <li>
          <FiMessageSquare/>
          <span>Chats</span>
        </li>
        <li>
          <FiSettings/>
          <span>Settings</span>
        </li>
      </ul>

    </nav>

    <footer>
      <img src={Frame} alt="file" />
      <strong>
        Upgrade to for more resources
      </strong>
      <button className="button button_primary">Upgrade</button>
    </footer>

  </section>
)}

export default LateralOne 
import { FiBell, FiPlay } from "react-icons/fi";
import { IoCaretForwardSharp } from "react-icons/io5";

import profile01 from '../assets/images/profile-02.png';
import '../style/components/central.css';

function Central() {
  return (
    <main id="central">
      <header>
        <form method="post">
          <div className="formGroup ">
            <input className="formControl" placeholder="Search" />
          </div>
        </form>

        <div className="aler">
          <FiBell color="#768492" size={25} />
        </div>
      </header>
      <section>
        <header>
          <h1>All Courses</h1>
          <div>
            <ul>
              <li className="active">Ongoing</li>
              <li>Favorite</li>
              <li>Complete</li>
            </ul>
          </div>
        </header>
        <article className="last_course">
          <header>
            <div>
              <strong>UI/UX Design</strong>
              <span>20 leasons</span>
            </div>
            <div>
              <span>2h 20min</span>
            </div>
          </header>
          <footer>
            <button className="button_small button_play">
              <IoCaretForwardSharp />
            </button>
            <div className="profile_circle">
              <img src={profile01} alt="profile-01" />
            </div>
          </footer>
        </article>
        <div className="container_course">
          <article
            className="course"
            style={{
              backgroundImage: `url("https://i.ibb.co/MGB19dH/frame02.png")`,
            }}
          >
            <header>
              <div>
                <strong>UI/UX Design</strong>
                <span>20 leasons</span>
              </div>
              <div>
                <span>2h 20min</span>
              </div>
            </header>
            <footer>
              <button className="button_small button_play">
                <IoCaretForwardSharp />
              </button>
              <div className="profile_circle">
                <img src={profile01} alt="profile-01" />
              </div>
            </footer>
          </article>
          <article
            className="course"
            style={{
              backgroundImage: `url("https://i.ibb.co/mSSvgS3/frame03.png")`,
            }}
          >
            <header>
              <div>
                <strong>UI/UX Design</strong>
                <span>20 leasons</span>
              </div>
              <div>
                <span>2h 20min</span>
              </div>
            </header>
            <footer>
              <button className="button_small button_play">
                <IoCaretForwardSharp />
              </button>
              <div className="profile_circle">
                <img src={profile01} alt="profile-01" />
              </div>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Central;

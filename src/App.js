import {FiBell,FiSettings,FiPlay } from 'react-icons/fi';
import { IoCaretForwardSharp } from 'react-icons/io5'
import LateralOne from './components/LateralOne';
function App() {
  return (
    <div className="container">
      <LateralOne/>
    <main id="central">
      <header>

        <form method="post">
          <div className="formGroup ">
            <input className="formControl" placeholder="Search" />
          </div>

        </form>

        <div className="aler">
          <FiBell color="#768492" size={25}/>
        </div>


      </header>
      <section>
        <header>
          <h1>
            All Courses
          </h1>
          <div>
            <ul>
              <li>Ongoing</li>
              <li>Favorite</li>
              <li>Complete</li>
            </ul>
          </div>
        </header>
        <article id="last_course">
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
              <IoCaretForwardSharp/>
            </button>
            <div className="profile_circle">

            </div>
          </footer>
        </article>
        <div className="container_course">
         <article id="course">
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
              <IoCaretForwardSharp/>
            </button>
            <div className="profile_circle">

            </div>
          </footer>
        </article>
         <article id="course">
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
              <IoCaretForwardSharp/>
            </button>
            <div className="profile_circle">

            </div>
          </footer>
        </article>
        </div>

      </section>
    </main>
    <section id="lateral-2">
      <div className="profile">
        <div className="profile_square"></div>
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

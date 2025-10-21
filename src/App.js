// src/App.js
import "./App.css";

function App() {
  return (
    <main>
      <h1>Hi, I'm Farah Firdavsi!</h1>
      <ul>
        <li>
          I'm an Information Analysis student at the University of Michigan.
        </li>
        <li>
          Interested in exploring how data reveals patterns, supports decision-making, and tells the story behind systems.
        </li>
        <li>
          Worked with{" "}
          <a href="https://www.kpl.gov/">Kalamazoo Public Library</a> on{" "}
          <strong>Project 10Million</strong>, improving the design and outreach of hotspot lending programs for equitable information access.
        </li>
        <li>
          Currently collaborating in a team of 5 for the{" "}
          <a href="https://michiganross.umich.edu/">Ross Tech Innovation Jam</a>.
        </li>
        <li>Email: farahfirdavsi@gmail.com</li>
      </ul>

      <nav>
        <a href="https://linkedin.com">LinkedIn</a> |{" "}
        <a href="https://github.com">GitHub</a>
      </nav>

      <img
        src="/umich-logo.png"
        alt="University Logo"
        className="footer-logo"
      />
    </main>
  );
}

export default App;

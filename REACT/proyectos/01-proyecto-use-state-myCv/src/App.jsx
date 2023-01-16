import { useState } from "react";
import "./App.css";
import  { Cv }  from "./CV/Cv";
import  Hero  from "./components/Hero";
import  About  from "./components/About";
import  Education  from "./components/Education";
import  Experience  from "./components/Experience";
import  More  from "./components/More";

const { hero, education, experience, languages, abilities, volunteer } = Cv;

function App() {
  const [education, setEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <More
        languages={languages}
        abilities={abilities}
        volunteer={volunteer}
      />
      <button
        className="custom-btn btn-4"
        onClick={() => setEducation(true)}
      >
        Education
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setEducation(true)}
      >
        Experience
      </button>
      <button
        className="custom-btn btn-4"
        onClick={() => setEducation(false)}
      ></button>

      <div>
        {education ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
    </div>
  );
}

export default App;

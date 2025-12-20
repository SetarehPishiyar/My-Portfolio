import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const ProjectsSection = () => {
  return (
    <section className="container projects" id="projects">
      <div className="section__header">
        <p className="section__text1">Browse My Recent</p>
        <p className="section__text2">Projects</p>
      </div>
      <div className="project_cards">
        <div className="project__card">
          <img className="project__image" src={project1} alt="project1" />
          <p className="project__title">Cafe Website Landing Page</p>
          <p className="project__subtitle">HTML-CSS-JavaScript</p>
          <div className="project__buttons">
            <a href="https://celeste-coffee-website.netlify.app/">
              <button>Live Demo</button>
            </a>
            <a href="https://github.com/SetarehPishiyar/Cafe-Landing-HTML-Javascript">
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="project__card">
          <img className="project__image" src={project2} alt="project2" />
          <p className="project__title">Modern Animated Landing Page</p>
          <p className="project__subtitle">React Js-TailwindCSS-GSAP</p>
          <div className="project__buttons">
            <a href="https://modern-landingpage-gsap.netlify.app/">
              <button>Live Demo</button>
            </a>
            <a href="https://github.com/SetarehPishiyar/Modern-React-Gsap-tailwind-Landing">
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="project__card">
          <img className="project__image" src={project3} alt="project3" />
          <p className="project__title">ّFood Ordering Website (Farsi)</p>
          <p className="project__subtitle">React Js-JavaScript-CSS </p>
          <div className="project__buttons">
            <a href="https://github.com/SetarehPishiyar/AI-Software-frontend">
              <button>Live Demo</button>
            </a>
            <a href="https://github.com/SetarehPishiyar/AI-Software-frontend">
              <button>GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

import CheckmarkIcon from "../assets/checkmark.png";
const ExperienceSection = () => {
  return (
    <section className="container experience" id="experience">
      <div className="section__header">
        <p className="section__text1">Explore My</p>
        <p className="section__text2">Experience</p>
      </div>

      <div className="exp__cards">
        <article className="exp__card">
          <p className="exp__card__title">Frontend Development</p>
          <ul className="exp__skills">
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>HTML5</p>
                <small>Experienced</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>CSS3</p>
                <small>Experienced</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>TailwindCSS</p>
                <small>Experienced</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>JavaScript</p>
                <small>Experienced</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>React Js</p>
                <small>Intermediate</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>TypeScript</p>
                <small>Familiar</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Responsive Design</p>
                <small>Experienced</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Vite</p>
                <small>Familiar</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>GSAP</p>
                <small>Familiar</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Figma</p>
                <small>Intermediate</small>
              </div>
            </li>
          </ul>
        </article>

        <article className="exp__card">
          <p className="exp__card__title">Backend, Tools & Practices</p>
          <ul className="exp__skills">
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>RESTful API</p>
                <small>Experienced</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Postman</p>
                <small>Intermediate</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>PostgreSQL</p>
                <small>Familiar</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>GitHub & Git</p>
                <small>Experienced</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Docker</p>
                <small>Familiar</small>
              </div>
            </li>

            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Netlify</p>
                <small>Familiar</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Agile / Scrum</p>
                <small>Experienced</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Jira / Trello</p>
                <small>Experienced</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Design Patterns</p>
                <small>Experienced</small>
              </div>
            </li>
            <li className="exp__skill">
              <img className="exp__icon" src={CheckmarkIcon} alt="icon" />
              <div>
                <p>Clean Code</p>
                <small>Experienced</small>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ExperienceSection;

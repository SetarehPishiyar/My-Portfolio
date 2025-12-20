import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import logo from "../assets/logo.png";

const ExperienceSection = () => {
  return (
    <section className="container about" id="about">
      <div className="section__header">
        <p className="section__text1">Get To Know More</p>
        <p className="section__text2">About Me</p>
      </div>
      <div className="about__info__container">
        <img className="about__photo" src={logo} alt="logo" />
        <div className="about__info">
          <div className="about__cards">
            <div className="about__card">
              <img className="card__icon" src={experienceIcon} alt="" />
              <p className="card__title">Experience</p>
              <p className="card__subtitle">No Job Experience</p>
              <p className="card__subtitle">Frontend Development intern</p>
            </div>
            <div className="about__card">
              <img className="card__icon" src={educationIcon} alt="" />
              <p className="card__title">Education</p>
              <p className="card__subtitle">SBU Bachelors Student</p>
              <p className="card__subtitle">Since 1400</p>
            </div>
          </div>
          <div className="about__text">
            <p>
              I am a Front-End Developer Intern with strong skills in HTML, CSS,
              JavaScript, and hands-on experience in React.js. I have built
              practical React projects and am familiar with modern development
              tools such as Git and Jira, as well as collaborative team
              workflows. I am a motivated, responsible, and punctual team player
              with a strong interest in front-end development and continuous
              learning. I am eager to contribute to a development team and
              further grow my skills in building modern, user-friendly web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

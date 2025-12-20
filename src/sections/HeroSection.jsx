import myPhoto from "../assets/me.jpg";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

const HeroSection = () => {
  return (
    <section className="container hero">
      <img className="hero__img" src={myPhoto} alt="My Photo" />

      <div className="hero__info">
        <div className="hero__text">
          <p className="hero__text1">Hello, I'm</p>
          <p className="hero__text2">Setareh Pishiyar</p>
          <p className="hero__text3">Frontend Developer Intern</p>
        </div>
        <div className="hero__buttons">
          <a href="">
            <button>Download CV</button>
          </a>
          <a href="#contact">
            <button className="bg-[#4b4b4b] text-[#FCF8F8] border-none hover:bg-neutral-800">
              Contact Info
            </button>
          </a>
        </div>
        <div className="hero__icons">
          <img
            className="icon"
            src={githubIcon}
            alt="icon"
            onClick={() => {
              window.location.href = "https://github.com/SetarehPishiyar";
            }}
          />
          <img
            className="icon"
            src={linkedinIcon}
            alt="icon"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/setareh-pishiyar-5a4a2825a/ ";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

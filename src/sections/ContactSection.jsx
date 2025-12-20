import emailIcon from "../assets/email.png"
const ContactSection = () => {
  return (
    <section className="container contact" id="contact">
      <div className="section__header">
        <p className="section__text1">Get In Touch</p>
        <p className="section__text2">Contact Me</p>
      </div>
      <div className="email__card">
        <a href="">
          <img className="icon w-15 h15" src={emailIcon} alt="" />
        </a>
        <a className="text-xl" href="mailto:PishiyarSetareh@gmail.com">
          PishiyarSetareh@gmail.com
        </a>
      </div>
      <div className="mt-30 text-sm text-[#5e5e5e]">
        Copyright © 2025 Setareh Pishiyar. All Rights Reserved.
      </div>
    </section>
  );
};

export default ContactSection;

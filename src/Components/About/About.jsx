import style from "./../About/About.module.css";
import aboutImg from "./../../assets/about-bg.png";

function About() {
  return (
    <div className={`${style.about_wrapper} section `}>
      <div className={style.about_Image}>
        <img src={aboutImg} alt="about-img" />
      </div>
      <div className={style.aboutContent}>
        <h2>
          Discover Organized, <br /> Adventures and, <br />
          Ultimate Travel Hack
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          libero veniam delectus cumque. Distinctio deleniti odit non impedit
          doloribus consectetur.
        </p>

        <div className={style.about}>
          <p>
            <i className="ri-building-4-line"></i>Accommodation
          </p>
          <p>
            <i className="ri-car-line"></i>Transposition allowance
          </p>
          <p>
            <i className="ri-magic-line"></i>Exclusive Experience
          </p>
          <p>
            <i className="ri-instance-line"></i>Local Recommendatios
          </p>
          <p>
            <i className="ri-pin-distance-line"></i>personalized trip crafting
          </p>
          <p>
            <i className="ri-phone-line"></i>27/7 Support
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

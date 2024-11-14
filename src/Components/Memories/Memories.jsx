import Style from "./../Memories/Memories.module.css";

import MemoriesImg1 from "./../../assets/travelport1.jpg";
import MemoriesImg2 from "./../../assets/travelport2.jpg";
import MemoriesImg3 from "./../../assets/travelport3.jpg";
import MemoriesImg4 from "./../../assets/travelport4.jpg";
import MemoriesImg5 from "./../../assets/travelport5.jpg";
import MemoriesImg6 from "./../../assets/travelport6.jpg";
const Memories = () => {
  return (
    <div className={`${Style.memories_wrapper} section`}>
      <div className={Style.memoriesCard}>
        <img src={MemoriesImg1} alt="" />
        <div className={Style.content}>
          <h3>Small Group Departure</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg2} alt="" />
        <div className={Style.content}>
          <h3>Affordable Dreams</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg3} alt="" />

        <div className={Style.content}>
          <h3>undiscovered Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg4} alt="" />
        <div className={Style.content}>
          <h3>
            Let our Expert Pan <br />
          </h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg5} alt="" />
        <div className={Style.content}>
          <h3>Affordable Dreams</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg6} alt="" />
        <div className={Style.content}>
          <h3>Affordable Dreams</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
    </div>
  );
};

export default Memories;

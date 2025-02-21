import Style from "./../Memories/Memories.module.css";

import MemoriesImg1 from "./../../assets/travelport1.jpg";
import MemoriesImg2 from "./../../assets/travelport2.jpg";
import MemoriesImg3 from "./../../assets/travelport4.jpg";
import MemoriesImg4 from "./../../assets/travelport3.jpg";
import MemoriesImg5 from "./../../assets/travelport5.jpg";
import MemoriesImg6 from "./../../assets/travelport6.jpg";
import MemoriesImg7 from "./../../assets/travelport7.jpg";
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
          <h3>Undiscovered Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg4} alt="" />
        <div className={Style.content}>
          <h3>
            Let our Expert Pan <br /> Your 2024 Journey
          </h3>
          <button>View Tours</button>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg5} alt="" />
        <div className={Style.content}>
          <h3>Religious Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg6} alt="" />
        <div className={Style.content}>
          <h3>Solo Travel</h3>
          <a href="#">View Tours</a>
        </div>
      </div>

      <div className={Style.memoriesCard}>
        <img src={MemoriesImg7} alt="" />
        <div className={Style.content}>
          <h3>Private Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
    </div>
  );
};

export default Memories;

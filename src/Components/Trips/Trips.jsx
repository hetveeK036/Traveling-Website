import style from "./../Trips/Trips.module.css";
import trip1 from "./../../assets/Trips01.jpg";
import trip2 from "./../../assets/Trips02.jpg";
import trip3 from "./../../assets/Trips03.jpg";
import trip4 from "./../../assets/Trips04.jpg";
import trip5 from "./../../assets/Trips05.jpg";
import trip6 from "./../../assets/Trips06.jpg";
import trip7 from "./../../assets/Trips07.jpg";
import trip8 from "./../../assets/Trips08.jpg";

const Trips = () => {
  return (
    <div className={`${style.trip_wrapper} section`}>
      <h2>Popular Trips</h2>

      <div className={style.tripCards}>
        <div className={style.card}>
          <img src={trip1} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Australia Panorma</h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 7 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 7 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> Australia
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $1,200</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={trip2} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
              <i className="ri-star-line"></i>
            </div>
            <h3>Best of Spain</h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 5 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 15 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> Spain
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $1,850</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={trip3} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Italy </h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 15 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 8 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> Italy
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $1,110</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={trip4} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>CanyonLands</h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 5 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 8 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> CanyonLands
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $2,100</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={trip5} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>India</h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 10 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 25 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> India
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $3,200</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={trip6} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>France Discovery</h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 7 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 7 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> France
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $900</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <img src={trip7} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Japan in Work</h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 7 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 4 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> Japan
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $2,000</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>

        <div className={style.card}>
          <img src={trip8} alt="" />
          <div className={style.tripContent}>
            <div className={style.rating}>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3>Explore Bali 10-Day Tour</h3>
            <div className={style.TripDetails}>
              <span>
                <i className="ri-calender-line"></i> 10 Days
              </span>
              <span>
                <i className="ri-map-pin-line"></i> 25 Places
              </span>
              <span>
                <i className="ri-flag-line"></i> Bali
              </span>
            </div>
            <div className={style.pricing}>
              <span className={style.price}> $2,800</span>
              <button className={style.book}> Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;

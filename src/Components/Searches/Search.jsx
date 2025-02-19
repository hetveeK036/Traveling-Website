import style from "./../Searches/Search.module.css";

function Search() {
  return (
    <div className={`${style.search_wrapper} section`}>
      <h2> Popular Searches</h2>
      <div className={style.cards}>
        <div className={style.card}>
          <i className="ri-search-line"></i>
          <h3>
            Domestic Trip <span>See America In New Light</span>
          </h3>
        </div>
        <div className={style.card}>
          <i className="ri-search-line"></i>
          <h3>
            Vacation in 14 Days <span>Limited Avaliablity and Seling Fast</span>
          </h3>
        </div>
        <div className={style.card}>
          <i className="ri-search-line"></i>
          <h3>
            Offer for Traveling Group <span>Save When you 9+ Guests</span>
          </h3>
        </div>
        <div className={style.card}>
          <i className="ri-search-line"></i>
          <h3>
            Past Guests Benefits<span>Saving with Global Tour Rewards</span>
          </h3>
        </div>
        <div className={style.card}>
          <i className="ri-search-line"></i>
          <h3>
            Tour Under $2000<span>Browse our value Vacations</span>
          </h3>
        </div>
        <div className={style.card}>
          <i className="ri-search-line"></i>
          <h3>
            Tour Under $2000<span>Browse our value Vacations</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Search;

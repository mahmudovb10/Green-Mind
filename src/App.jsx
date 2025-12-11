import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div>
          <img className="site__logo" src="/images/logo.svg" alt="Site Logo" />
        </div>
        <div className="links">
          <p className="home__link">Home</p>
          <p className="products__link">Products</p>
          <p className="contacts__link">Contacts</p>
        </div>
        <div className="icons">
          <img
            className="basket__icon"
            src="/images/basket.svg"
            alt="Basket Icon"
          />
          <img
            className="person__icon"
            src="/images/person.svg"
            alt="Person Icon"
          />
          <img className="line__icon" src="/images/line.svg" alt="Line icon" />
          <img
            className="vector__icon"
            src="/images/vector.svg"
            alt="Vector icon"
          />
        </div>
      </header>

      <main className="main">
        <div className="main__content">
          <h2 className="main__title">Buy your dream plants</h2>

          <div className="site__statistic">
            <h4 className="statistic__numb">
              50+
              <br />
              <span className="statistic__numb__desc"> Plant Species</span>
            </h4>
            <img className="line__two" src="/images/linetwo.svg" alt="Line" />

            <h4 className="statistic__numb__two">
              100+
              <br />
              <span className="statistic__desc__two">Customers</span>
            </h4>

            <div className="inp">
              <input
                type="text"
                className="main__input"
                placeholder="What are you looking for?"
              />
              <div className="rec__ico">
                <img
                  className="rectangle__inp"
                  src="/images/rectangleinp.svg"
                  alt=""
                />
                <img className="search__icon" src="/images/search.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="site__main__img">
            <img
              className="vector__down"
              src="/images/vectordown.svg"
              alt="vector"
            />
            <img
              className="main__rectangle"
              src="/images/rectangle.svg"
              alt=""
            />
            <img src="/images/mainFlower.svg" alt="" className="main__flower" />
            <img src="/images/vectorup.svg" alt="" className="vector__up" />
          </div>
        </div>
      </main>

      <section className="section">
        <div className="section__content">
          <h2 className="section__title">Best Selling Plants</h2>
          <p className="section__desc">
            Easiest way to healthy life by buying your favorite plants
          </p>

          <div className="card card1">
            <img src="/images/natural.svg" alt="" className="card_img" />
            <p className="card_title">Natural Plants</p>
            <span className="card_price">₱ 1,400.00</span>
          </div>

          <div className="card card2">
            <img src="/images/artificial.svg" alt="" className="card_img" />
            <p className="card_title">Artificial Plants</p>
            <span className="card_price">₱ 900.00</span>
          </div>

          <div className="card card3">
            <img
              src="/images/artificialPlants.svg"
              alt=""
              className="card_img"
            />
            <p className="card_title">Artificial Plants</p>
            <span className="card_price">₱ 3,500.00</span>
          </div>
        </div>

        <div className="section__about">
          <div className="about__info">
            <h2 className="about__title">About us</h2>
            <p className="about__desc">
              Order now and appreciate the beauty of nature
            </p>
          </div>

          <div className="about__funcs">
            <div className="large__comp">
              <img src="/images/large.svg" alt="" className="img large__img" />
              <p className="title large__title">Large Assortment</p>
              <p className="desc large__desc">
                we offer many different types of products with fewer variations
                in each category.
              </p>
            </div>

            <div className="shipping__comp">
              <img
                className="img shipping__img"
                src="/images/shipping.svg"
                alt=""
              />
              <p className="title shipping__title">Fast & Free Shipping</p>
              <p className="desc shipping__desc">
                4-day or less delivery time, free shipping and an expedited
                delivery option.
              </p>
            </div>

            <div className="support__comp">
              <img
                className="img support__img"
                src="/images/support.svg"
                alt=""
              />
              <p className="title support__title">24/7 Support</p>
              <p className="desc support__desc">
                answers to any business related inquiry 24/7 and in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <article className="article">
        <div className="article__info">
          <h2 className="article__title">Categories</h2>
          <p className="article__desc">Find what you are looking for</p>
        </div>
        <div className="article__img">
          <img
            className="natural__prev"
            src="/images/naturalPrewiev.svg"
            alt=""
          />
          <p className="flow__title natural__prev__title">Natural Plants</p>
          <img
            className="accesoris__prev"
            src="/images/accesoriesPrewiev.svg"
            alt=""
          />
          <p className="flow__title accesories__title">Plant Accessories</p>
          <p className="accesories__desc">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <img
            className="art__pl__img"
            src="/images/artificialPlantsPrewiev.svg"
            alt=""
          />
          <p className="flow__title artf__prev__title">Artificial Plants</p>
          <button className="article__btn">
            <span className="article__btn__text">Explore</span>{" "}
            <img className="btn__arrow" src="/images/btnArrow.svg" alt="" />{" "}
          </button>
        </div>
      </article>
      <footer className="footer">
        <div className="footer__comments">
          <h2 className="footer__title">What customers say about GREEMIND?</h2>
          <div className="two__comment">
            <div className="comment john__male">
              <p className="john__male__comm">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <img
                className="people__vector"
                src="/images/peopleVector.svg"
                alt=""
              />
              <img className="john__img" src="/images/johnMale.svg" alt="" />
              <p className="name john__male__name">John Doe</p>
              <p className="work john__male__worker">Youtuber</p>
              <div className="comment__rate">
                <img className="star__img" src="/images/star.svg" alt="" />
                <span className="rate star__rate">4.5</span>
              </div>
            </div>
            <div className="comment john__famele">
              <p className="john__male__comm">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <img
                className="people__vector"
                src="/images/peopleVector.svg"
                alt=""
              />
              <img
                className="john__img john__famele__img"
                src="/images/johnFamele.svg"
                alt=""
              />
              <p className="name john__male__name">John Doe</p>
              <p className="work john__male__worker">Youtuber</p>
              <div className="comment__rate">
                <img className="star__img" src="/images/star.svg" alt="" />
                <span className="rate star__rate">4.5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__main">
          <img className="footer__logo" src="/images/logo.svg" alt="" />
          <p className="footer__logo__desc">
            We help you find your dream plant
          </p>
          <div className="footer__social">
            <a href="#">
              {" "}
              <img
                className="footer__facebook"
                src="/images/facebook.svg"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="footer__insta"
                src="/images/instagram.svg"
                alt=""
              />
            </a>
            <a href="#">
              {" "}
              <img className="footer__twit" src="/images/twitter.svg" alt="" />
            </a>
          </div>
          <p className="footer__desc">
            2023 all Right Reserved Term of use GREENMIND
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

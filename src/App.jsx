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
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

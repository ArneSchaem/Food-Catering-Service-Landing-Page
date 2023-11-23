import CustomButton from "./CustomButton";

function Hero() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content-text-container">
              <div className="hero-content-text-container__top-Text">
                <h1>Your Favorite Food Delivered Hot & Fresh</h1>
              </div>
              <h2>
                Best food catering service in your town. We are ready to serve
                your desire. The ultimate destination for all your healthy food
                delivery needs.
              </h2>
              <div className="hero-content-text-container__button">
                <CustomButton wide buttonText="Order Now" />
                <CustomButton wide black buttonText="See the menus" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

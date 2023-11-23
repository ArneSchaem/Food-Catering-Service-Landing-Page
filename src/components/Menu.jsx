import bowlone from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/img-1.png";

function Menu() {
  return (
    <>
      <section id="menu" className="menu-section">
        <div className="menu-content">
          <div className="menu-content__text-container">
            <h1>Our special Catering</h1>
            <h2>
              This lesson provides a basic framework for conducting a recipe
              demonstration
            </h2>
          </div>
          <div className="menu-content-row-layout">
            <div className="menu-content-column-container">
              <div className="menu-content-info-container">
                {/*<img src={bowlone} alt="" id="" /> */}

                <h1>Bhuna Khichuri and Thai Chiken</h1>
                <div className="stars-and-kcal">
               



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;

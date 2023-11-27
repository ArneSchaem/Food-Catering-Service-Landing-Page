import bowlone from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/img-1.png";
import star from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/star.png";
import fire from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/fire.png";
import CustomButtonSmall from "./CustomButtonSmall";
import CustomButtonSmallMinus from "./CustomButtonSmallMinus";
import bowlsecond from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/img-2.png";
import bowlthird from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/img-3.png";
import bowlfourth from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/img-4.png";
import bowlfifth from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/img-5.png";
import CustomButtonArrow from "./CustomButtonArrow";
import React, { useState } from "react";

function Menu() {
  const [counters, setCounters] = useState({
    item1: 250,
    item2: 250,
    item3: 250,
    item4: 250,
    item5: 250,
  });

  const handleButtonClick = (item) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [item]: prevCounters[item] + 250,
    }));
  };

  const handleButtonClickMinus = (item) => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [item]: prevCounters[item] - 250,
    }));
  };

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
              <div className="menu-content-all">
                <div className="menu-content-info-container-top">
                  <img src={bowlone} alt="" id="bowl" />
                </div>
                <div className="menu-content-info-container">
                  <h1>Bhuna Khichuri and Thai Chiken</h1>
                  <div className="stars-and-kcal">
                    <div className="stars-and-kcal__starscon">
                      <img src={star} alt="" id="star" />
                      <p>4.8</p>
                    </div>

                    <div className="stars-and-kcal__firecon">
                      <img src={fire} alt="" id="fire" />
                      <p>150 Kcal</p>
                    </div>
                  </div>
                  <div className="price-container">
                    <p>BDT</p>
                    <h1>{counters.item1}</h1>
                    {counters.item1 > 250 && (
                      <CustomButtonSmallMinus
                        onButtonClick={() => handleButtonClickMinus("item1")}
                      />
                    )}
                    <CustomButtonSmall
                      onButtonClick={() => handleButtonClick("item1")}
                    />
                  </div>
                </div>
              </div>
              <div className="menu-content-all">
                <div className="menu-content-info-container-top">
                  <img src={bowlsecond} alt="" id="bowl" />
                </div>
                <div className="menu-content-info-container">
                  <h1>Bhuna Khichuri and Thai Chiken</h1>
                  <div className="stars-and-kcal">
                    <div className="stars-and-kcal__starscon">
                      <img src={star} alt="" id="star" />
                      <p>4.8</p>
                    </div>

                    <div className="stars-and-kcal__firecon">
                      <img src={fire} alt="" id="fire" />
                      <p>150 Kcal</p>
                    </div>
                  </div>
                  <div className="price-container">
                    <p>BDT</p>
                    <h1>{counters.item2}</h1>
                    {counters.item2 > 250 && (
                      <CustomButtonSmallMinus
                        onButtonClick={() => handleButtonClickMinus("item2")}
                      />
                    )}
                    <CustomButtonSmall
                      onButtonClick={() => handleButtonClick("item2")}
                    />
                  </div>
                </div>
              </div>
              <div className="menu-content-all">
                <div className="menu-content-info-container-top">
                  <img src={bowlthird} alt="" id="bowl" />
                </div>
                <div className="menu-content-info-container">
                  <h1>Bhuna Khichuri and Thai Chiken</h1>
                  <div className="stars-and-kcal">
                    <div className="stars-and-kcal__starscon">
                      <img src={star} alt="" id="star" />
                      <p>4.8</p>
                    </div>

                    <div className="stars-and-kcal__firecon">
                      <img src={fire} alt="" id="fire" />
                      <p>150 Kcal</p>
                    </div>
                  </div>
                  <div className="price-container">
                    <p>BDT</p>
                    <h1>{counters.item3}</h1>
                    {counters.item3 > 250 && (
                      <CustomButtonSmallMinus
                        onButtonClick={() => handleButtonClickMinus("item3")}
                      />
                    )}
                    <CustomButtonSmall
                      onButtonClick={() => handleButtonClick("item3")}
                    />
                  </div>
                </div>
              </div>
              <div className="menu-content-all">
                <div className="menu-content-info-container-top">
                  <img src={bowlfourth} alt="" id="bowl" />
                </div>
                <div className="menu-content-info-container">
                  <h1>Bhuna Khichuri and Thai Chiken</h1>
                  <div className="stars-and-kcal">
                    <div className="stars-and-kcal__starscon">
                      <img src={star} alt="" id="star" />
                      <p>4.8</p>
                    </div>

                    <div className="stars-and-kcal__firecon">
                      <img src={fire} alt="" id="fire" />
                      <p>150 Kcal</p>
                    </div>
                  </div>
                  <div className="price-container">
                    <p>BDT</p>
                    <h1>{counters.item4}</h1>
                    {counters.item4 > 250 && (
                      <CustomButtonSmallMinus
                        onButtonClick={() => handleButtonClickMinus("item4")}
                      />
                    )}
                    <CustomButtonSmall
                      onButtonClick={() => handleButtonClick("item4")}
                    />
                  </div>
                </div>
              </div>
              <div className="menu-content-all">
                <div className="menu-content-info-container-top">
                  <img src={bowlfifth} alt="" id="bowl" />
                </div>
                <div className="menu-content-info-container">
                  <h1>Bhuna Khichuri and Thai Chiken</h1>
                  <div className="stars-and-kcal">
                    <div className="stars-and-kcal__starscon">
                      <img src={star} alt="" id="star" />
                      <p>4.8</p>
                    </div>

                    <div className="stars-and-kcal__firecon">
                      <img src={fire} alt="" id="fire" />
                      <p>150 Kcal</p>
                    </div>
                  </div>
                  <div className="price-container">
                    <p>BDT</p>
                    <h1>{counters.item5}</h1>
                    {counters.item5 > 250 && (
                      <CustomButtonSmallMinus
                        onButtonClick={() => handleButtonClickMinus("item5")}
                      />
                    )}
                    <CustomButtonSmall
                      onButtonClick={() => handleButtonClick("item5")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="arrow-container">
            <CustomButtonArrow />
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;

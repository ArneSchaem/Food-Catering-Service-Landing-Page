import office from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/office.png";
import nonprofit from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/nonprofit.png";
import student from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/student.png";
import party from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/party.png";
import wedding from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/menu/wedding.png";

function Showcase() {
  return (
    <>
      <section id="showcase" className="showcase-section">
        <div className="showcase-content">
          <div className="showcase-content-container">
            <div className="showcase-content-container-top">
              <div className="showcase-content-container-text">
                <h1>Plan Event With Us</h1>
                <h2>
                  This lesson provides a basic framework for conducting a recipe
                  demonstration
                </h2>
                <button>
                  <span>Book a call</span>
                </button>
              </div>
              <div className="showcase-content-container-top__img">
                <img src={office} alt="office" />
                <img src={nonprofit} alt="nonprofit" />
              </div>
            </div>
            <div className="showcase-content-container__img">
              <img src={student} alt="student" />
              <img src={party} alt="party" />
              <img src={wedding} alt="wedding" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;

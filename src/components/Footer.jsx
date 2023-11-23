import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import logo from "/Users/arne/Documents/GitHub/Food-Catering-Service-Landing-Page/src/images/footer/chef-hat.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-content-row-layout">
            <div className="footer-content-row-layout__left">
              <div className="footer-content-row-layout__left__column">
                <img src={logo} alt="" />
                <p>Good food and good Life</p>
              </div>
              <div className="footer-content-row-layout__left__socials">
                <div className="footer-content-row-layout__left__socials__circle">
                  <IconBrandFacebook color="#FFFFFF" className="footer-icon" />
                </div>
                <div className="footer-content-row-layout__left__socials__circle__norm">
                  <IconBrandInstagram color="#323434"className="footer-icon" />
                </div>
                <div className="footer-content-row-layout__left__socials__circle__norm">
                  <IconBrandTwitter color="#323434"className="footer-icon" />
                </div>
                <div className="footer-content-row-layout__left__socials__circle__norm">
                  <IconBrandYoutube color="#323434"className="footer-icon" />
                </div>
              </div>
            </div>

            <div className="footer-content-row-right"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import "../assets/CSS/Home.css";

const Footer = () => {
  return (
    <div>
      {" "}
      <footer>
        <div className="container">
          <img
            className="imagefooter"
            src="assets/images/logo-ALTA-v2@2x.png"
            alt=""
          />
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="footertitle">About Alterra Academy</p>
              <p className="footercontent">
                Alterra Academy is HubSpot Theme Based On Engagement Design
                Framework, designed & developed by Openthrive.
              </p>
              <p className="footerbtn">
                Button Text <img src="assets/images/long_right.svg" />
              </p>
            </div>
            <div className="col-12 col-lg-6 footerright">
              <div className="row">
                <div className="col-2 col-lg-1">
                  <p className="footergrid">Contact</p>
                </div>
                <div className="col-2 col-lg-1">
                  <p className="footergrid">Career</p>
                </div>
                <div className="col-2 col-lg-3">
                  <p className="footergrid">Privacy Plocy</p>
                </div>
                <div className="col-2 col-lg-3">
                  <p className="footergrid">Terms Services</p>
                </div>
                <div className="col-2 col-lg-2">
                  <p className="footergrid">GDPR</p>
                </div>
                <div className="col-2 col-lg-2">
                  <p className="footergrid">FAQs</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2 col-lg-2"></div>
                <div className="col-2 col-lg-1">
                  <p className="footergrid">Contact</p>
                </div>
                <div className="col-2 col-lg-1">
                  <p className="footergrid">Career</p>
                </div>
                <div className="col-2 col-lg-3">
                  <p className="footergrid">Privacy Plocy</p>
                </div>
                <div className="col-2 col-lg-3">
                  <p className="footergrid">Terms Of Services</p>
                </div>
                <div className="col-2 col-lg-2">
                  <p className="footergrid">GDPR</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="footerretangle"
            src="assets/images/Rectanglefooter.svg"
            alt=""
          />
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="ptextleft">
                B2B website and engagement design solution that transform
                marketing and sales performance like never before.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <p className="ptextright">
                © 2015-2022 Alterra Academy. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import "../assets/CSS/Home.css";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row hero1">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <h1 className="headingH1">
              This headline is the gist of the Your whole Website
            </h1>
            <p className="ParagraphH1">
              And the description of hero section is follow up message after the
              punch of a great headline. So, make it short, simple, descriptive
              and to the point.
            </p>
            <div className="row">
              <div className="col-6 col-sm-6 col-md-6 col-lg-4">
                <button type="button" className="btn btn-dark btnH1">
                  Book A Meeting <img src="assets/images/long_right.svg" />
                </button>
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-5">
                <p className="ph1">
                  Here you can put secondary action statement & CTA
                </p>
              </div>
            </div>
            <div className="row logo3">
              <div className="col-4 col-sm-4 col-md-4 col-lg-3">
                <img src="assets/images/Logitech.png" className="gambarH1" />
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-3">
                <img src="assets/images/Google.png" className="gambarH1" />
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-3">
                <img src="assets/images/Amazon.png" className="gambarH1" />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6">
            <img
              className="logobesar"
              src="src/assets/images/img/Group 16136@2x@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

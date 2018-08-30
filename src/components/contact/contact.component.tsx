import * as React from 'react';

interface ContactComponentProps {}

export const ContactComponent: React.StatelessComponent<
  ContactComponentProps
> = (props: ContactComponentProps) => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="theme-form-style-one">
                <h3>Let's get your team trained!</h3>
                <form action="inc/sendemail.php" className="form-validation">
                  <div className="single-input">
                    <label>* Name</label>
                    <input
                      type="text"
                      placeholder="Type your name here"
                      name="name"
                    />
                  </div>
                  <div className="single-input">
                    <label>* Email</label>
                    <input
                      type="email"
                      placeholder="How to contact you back"
                      name="email"
                    />
                  </div>
                  <div className="single-input">
                    <label>* Message</label>
                    <textarea placeholder="Type something" name="message" />
                  </div>
                  <input
                    type="submit"
                    value="Get request"
                    className="theme-solid-button theme-button"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="contact-address">
                <ul className="address">
                  <li>
                    <i className="flaticon-map-bold" /> 2817 Spencer Rd. Chevy
                    Chase, MD 20815, United States
                  </li>
                  <li>
                    <i className="flaticon-email" /> training@nuvious.com
                  </li>
                  <li>
                    <i className="flaticon-call" /> +1-855-656-6884
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-validation-markup">
        <div className="alert-wrapper" id="alert-success">
          <div id="success">
            <button className="closeAlert">
              <i className="fa fa-times" aria-hidden="true" />
            </button>
            <div className="wrapper">
              <p>Your message was sent successfully.</p>
            </div>
          </div>
        </div>
        <div className="alert-wrapper" id="alert-error">
          <div id="error">
            <button className="closeAlert">
              <i className="fa fa-times" aria-hidden="true" />
            </button>
            <div className="wrapper">
              <p>Sorry!Something Went Wrong.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

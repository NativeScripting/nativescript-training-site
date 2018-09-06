import * as React from 'react';
import { ContactPageForm } from './contact-page-form';

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
                <ContactPageForm />
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
                    <i className="flaticon-email" />{' '}
                    <a href="mailto:training@nuvious.com?cc=alex@nuvious.com&subject=NativeScript%20Training%20Email">
                      training@nuvious.com
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-call" />
                    <a href="tel:1-855-656-6884">+1-855-656-6884</a>
                  </li>
                  <li>
                    <i className="fa fa-calendar" />
                    <a href="https://calendly.com/nuvious" target="_blank">
                      Schedule a quick call
                    </a>
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

import * as React from 'react';
import { ContactPageForm } from './contact-page-form';
import {
  PHYSICAL_ADDRESS_ONE_LINE,
  EMAIL_TRAINING_NUVIOUS,
  CONST_PHONE_NUMBER,
} from '../../constants/constants';
import { InstantBooking } from '../global/InstantBooking/InstantBooking';

interface ContactComponentProps {
  title?: string;
}

export const ContactComponent: React.StatelessComponent<
  ContactComponentProps
> = (props: ContactComponentProps) => {
  const mailtoLink = `mailto:${EMAIL_TRAINING_NUVIOUS}?cc=alex@nuvious.com&subject=NativeScript%20Training%20Email`;
  const telLink = `tel:${CONST_PHONE_NUMBER}`;

  const title = props.title ? props.title : "Let's get your team trained!";

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="theme-form-style-one">
                <h3>{title}</h3>
                <ContactPageForm />
              </div>
            </div>
            <div className="col-md-6 col-xs-12">
              <InstantBooking />
              <div className="contact-address">
                <ul className="address">
                  <li>
                    <i className="flaticon-map-bold" />{' '}
                    {PHYSICAL_ADDRESS_ONE_LINE}
                  </li>
                  <li>
                    <i className="flaticon-email" />{' '}
                    <a href={mailtoLink}>{EMAIL_TRAINING_NUVIOUS}</a>
                  </li>
                  <li>
                    <i className="flaticon-call" />
                    <a href={telLink}>+{CONST_PHONE_NUMBER}</a>
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

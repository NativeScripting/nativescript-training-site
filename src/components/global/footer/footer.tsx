import * as React from 'react';

interface FooterProps {
  siteName: string;
}

export const Footer: React.StatelessComponent<FooterProps> = (
  props: FooterProps
) => {
  return (
    <footer className="theme-footer">
      <div className="container">
        <div className="top-footer row">
          <div className="col-sm-3 col-xs-12 footer-list">
            <h6>Use link</h6>
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-6">
                <ul>
                  <li>
                    <a href="#">Progress</a>
                  </li>
                  <li>
                    <a href="#">nStudio</a>
                  </li>
                  <li>
                    <a href="#">Commodity</a>
                  </li>
                  <li>
                    <a href="#">Mutual Funds</a>
                  </li>
                  <li>
                    <a href="#">Advisors</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-6">
                <ul>
                  <li>
                    <a href="about-us.html">About us</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <a href="events.html">Event</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 footer-logo-widget">
            <div className="wrapper">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="/images/logo/nativescript-training-logo2.png"
                    alt=""
                  />
                </a>
              </div>
              <p>
                We provide expert Business Coaching to both individuals and
                businesses. With over 30 years of experience we’ll ensure that
                you’re always getting the best guidance from the top people in
                the entire industry.
              </p>
              <ul>
                <li>
                  <i className="flaticon-stopwatch" /> Monday -Sturday at
                  09am-6pm
                </li>
                <li>
                  <i className="flaticon-map-line" /> 52 Tailstoi Town 546 IT,
                  NYC{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-xs-12 footer-news">
            <h6>Update News</h6>
            <ul>
              <li>
                <a href="blog-details.html">
                  Are Performance Appraisals Pre The annual performance{' '}
                </a>
                <div className="date">February 23, 2017</div>
              </li>
              <li>
                <a href="blog-details.html">
                  Increase the value of your business by 71%
                </a>
                <div className="date">February 22, 2017</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container">
          <p>
            Copyright &copy; 2018{' '}
            <a href="http://www.nuvious.com" className="tran3s">
              Nuvious
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

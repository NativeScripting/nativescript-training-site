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
            <h6>Our Partners</h6>
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
                NativeScript Training provides expert NativeScript training,
                code reviews, and mentoring to both individuals and businesses.
                Our partners provide best in class professional services,
                consulting, implementation, and team augmentation in mobile and
                cloud.
              </p>
              <ul>
                <li>
                  <i className="flaticon-stopwatch" /> Monday - Saturday 7am-5pm
                  EST
                </li>
                <li>
                  <i className="flaticon-map-line" /> 2817 Spencer Rd. Chevy
                  Chase, MD 20815, United States
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 col-xs-12 footer-news">
            <h6>Latest Partner Articles</h6>
            <ul>
              <li>
                <a
                  href="https://nativescripting.com/posts/nativescript-network-spy"
                  target="_blank"
                >
                  Easy NativeScript Network Spy Using a Custom Interceptor
                </a>
                <div className="date">August 24, 2018</div>
              </li>
              <li>
                <a
                  href="https://nstudio.io/blog/adaptive-icons/"
                  target="_blank"
                >
                  What are Adaptive Icons?
                </a>
                <div className="date">August 13, 2018</div>
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

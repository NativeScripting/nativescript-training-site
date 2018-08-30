import * as React from 'react';
import Link from 'gatsby-link';
import { ProgressLogo } from '../svg-logos/progress';
import { NativeScriptingLogo } from '../svg-logos/nativescripting';
import { NStudioLogo } from '../svg-logos/nstudio';
import { NuviousLogo } from '../svg-logos/nuvious';
import { getNSTrainingLogo } from '../svg-logos/ns-training1';

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
                    <a href="https://www.progress.com/" target="_blank">
                      {ProgressLogo}
                    </a>
                  </li>
                  <li>
                    <a href="https://nstudio.io/" target="_blank">
                      {NStudioLogo}
                    </a>
                  </li>
                  <li>
                    <a href="https://nativescripting.com" target="_blank">
                      {NativeScriptingLogo}
                    </a>
                  </li>
                  <li>
                    <a href="http://www.nuvious.com/" target="_blank">
                      {NuviousLogo}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-6" />
            </div>
          </div>
          <div className="col-sm-6 col-xs-12 footer-logo-widget">
            <div className="wrapper">
              <div className="logo">
                <Link to="/">{getNSTrainingLogo('#6664D4', '#6664D4')}</Link>
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

import * as React from 'react';
import { Offering, Course } from '../../../domain/models';
import { MainNav } from '../menu/main-nav';

interface HeaderProps {
  siteName: string;
  offerings: Offering[];
  courses: Course[];
}

export const Header: React.StatelessComponent<HeaderProps> = (
  props: HeaderProps
) => {
  return (
    <header className="header-wrapper">
      <div className="top-header bg-one">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-xs-12 left-list">
              <ul>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true" />{' '}
                    +1-855-656-6884
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-7 col-xs-12 right-list text-right">
              <ul>
                <li>
                  <a href="#">Get Support</a>
                </li>
                <li>
                  <a href="#">Our Causes</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <ul className="social-icon">
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-skype" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-pinterest" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-google-plus" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="theme-menu-wrapper">
        <div className="container">
          <div className="main-content-wrapper clearfix">
            <div className="logo float-left">
              <a href="index.html">
                <img
                  src="/images/logo/nativescript-training-logo.png"
                  alt="Logo"
                />
              </a>
            </div>

            <MainNav offerings={props.offerings} courses={props.courses} />
          </div>
        </div>
      </div>
    </header>
  );
};

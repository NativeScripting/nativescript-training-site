import * as React from 'react';
import Link from 'gatsby-link';
import { Offering, Course } from '../../../domain/models';
import { trainingUrlFromId, courseUrlFromId } from '../../../util/urls';
import { withBrowserWindow } from '../../../util/browser-dom';

interface MainNavProps {
  offerings: Offering[];
  courses: Course[];
}

export const MainNav: React.StatelessComponent<MainNavProps> = (
  props: MainNavProps
) => {
  const offeringsHtml = props.offerings.map((o, i) => {
    return (
      <li key={i}>
        <a href={trainingUrlFromId(o.id)}>{o.title}</a>
      </li>
    );
  });

  const coursesHtml = props.courses.map((o, i) => {
    return (
      <li key={i}>
        <a href={courseUrlFromId(o.id)}>{o.title}</a>
      </li>
    );
  });

  let homeClass = '';
  let trainingClass = '';
  let coursesClass = '';
  let scheduleClass = '';

  withBrowserWindow(() => {
    homeClass = window.location.pathname === '/' ? 'active' : '';
    trainingClass = window.location.pathname.match(/^\/training/)
      ? 'active'
      : '';
    coursesClass = window.location.pathname.match(/^\/courses/) ? 'active' : '';
    scheduleClass = window.location.pathname.match(/^\/schedule/)
      ? 'active'
      : '';
  });

  return (
    <nav className="theme-main-menu navbar float-right" id="mega-menu-wrapper">
      <div id="menuToggle">
        <input type="checkbox" />

        <span />
        <span />
        <span />

        <ul id="menu" className="nav">
          <li className={homeClass}>
            <a href="/">Home</a>
          </li>
          <li className={'dropdown-holder ' + trainingClass}>
            <a href="/training">Training</a>
          </li>
          <li className={'dropdown-holder ' + coursesClass}>
            <a href="/courses">Courses</a>
          </li>
          <li className={scheduleClass}>
            <a href="/schedule">Schedule</a>
          </li>
          <li className="join-us">
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="navbar-header" />

      <div className="collapse navbar-collapse" id="navbar-collapse-1">
        <ul className="nav">
          <li className={homeClass}>
            <Link to="/">Home</Link>
          </li>
          <li className={'dropdown-holder ' + trainingClass}>
            <Link activeClassName="active" to="/training">
              Training
            </Link>
            <ul className="sub-menu">{offeringsHtml}</ul>
          </li>
          <li className={'dropdown-holder ' + coursesClass}>
            <Link activeClassName="active" to="/courses">
              Courses
            </Link>
            <ul className="sub-menu">{coursesHtml}</ul>
          </li>
          <li className={scheduleClass}>
            <Link activeClassName="active" to="/schedule">
              Schedule
            </Link>
          </li>
          <li className="join-us">
            <Link className="theme-solid-button" to="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

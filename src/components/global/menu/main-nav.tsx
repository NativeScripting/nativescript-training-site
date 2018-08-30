import * as React from 'react';
import Link from 'gatsby-link';
import { Offering, Course } from '../../../domain/models';
import { trainingUrlFromId, courseUrlFromId } from '../../../util/urls';

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

  const homeClass = location.pathname === '/' ? 'active' : '';
  const trainingClass = location.pathname.match(/^\/training/) ? 'active' : '';
  const coursesClass = location.pathname.match(/^\/courses/) ? 'active' : '';
  const scheduleClass = location.pathname.match(/^\/schedule/) ? 'active' : '';

  return (
    <nav className="theme-main-menu navbar float-right" id="mega-menu-wrapper">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>

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

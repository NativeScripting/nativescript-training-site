import * as React from 'react';
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
          <li className="dropdown-holder">
            <a href="/">Home</a>
          </li>
          <li className="dropdown-holder">
            <a href="/training">Training</a>
            <ul className="sub-menu">{offeringsHtml}</ul>
          </li>
          <li className="dropdown-holder">
            <a href="/courses">Courses</a>
            <ul className="sub-menu">{coursesHtml}</ul>
          </li>
          <li className="dropdown-holder active">
            <a href="/schedule">Schedule</a>
          </li>
          <li className="join-us">
            <a href="/contact" className="theme-solid-button">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

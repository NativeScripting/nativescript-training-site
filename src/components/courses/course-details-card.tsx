import * as React from 'react';
import { Course, Session } from '../../domain/models';

interface CourseDetailsCardProps {
  course: Course;
  nextSession: Session;
}

export const CourseDetailsCard: React.StatelessComponent<
  CourseDetailsCardProps
> = (props: CourseDetailsCardProps) => {
  const course = props.course;

  return (
    <div className="course-info-data">
      <div className="clearfix">
        <h2 className="float-left">
          <i className="flaticon-device" /> {course.title}
        </h2>
        <ul className="float-right course-value">
          <li>
            <i className="flaticon-book" />
          </li>
          <li />
        </ul>
      </div>

      <div className="clearfix bottom-content">
        <ul className="course-schedule float-left">
          <li>Course Code : {course.code}</li>
          <li>Course Version : {course.version}</li>
          <li>Course Duration : {course.length}</li>
          <li>
            <ul>
              <li>Review :</li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star-half-o" aria-hidden="true" />
              </li>
            </ul>
          </li>
        </ul>
        {props.nextSession && (
          <a
            href={props.nextSession.registerLink}
            className="float-right theme-line-button"
          >
            Register for Next Session
          </a>
        )}
      </div>
    </div>
  );
};

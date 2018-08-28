import * as React from 'react';
import { Course } from '../../domain/models';

interface CourseDetailsCardProps {
  course: Course;
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
          <li>${course.price}</li>
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
        <a href="#" className="float-right theme-line-button">
          Join Now
        </a>
      </div>
    </div>
  );
};

import * as React from 'react';
import { Course } from '../../domain/models';

interface CourseProductsCoveredProps {
  course: Course;
}

export const CourseProductsCovered: React.StatelessComponent<
  CourseProductsCoveredProps
> = (props: CourseProductsCoveredProps) => {
  const course = props.course;

  const rowsHtml = course.products.map((c, i) => {
    return (
      <li key={i}>
        <a>{c}</a>
      </li>
    );
  });

  return (
    <div className="sidebar-widget sidebar-list">
      <h5>Products Covered</h5>
      <ul>{rowsHtml}</ul>
    </div>
  );
};

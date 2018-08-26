import * as React from 'react';
import { Course } from '../../domain/models';
import { courseUrlFromId } from '../../util/urls';

interface CourseSummariesTableProps {
  courses: Course[];
}

export const CourseSummariesTable: React.StatelessComponent<
  CourseSummariesTableProps
  > = (props: CourseSummariesTableProps) => {
    const courses = props.courses;

    const rowsHtml = courses.map((c, i) => {
      const courseUrl = courseUrlFromId(c.id);
      return (
        <tr key={i}>
          <td><a href={courseUrl}>{c.code}</a></td>
          <td><a href={courseUrl}>{c.title}</a></td>
          <td>{c.audience}</td>
          <td>{c.length}</td>
          <td>{c.price}</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
      );
    });

    return (
      <div className="temp-component">
        <table>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Audience</th>
              <th>Duration</th>
              <th>List Price</th>
              <th>Public Classes</th>
              <th>Private Onsite</th>
            </tr>
          </thead>
          <tbody>{rowsHtml}</tbody>
        </table>
      </div>
    );
  };

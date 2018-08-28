import * as React from 'react';
import { Session } from '../../domain/models';
import { dateFormat } from '../../util/date-utils';

interface CourseUpcomingSessionsProps {
  sessions: Session[];
}

export const CourseUpcomingSessions: React.StatelessComponent<
  CourseUpcomingSessionsProps
> = (props: CourseUpcomingSessionsProps) => {
  const sessions = props.sessions;

  const rowsHtml = sessions.map((c, i) => {
    return (
      <li key={i}>
        <img src="images/course/19.jpg" alt="" />
        <div className="date">
          <strong>Free</strong>
          {dateFormat(c.dateStart)}
        </div>
        <a href={c.registerLink}>Register for Wash DC class</a>
      </li>
    );
  });

  return (
    <div className="sidebar-widget sidebar-post-data">
      <h5>Upcoming Offerings</h5>
      <ul>{rowsHtml}</ul>
    </div>
  );
};

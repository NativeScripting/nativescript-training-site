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

  const rowsHtml = sessions.map((session, i) => {
    return (
      <li key={i}>
        <img src="images/course/19.jpg" alt="" />
        <div className="date">
          <strong>${session.price}</strong>
          {dateFormat(session.dateStart)}
        </div>
        <a href={session.registerLink}>Register for Wash DC class</a>
      </li>
    );
  });

  return (
    <div className="sidebar-widget sidebar-post-data">
      <h5>Upcoming Sessions</h5>

      {props.sessions.length > 0 && <ul>{rowsHtml}</ul>}
      {!(props.sessions.length > 0) && (
        <p>
          There are no public sessions scheduled for this course at the moment.
          Please <a href="/contact">get in touch</a> with us about arranging a
          private session.
        </p>
      )}
    </div>
  );
};

import * as React from 'react';
import { Session } from '../../domain/models';
import { sessionUrlFrom } from '../../util/urls';
import { dateFormat, monthNameFromDate } from '../../util/date-utils';

interface SessionsCardProps {
  session: Session;
}

export const SessionsCard: React.StatelessComponent<SessionsCardProps> = (
  props: SessionsCardProps
) => {
  const session = props.session;

  return (
    <div className="single-event-figure row">
      <div className="col-md-7 col-xs-12">
        <h5>
          <a href={sessionUrlFrom(session.id)}>{session.title}</a>
        </h5>
        <ul className="event-meta-data">
          <li className="date">
            <strong>{session.dateStart.getDate()}</strong>{' '}
            {monthNameFromDate(session.dateStart)}
          </li>
          <li>
            <i className="fa fa-map-marker" aria-hidden="true" />{' '}
            {session.location.title}
          </li>
          <li>
            <i className="fa fa-clock-o" aria-hidden="true" />{' '}
            {session.timeStart} - {session.timeEnd}
          </li>
        </ul>
        <p>{session.descriptionHtml}</p>
        <a href={session.registerLink} className="theme-solid-button">
          Join Now
        </a>
      </div>
      <div className="col-md-5 col-sm-6 col-xs-12">
        <img src="images/event/1.jpg" alt="" />
      </div>
    </div>
  );
};

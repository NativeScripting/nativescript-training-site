import * as React from 'react';
import { Session } from '../../domain/models';
import { sessionUrlFrom } from '../../util/urls';
import {
  dateFormat,
  monthNameFromDate,
  isDateBeforeToday,
} from '../../util/date-utils';

interface SessionsCardProps {
  session: Session;
}

export const SessionsCard: React.StatelessComponent<SessionsCardProps> = (
  props: SessionsCardProps
) => {
  const session = props.session;

  const now = Date.now();

  const sessionLinkHtml = !isDateBeforeToday(session.dateEnd) ? (
    <a href={session.registerLink} className="theme-solid-button">
      Register Now
    </a>
  ) : (
    <a className="theme-solid-button">Event ended</a>
  );

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
        <div dangerouslySetInnerHTML={{ __html: session.descriptionHtml }} />

        {session.registerLink && sessionLinkHtml}
      </div>
      <div className="col-md-5 col-sm-6 col-xs-12">
        <img
          src="images/event/nativescript_angular_course_event_ticket.png"
          alt=""
        />
      </div>
    </div>
  );
};

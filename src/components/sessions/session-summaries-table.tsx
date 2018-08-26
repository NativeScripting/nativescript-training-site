import * as React from 'react';
import { Session } from '../../domain/models';
import { dateFormat } from '../../util/date-utils';
import { sessionUrlFrom } from '../../util/urls';

interface SessionSummariesTableProps {
  sessions: Session[];
}

export const SessionSummariesTable: React.StatelessComponent<
  SessionSummariesTableProps
  > = (props: SessionSummariesTableProps) => {
    const sessions = props.sessions;

    const rowsHtml = sessions.map((c, i) => {
      return (
        <tr key={i}>
          <td>{dateFormat(c.dateStart)}</td>
          <td><a href={sessionUrlFrom(c.id)}>{c.course.title}</a></td>
          <td>{c.trainer.name}</td>
          <td>{c.location.title}</td>
          <td>
            <a href={c.registerLink}>Register Now</a>
          </td>
        </tr>
      );
    });

    return (
      <div className="temp-component">
        <table>
          <tbody>{rowsHtml}</tbody>
        </table>
      </div>
    );
  };

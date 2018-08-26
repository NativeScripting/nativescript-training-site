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
                <tr key={i}>
                    <td>{dateFormat(c.dateStart)}</td>
                    <td><a href={c.registerLink}>Register</a></td>
                </tr>
            );
        });

        return (
            <div className="temp-component">
                <h2>Upcoming Offerings</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{rowsHtml}</tbody>
                </table>
            </div>
        );
    };

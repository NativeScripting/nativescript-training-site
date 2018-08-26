import * as React from 'react';
import { SessionsJsonConnection, CoursesJsonConnection, TrainersJsonConnection, LocationsJsonConnection } from '../domain/graphql-types';
import { sessionFromSessionsJsonEdge } from '../domain/converters/session-types';
import { SessionSummariesTable } from '../components/sessions/session-summaries-table';
import { courseFromCoursesJsonEdge, trainerFromTrainersJsonEdge, locationFromLocationsJsonEdge } from '../domain/converters';

interface SchedulePageProps {
  data: {
    sessionsConnection: SessionsJsonConnection;
    coursesConnection: CoursesJsonConnection;
    trainersConnection: TrainersJsonConnection;
    locationsConnection: LocationsJsonConnection;
  };
}

export default class extends React.Component<SchedulePageProps, any> {
  constructor(props: SchedulePageProps) {
    super(props);
  }

  public render() {

    const courses = this.props.data.coursesConnection.edges.map(courseFromCoursesJsonEdge);
    const trainers = this.props.data.trainersConnection.edges.map(trainerFromTrainersJsonEdge);
    const sessionLocations = this.props.data.locationsConnection.edges.map(locationFromLocationsJsonEdge);

    const sessions = this.props.data.sessionsConnection.edges.map(s => {
      return sessionFromSessionsJsonEdge(s, courses, sessionLocations, trainers);
    });

    return (
      <div>
        <h1>NativeScript Training Schedule of Public Classes</h1>

        <p>
          <ul>
            <li>
              All classes offered in Washington, DC are also available ONLINE via our <a href="/training/remote">Remote Class Instruction</a>.
          </li>
            <li>
              Click Register Now to see early bird discount applied.
            </li>
          </ul>
        </p>

        <SessionSummariesTable sessions={sessions} />
      </div>
    );
  }
}

export const schedulePageQuery = graphql`
  query SchedulePageQuery {

    #get sessions
    sessionsConnection: allSessionsJson {
      edges {
        node {
          id
          dateStart
          title
          locationId
          trainerId
          courseId
          registerLink
        }
      }
    }

    #get courses
    coursesConnection: allCoursesJson {
      edges {
        node {
          id
          code
          title
        }
      }
    }
    
    #get trainers
    trainersConnection: allTrainersJson {
      edges {
        node {
          id
          name
        }
      }
    }
    
    #get locations
    locationsConnection: allLocationsJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

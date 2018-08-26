import * as React from 'react';
import { Helmet } from 'react-helmet';

import {
    SessionsJson, CoursesJsonConnection, TrainersJsonConnection, LocationsJsonConnection
} from '../domain/graphql-types';

import { Session } from '../domain/models';
import { sessionFromSessionsJson } from '../domain/converters/session-types';
import { courseFromCoursesJsonEdge, trainerFromTrainersJsonEdge, locationFromLocationsJsonEdge } from '../domain/converters';


interface SessionTemplateProps {
    data: {
        sessionsConnection: SessionsJson;
        coursesConnection: CoursesJsonConnection;
        trainersConnection: TrainersJsonConnection;
        locationsConnection: LocationsJsonConnection;
    };
}

interface SessionTemplateState {
    session: Session;
}

class SessionTemplate extends React.Component<
    SessionTemplateProps,
    SessionTemplateState
    > {
    constructor(props: SessionTemplateProps) {
        super(props);

        const courses = this.props.data.coursesConnection.edges.map(courseFromCoursesJsonEdge);
        const trainers = this.props.data.trainersConnection.edges.map(trainerFromTrainersJsonEdge);
        const sessionLocations = this.props.data.locationsConnection.edges.map(locationFromLocationsJsonEdge);


        this.state = {
            session: sessionFromSessionsJson(this.props.data.sessionsConnection, courses, sessionLocations, trainers)
        };
    }

    public render() {
        const session = this.state.session;
        const title = this.props.data.sessionsConnection.title;
        const breadCrumbs = [
            { name: 'All courses', url: '/' },
            { name: 'Course details', url: '' }
        ];

        const pageTitle = `${session.title} | NativeScripting`;

        return (
            <div className="temp-component">

                <h1>{this.state.session.title}</h1>

            </div>
        );
    }
}

export const sessionPageQuery = graphql`
  query SessionPageQuery($sessionId: String) {

    #get current session
    sessionsConnection: sessionsJson(id: { eq: $sessionId }) {
      id
      title
    }

    #get all courses
    coursesConnection: allCoursesJson {
        totalCount
        edges {
          node {
            id
            title
            flavors
          }
        }
    }

    #get all trainers
    trainersConnection: allTrainersJson {
        totalCount
        edges {
          node {
            id
            name
          }
        }
    }

    #get all locations
    locationsConnection: allLocationsJson {
        totalCount
        edges {
          node {
            id
            title
          }
        }
    }
  }
`;

export default SessionTemplate;

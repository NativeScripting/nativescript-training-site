import * as React from 'react';
import { Helmet } from 'react-helmet';

import {
    CoursesJson, SessionsJsonConnection
} from '../domain/graphql-types';
import {
    courseFromCoursesJson
} from '../domain/converters';
import { Course } from '../domain/models';
import { sessionFromSessionsJsonEdge } from '../domain/converters/session-types';
import { CourseUpcomingSessions } from '../components/courses/course-upcoming-sessions';


interface CourseTemplateProps {
    data: {
        courseConnection: CoursesJson;
        sessionsConnection: SessionsJsonConnection;
    };
}

interface CourseTemplateState {
    course: Course;
}

class CourseTemplate extends React.Component<
    CourseTemplateProps,
    CourseTemplateState
    > {
    constructor(props: CourseTemplateProps) {
        super(props);

        this.state = {
            course: courseFromCoursesJson(this.props.data.courseConnection)
        };
    }

    public render() {
        const course = this.state.course;

        const sessions = this.props.data.sessionsConnection.edges
            .filter(s => s.node.courseId === this.state.course.id)
            .map(s => {
                return sessionFromSessionsJsonEdge(s, [], [], []);
            });

        const title = this.props.data.courseConnection.title;
        const breadCrumbs = [
            { name: 'All courses', url: '/' },
            { name: 'Course details', url: '' }
        ];

        const pageTitle = `${course.title} | NativeScripting`;

        return (
            <div className="temp-component">

                <h1>{this.state.course.title}</h1>

                <CourseUpcomingSessions sessions={sessions} />

            </div>
        );
    }
}

export const coursePageQuery = graphql`
  query CoursePageQuery($courseId: String) {

    #get current course
    courseConnection: coursesJson(id: { eq: $courseId }) {
      id
      title
      subtitle
      flavors
      label
    }

    #get sessions
    sessionsConnection: allSessionsJson {
      edges {
        node {
          id
          courseId
          dateStart
          registerLink
        }
      }
    }
  }
`;

export default CourseTemplate;

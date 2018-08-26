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
import { BreadCrumbs } from '../components/global/breadcrumbs/breadcrumbs';
import { CourseDetails } from '../components/courses/course-details';
import { CoursePrerequisites } from '../components/courses/course-prerequisites';
import { PrivateClassesBox } from '../components/global/privateclassesbox/private-classes-box';
import { CourseProductsCovered } from '../components/courses/course-products-covered';
import { CourseCurriculum } from '../components/courses/course-curriculum';


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
            { name: 'Home', url: '/' },
            { name: 'Courses', url: '/courses' },
            { name: course.title, url: '' },
        ];

        const pageTitle = `${course.title} | NativeScripting`;

        return (
            <div className="temp-component">

                <BreadCrumbs breadcrumbs={breadCrumbs} />

                <h1>{course.title}</h1>

                <p dangerouslySetInnerHTML={{ __html: course.descriptionHtml }}>
                </p>

                <CoursePrerequisites course={course} />
                <CourseCurriculum course={course} />

                <CourseUpcomingSessions sessions={sessions} />
                <CourseDetails course={course} />

                <CourseProductsCovered course={course} />

                <PrivateClassesBox />

            </div>
        );
    }
}

export const coursePageQuery = graphql`
  query CoursePageQuery($courseId: String) {

    #get current course
    courseConnection: coursesJson(id: { eq: $courseId }) {
      id
      code
      version
      title
      length
      price
      subtitle
      flavors
      label
      descriptionHtml
      prerequisites
      products {
          title
      }
      curriculum {
        id
        title
        description
        labsHtml
        topics {
            id
            title
        }
      }
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

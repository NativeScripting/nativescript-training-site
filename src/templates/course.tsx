import * as React from 'react';
import { Helmet } from 'react-helmet';

import { CoursesJson, SessionsJsonConnection } from '../domain/graphql-types';
import { courseFromCoursesJson } from '../domain/converters';
import { Course } from '../domain/models';
import { sessionFromSessionsJsonEdge } from '../domain/converters/session-types';
import { CourseUpcomingSessions } from '../components/courses/course-upcoming-sessions';

import { CourseProductsCovered } from '../components/courses/course-products-covered';
import { CourseCurriculum } from '../components/courses/course-curriculum';
import { CourseDetailsCard } from '../components/courses/course-details-card';
import { CourseInstructors } from '../components/courses/course-instructors';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';
import { CourseDetailSidebarPrivateClassesBox } from '../components/courses/course-detail-sidebar-private/course-detail-sidebar-private';

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
      course: courseFromCoursesJson(this.props.data.courseConnection),
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
      <div>
        <InnerBanner title="Courses" subtitle="Course details" />
        <div className="course-details section-margin-top section-margin-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-xs-12 course-details-content">
                <img src="images/course/21.jpg" alt="" />

                <CourseDetailsCard course={course} />

                <div className="course-description">
                  <h5>COURSE DESCRIPTION</h5>
                  <p
                    dangerouslySetInnerHTML={{ __html: course.descriptionHtml }}
                  />
                </div>

                <div className="course-description">
                  <h5>STUDENT PREREQUISITES</h5>
                  <p>{course.prerequisites}</p>
                </div>

                <div className="course-panel">
                  <div className="panel-group theme-accordion" id="accordion">
                    <CourseCurriculum course={course} />

                    <CourseInstructors course={course} />
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 theme-sidebar">
                <CourseUpcomingSessions sessions={sessions} />
                <CourseProductsCovered course={course} />

                <CourseDetailSidebarPrivateClassesBox />

                <div className="sidebar-download">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-file-pdf-o" aria-hidden="true" />{' '}
                        Download Program
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-file-pdf-o" aria-hidden="true" />{' '}
                        Download Materials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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

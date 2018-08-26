import * as React from 'react';
import { CoursesJsonConnection } from '../domain/graphql-types';
import { courseFromCoursesJsonEdge } from '../domain/converters';
import { CourseSummariesTable } from '../components/courses/course-summaries-table';

interface CoursesPageProps {
  data: {
    coursesConnection: CoursesJsonConnection;
  };
}

export default class extends React.Component<CoursesPageProps, any> {
  constructor(props: CoursesPageProps) {
    super(props);
  }

  public render() {
    const courses = this.props.data.coursesConnection.edges.map(
      courseFromCoursesJsonEdge
    );

    return (
      <div>
        <h1>NativeScript Training Course Catalog</h1>

        <p>This page displays classes with list price for class registration. Early bird registration can reduce list price by up to 30%.</p>

        <CourseSummariesTable courses={courses} />
      </div>
    );
  }
}

export const coursesPageQuery = graphql`
  query CoursesPageQuery {
    #get courses
    coursesConnection: allCoursesJson {
      edges {
        node {
          id
          code
          title
          length
          price
          audience {
            title
          }
        }
      }
    }
  }
`;

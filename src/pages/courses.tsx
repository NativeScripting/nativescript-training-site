import * as React from 'react';
import { Helmet } from 'react-helmet';

import { CoursesJsonConnection } from '../domain/graphql-types';
import { courseFromCoursesJsonEdge } from '../domain/converters';
import { CourseSummariesTable } from '../components/courses/course-summaries-table';
import { CoursesCard } from '../components/courses/courses-card';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';

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

    const courseCardsHtml = courses.map((c, i) => {
      return <CoursesCard key={i} course={c} />;
    });

    const pageTitle = `Courses | NativeScript Training`;

    return (
      <div>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <InnerBanner
          title="Courses"
          subtitle="NativeScript Training Course Catalog"
          bannerImg="/images/course/banner.jpg"
        />

        <div className="course-search-form">
          <div className="container">
            <div className="title">
              <h2>
                EARLY <span>BIRD</span> SPECIALS
              </h2>
              <p>
                This page displays classes with list price for class
                registration. Early bird registration can reduce list price by
                up to 30%.
              </p>
            </div>
          </div>
        </div>

        <div className="our-courses section-margin-top section-margin-bottom">
          <div className="container">
            <div className="row">{courseCardsHtml}</div>

            <div className="text-center show-more">
              <a
                href="/schedule"
                className="wow fadeInUp animated theme-solid-button theme-button"
              >
                Show Course Schedule
              </a>
            </div>
          </div>
        </div>
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
          label
          audience {
            title
          }
        }
      }
    }
  }
`;

import * as React from 'react';
import Link from 'gatsby-link';
import { ReactNode } from 'react';
import { MainMenu } from '../components/global/menu/main-menu';
import { Header } from '../components/global/header/header';
import { Footer } from '../components/global/footer/footer';
import { OfferingsJsonConnection, CoursesJsonConnection } from '../domain/graphql-types';
import { courseFromCoursesJsonEdge, offeringFromOfferingsJsonEdge } from '../domain/converters';

import '../css/styles.css';

interface IndexLayoutProps {
  children?: any;
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
    offeringsConnection: OfferingsJsonConnection,
    coursesConnection: CoursesJsonConnection
  };
}

const IndexLayout: React.StatelessComponent<IndexLayoutProps> = ({
  children,
  data,
}) => {

  const offerings = data.offeringsConnection.edges.map(
    offeringFromOfferingsJsonEdge
  );

  const courses = data.coursesConnection.edges.map(
    courseFromCoursesJsonEdge
  );

  return (
    <div>
      <Header siteName={data.site.siteMetadata.siteName} />
      <MainMenu offerings={offerings} courses={courses} />
      <main className="temp-main" role="main">{children()}</main>
      <Footer siteName={data.site.siteMetadata.siteName} />
    </div>
  );
};

export const indexLayoutQuery = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        siteName
      }
    }


    offeringsConnection: allOfferingsJson {
      edges {
        node {
          id
          title
        }
      }
    }
    

    coursesConnection: allCoursesJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export default IndexLayout;

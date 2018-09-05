import * as React from 'react';
import { Header } from '../components/global/header/header';
import { Footer } from '../components/global/footer/footer';
import { NewsletterBanner } from '../components/global/newsletter-banner/newsletter-banner';
import {
  OfferingsJsonConnection,
  CoursesJsonConnection,
} from '../domain/graphql-types';
import {
  courseFromCoursesJsonEdge,
  offeringFromOfferingsJsonEdge,
} from '../domain/converters';

import '../css/styles.css';

interface IndexLayoutProps {
  children?: any;
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
    offeringsConnection: OfferingsJsonConnection;
    coursesConnection: CoursesJsonConnection;
  };
}

class IndexLayoutPage extends React.Component<IndexLayoutProps, {}> {
  constructor(props: IndexLayoutProps) {
    super(props);
  }

  public render() {
    const offerings = this.props.data.offeringsConnection.edges.map(
      offeringFromOfferingsJsonEdge
    );

    const courses = this.props.data.coursesConnection.edges.map(
      courseFromCoursesJsonEdge
    );

    return (
      <div className="main-page-wrapper">
        <Header
          siteName={this.props.data.site.siteMetadata.siteName}
          offerings={offerings}
          courses={courses}
        />

        <main role="main">{this.props.children()}</main>

        <Footer siteName={this.props.data.site.siteMetadata.siteName} />
      </div>
    );
  }
}

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

export default IndexLayoutPage;

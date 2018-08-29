import * as React from 'react';
import Link from 'gatsby-link';
import { ReactNode } from 'react';
import { MainMenu } from '../components/global/menu/main-menu';
import { Header } from '../components/global/header/header';
import { Footer } from '../components/global/footer/footer';
import {
  OfferingsJsonConnection,
  CoursesJsonConnection,
} from '../domain/graphql-types';
import {
  courseFromCoursesJsonEdge,
  offeringFromOfferingsJsonEdge,
} from '../domain/converters';
import { getHeader } from './headertemp';
import { getLoader } from './loadertemp';
import { getInnerBanner } from './innerbannertemp';
//import * as loadScript from 'simple-load-script';
//import 'babel-polyfill'; // must be imported for async/await to work, see e.g. https://github.com/gatsbyjs/gatsby/pull/3369#issuecomment-354599985

/*
import '../vendor/bootstrap/bootstrap.css';

import '../vendor/bootstrap-select/dist/css/bootstrap-select.css';
import '../vendor/bootstrap-mega-menu/css/menu.css';
import '../fonts/font-awesome/css/font-awesome.min.css';
import '../vendor/WOW-master/css/libs/animate.css';
import '../fonts/icon/font/flaticon.css';
*/

//import '../css/style.css';
import '../css/responsive.css';
import '../css/styles.css';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';
import { getNewsletterBanner } from './newsletterbannertemp';

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

class IndexLayoutPage extends React.Component<IndexLayoutProps, null> {
  constructor(props: IndexLayoutProps) {
    super(props);
  }

  async componentDidMount() {
    console.log('componentn mounted');
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

        {getNewsletterBanner()}

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

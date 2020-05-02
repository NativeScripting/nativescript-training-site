import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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

export const MainLayout: React.SFC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MainLayoutQuery {
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
    `}
    render={data => {
      const offerings = data.offeringsConnection.edges.map(
        offeringFromOfferingsJsonEdge
      );

      const courses = data.coursesConnection.edges.map(
        courseFromCoursesJsonEdge
      );

      return (
        <div className="main-page-wrapper">
          <Header
            siteName={data.site.siteMetadata.siteName}
            offerings={offerings}
            courses={courses}
          />

          <main role="main">{children}</main>

          <Footer siteName={data.site.siteMetadata.siteName} />
        </div>
      );
    }}
  />
);

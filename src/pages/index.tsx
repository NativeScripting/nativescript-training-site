import * as React from 'react';

import './index.css';
import { HomeFeatures } from '../components/home/home-features';
import { OfferingsJsonConnection } from '../domain/graphql-types';

interface IndexPageProps {
  data: {
    offeringsConnection: OfferingsJsonConnection;
  };
}

export default class extends React.Component<IndexPageProps, any> {
  constructor(props: IndexPageProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <div
          id="theme-main-banner"
          className="banner-one section-margin-bottom"
        >
          <div className="camera_fakehover">
            <div className="camera_target">
              <div className="cameraCont">
                <div
                  id="cam_slide1_cur"
                  className="cameraSlide cameraSlide_1 cameracurrent"
                >
                  <img
                    src="/images/home/slide-2.jpg?1535479087400"
                    className="imgLoaded"
                  />
                </div>
              </div>
            </div>
            <div className="camera_overlayer" />
            <div className="camera_target_content">
              <div className="cameraContents">
                <div
                  id="div_cameraContent_cameraCurrent"
                  className="cameraContent cameracurrent"
                >
                  <div className="camera_caption text-center">
                    <div>
                      <div className="container">
                        <h4 className="">Welcome to NativeScript Training</h4>
                        <h1 className="">
                          We Help Businesses Build NativeScript Apps
                        </h1>
                        <p className="">
                          NativeScript.training provides just-in-time training
                          on NativeScript all over the world, on-site at your
                          office, and remotely. <br />We also provide
                          consulting, mentoring &amp; training options.
                        </p>
                        <a href="/training" className="theme-solid-button">
                          Training
                        </a>
                        <a href="/courses" className="theme-line-button">
                          Courses
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-feature section-margin-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xs-12 float-right">
                <h2>We will give you future</h2>
                <div className="mark-text">
                  It highlights some of the lessons learned and the successes of
                  the England national pupil data story; by sharing England’s
                  story we hope that policymakers in other countries where a
                  national pupil-level data{' '}
                </div>
                <p>
                  Learn about Superintendent Torlakson's initiatives to improve
                  schools, including encouraging schools to become "Safe
                  Havens," promoting teaching, and leading the charge to improve
                  career technical education and Science Technology Engineering
                  and Math (STEM) education.
                </p>
                <a
                  href="#"
                  className="wow fadeInUp animated theme-solid-button theme-button"
                >
                  Know more future
                </a>
              </div>
              <div className="col-md-6 col-xs-12">
                <img src="/images/home/shape1.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <HomeFeatures
          offeringsConnection={this.props.data.offeringsConnection}
        />

        <div className="course-search-form shape-style" />
      </div>
    );
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    #get offerings
    offeringsConnection: allOfferingsJson {
      edges {
        node {
          id
          order
          title
          img
          summary
        }
      }
    }
  }
`;

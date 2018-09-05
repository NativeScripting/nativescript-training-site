import * as React from 'react';
import Link from 'gatsby-link';
import '../css/index.css';
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
                    src="/images/home/slide-1.jpg?1535479087400"
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
                        <Link className="theme-solid-button" to="/training">
                          Training
                        </Link>

                        <Link className="theme-line-button" to="/courses">
                          Courses
                        </Link>
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
                <h2>Training and Mentoring</h2>
                <div className="mark-text">
                  NativeScript Training is a leading provider of technical
                  training and mentoring to teams building for mobile. We
                  provide guidance, code reviews and ad-hoc pair programming
                  sessions.
                </div>
                <p>
                  We provide open enrollment and private on-site training for
                  teams that are just starting out with NativeScript or
                  developers that are struggling with existing NativeScript
                  mobile apps. We can set up a remote and offline ad-hoc code
                  review to help you get over some of those humps and challenges
                  that endanger project completion.
                </p>
                <Link
                  className="wow fadeInUp animated theme-solid-button theme-button"
                  to="/contact"
                >
                  Request Code Review
                </Link>
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
          icon
          summary
        }
      }
    }
  }
`;

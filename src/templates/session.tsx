import * as React from 'react';
import { Helmet } from 'react-helmet';

import {
  SessionsJson,
  CoursesJsonConnection,
  TrainersJsonConnection,
  LocationsJsonConnection,
} from '../domain/graphql-types';

import { Session } from '../domain/models';
import { sessionFromSessionsJson } from '../domain/converters/session-types';
import {
  courseFromCoursesJsonEdge,
  trainerFromTrainersJsonEdge,
  locationFromLocationsJsonEdge,
} from '../domain/converters';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';
import { monthNameFromDate, dateFormat } from '../util/date-utils';

interface SessionTemplateProps {
  data: {
    sessionsConnection: SessionsJson;
    coursesConnection: CoursesJsonConnection;
    trainersConnection: TrainersJsonConnection;
    locationsConnection: LocationsJsonConnection;
  };
}

interface SessionTemplateState {
  session: Session;
}

class SessionTemplate extends React.Component<
  SessionTemplateProps,
  SessionTemplateState
> {
  constructor(props: SessionTemplateProps) {
    super(props);

    const courses = this.props.data.coursesConnection.edges.map(
      courseFromCoursesJsonEdge
    );
    const trainers = this.props.data.trainersConnection.edges.map(
      trainerFromTrainersJsonEdge
    );
    const sessionLocations = this.props.data.locationsConnection.edges.map(
      locationFromLocationsJsonEdge
    );

    this.state = {
      session: sessionFromSessionsJson(
        this.props.data.sessionsConnection,
        courses,
        sessionLocations,
        trainers
      ),
    };
  }

  public render() {
    const session = this.state.session;
    const title = this.props.data.sessionsConnection.title;
    const breadCrumbs = [
      { name: 'All courses', url: '/' },
      { name: 'Course details', url: '' },
    ];

    const pageTitle = `${session.title} | NativeScripting`;

    return (
      <div>
        <InnerBanner title="Schedule" subtitle="Session details" />
        <div className="our-events event-details section-margin-top section-margin-bottom">
          <div className="container">
            <div className="single-event-figure">
              <h4>{session.title}</h4>
              <div className="image-box">
                <img src="images/event/5.jpg" alt="" />
              </div>
              <div className="row">
                <div className="col-lg-9 col-md-8 col-xs-12">
                  <div className="clearfix">
                    <ul className="event-meta-data float-left">
                      <li className="date">
                        <strong>{session.dateStart.getDate()}</strong>{' '}
                        {monthNameFromDate(session.dateStart)}
                      </li>
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true" />{' '}
                        {session.location.title}
                      </li>
                      <li>
                        <i className="fa fa-clock-o" aria-hidden="true" />{' '}
                        {session.timeStart} - {session.timeEnd}
                      </li>
                    </ul>
                    <a
                      href={session.registerLink}
                      className="theme-solid-button float-right"
                    >
                      Join Now
                    </a>
                  </div>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: session.course.descriptionHtml,
                    }}
                  />
                  <div id="count" className="clearfix" />
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                  <div className="event-briefing">
                    <ul>
                      <li>
                        <span>PRICE :</span> ${session.price}
                      </li>
                      <li>
                        <span>Total Slots :</span> 12
                      </li>
                      <li>
                        <span>Start Date :</span>{' '}
                        {dateFormat(session.dateStart)}
                      </li>
                      <li>
                        <span>End Date :</span> {dateFormat(session.dateEnd)}
                      </li>
                      <li>
                        <span>Time :</span> {session.timeStart} -{' '}
                        {session.timeEnd}
                      </li>
                      <li>
                        <span>Location :</span> {session.location.title}
                      </li>
                      <li>
                        <span>ORGANIZER :</span> {session.trainer.name}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row event-venue">
                <div className="col-lg-8 col-md-9 col-xs-12">
                  <h5>Event Venue</h5>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: session.location.facilityDescHtml,
                    }}
                  />
                </div>
                <div className="col-xs-12">
                  <div className="row">
                    <div className="col-md-3 col-sm-6">
                      <ul>
                        <li>
                          <i className="fa fa-map-marker" aria-hidden="true" />
                        </li>
                        <li>{session.location.facilityTitle}</li>
                        <li>{session.location.address}</li>
                        <li>{session.location.city}</li>
                        <li>{session.location.state}</li>
                        <li>{session.location.country}</li>
                      </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <ul>
                        <li>
                          <i className="fa fa-phone" aria-hidden="true" />
                        </li>
                        <li>+1-855-656-6884</li>
                        <li>training@nuvious.com</li>
                      </ul>
                    </div>
                    <div className="col-md-6 col-xs-12">
                      <div className="map-canvas" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const sessionPageQuery = graphql`
  query SessionPageQuery($sessionId: String) {
    #get current session
    sessionsConnection: sessionsJson(id: { eq: $sessionId }) {
      id
      title
      descriptionHtml
      dateStart
      dateEnd
      timeStart
      timeEnd
      locationId
      trainerId
      courseId
      registerLink
      price
    }

    #get all courses
    coursesConnection: allCoursesJson {
      totalCount
      edges {
        node {
          id
          title
          descriptionHtml
          flavors
        }
      }
    }

    #get all trainers
    trainersConnection: allTrainersJson {
      totalCount
      edges {
        node {
          id
          name
        }
      }
    }

    #get all locations
    locationsConnection: allLocationsJson {
      totalCount
      edges {
        node {
          id
          title
          facilityTitle
          facilityDescHtml
          address
          city
          state
          country
        }
      }
    }
  }
`;

export default SessionTemplate;

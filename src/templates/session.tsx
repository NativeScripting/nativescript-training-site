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
  expired: boolean;
  distance: number;
  intervalId: number;
}

class SessionTemplate extends React.Component<
  SessionTemplateProps,
  SessionTemplateState
> {
  private countDownDate: number;

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

    const session = sessionFromSessionsJson(
      this.props.data.sessionsConnection,
      courses,
      sessionLocations,
      trainers
    );

    this.countDownDate = session.dateStart.getTime();
    const now = new Date().getTime();

    this.state = {
      session: session,
      expired: true,
      distance: this.countDownDate - now,
      intervalId: 0,
    };
  }

  public componentDidMount() {
    var intervalId = window.setInterval(() => {
      this.timerFunctionBody();
    }, 1000);
    this.setState({ intervalId: intervalId });
  }

  public componentDidUpdate() {
    if (this.state.distance < 0) {
      window.clearInterval(this.state.intervalId);
    }
  }

  public render() {
    const session = this.state.session;
    const days = Math.floor(this.state.distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (this.state.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (this.state.distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((this.state.distance % (1000 * 60)) / 1000);

    const title = this.props.data.sessionsConnection.title;
    const breadCrumbs = [
      { name: 'All courses', url: '/' },
      { name: 'Course details', url: '' },
    ];

    const pageTitle = `${session.title} | NativeScripting`;

    return (
      <div>
        <InnerBanner
          title="Schedule"
          subtitle="Session details"
          bannerImg="/images/event/banner.jpg"
        />
        <div className="our-events event-details section-margin-top section-margin-bottom">
          <div className="container">
            <div className="single-event-figure">
              <h4>{session.title}</h4>
              <div className="image-box">
                <img src="/images/event/5.jpg" alt="" />
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
                    {session.registerLink && (
                      <a
                        href={session.registerLink}
                        className="theme-solid-button float-right"
                      >
                        Register Now
                      </a>
                    )}
                  </div>

                  <p
                    dangerouslySetInnerHTML={{
                      __html: session.course.descriptionHtml,
                    }}
                  />

                  {this.state.expired && (
                    <div id="count" className="clearfix">
                      {this.state.expired && (
                        <div className="col-xs-12">
                          <div className="wrapper">
                            <span>This event has already occurred</span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {!this.state.expired && (
                    <div id="count" className="clearfix">
                      <div className="col-xs-3">
                        <div className="wrapper">
                          <h3>{days}</h3> <span>days</span>
                        </div>
                      </div>{' '}
                      <div className="col-xs-3">
                        <div className="wrapper">
                          <h3>{hours}</h3> <span>Hours</span>
                        </div>
                      </div>{' '}
                      <div className="col-xs-3">
                        <div className="wrapper">
                          <h3>{minutes}</h3> <span>Minutes</span>
                        </div>
                      </div>
                      <div className="col-xs-3">
                        <div className="wrapper">
                          <h3>{seconds}</h3> <span>Seconds</span>
                        </div>
                      </div>
                    </div>
                  )}
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

  private timerFunctionBody() {
    const now = new Date().getTime();
    // Find the distance between now an the count down date
    const distance = this.countDownDate - now;
    if (distance < 0) {
      this.setState({ expired: true, distance: distance });
    } else {
      this.setState({ expired: false, distance: distance });
    }
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

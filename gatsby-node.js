const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allOfferingsJson {
          totalCount
          edges {
            node {
              id
              title
            }
          }
        }

        allCoursesJson {
          totalCount
          edges {
            node {
              id
              title
              flavors
            }
          }
        }

        allSessionsJson {
          totalCount
          edges {
            node {
              id
              title
            }
          }
        }

        allTrainersJson {
          totalCount
          edges {
            node {
              id
              name
            }
          }
        }

        allLocationsJson {
          totalCount
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `).then(result => {
      const offerings = result.data.allOfferingsJson.edges;
      const courses = result.data.allCoursesJson.edges;
      const trainers = result.data.allTrainersJson.edges;
      const locations = result.data.allLocationsJson.edges;
      const sessions = result.data.allSessionsJson.edges;

      createOfferingPages(createPage, offerings);
      createCoursePages(createPage, courses);
      createSessionPages(createPage, sessions);

      resolve('done');
    });
  });
};

const createOfferingPages = (createPage, offerings) => {
  const offeringTemplate = path.resolve(`src/templates/offering.tsx`);

  offerings.forEach(o => {
    const offering = o.node;
    createPage({
      path: `/training/${offering.id}`,
      component: offeringTemplate,
      context: {
        offeringId: offering.id,
      },
    });
  });
};

const createCoursePages = (createPage, courses) => {
  const courseTemplate = path.resolve(`src/templates/course.tsx`);

  courses.forEach(o => {
    const course = o.node;
    createPage({
      path: `/course/${course.id}`,
      component: courseTemplate,
      context: {
        courseId: course.id,
      },
    });
  });
};

const createSessionPages = (createPage, sessions) => {
  const sessionTemplate = path.resolve(`src/templates/session.tsx`);

  sessions.forEach(o => {
    const session = o.node;
    createPage({
      path: `/session/${session.id}`,
      component: sessionTemplate,
      context: {
        sessionId: session.id,
      },
    });
  });
};

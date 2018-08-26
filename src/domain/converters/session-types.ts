import { SessionsJsonEdge, SessionsJson } from '../graphql-types';
import { Session, Course, SessionLocation, Trainer, getCourseByCourseId, getSessionLocaitonBySessionLocationId, getTrainerByTrainerId } from '../models';

export function sessionFromSessionsJsonEdge(
  edge: SessionsJsonEdge,
  courses: Course[],
  locations: SessionLocation[],
  trainers: Trainer[]
): Session {
  const n = edge.node;
  return sessionFromSessionsJson(n, courses, locations, trainers);
}

export function sessionFromSessionsJson(
  s: SessionsJson,
  courses: Course[],
  locations: SessionLocation[],
  trainers: Trainer[]
): Session {
  const session: Session = {
    id: s.id,
    order: s.order,
    registerLink: s.registerLink,
    title: s.title,
    descriptionHtml: s.descriptionHtml,
    dateStart: new Date(s.dateStart),
    dateEnd: new Date(s.dateEnd),

    course: getCourseByCourseId(s.courseId, courses),
    location: getSessionLocaitonBySessionLocationId(s.locationId, locations),
    trainer: getTrainerByTrainerId(s.trainerId, trainers)

  };
  return session;
}


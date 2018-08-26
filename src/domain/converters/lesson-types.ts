import { topics_2 } from '../graphql-types';
import { Lesson } from '../models';

export function lessonFromTopics_2(l: topics_2): Lesson {
  return {
    id: l.id,
    title: l.title,
  };
}

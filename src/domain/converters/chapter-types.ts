import { curriculum_2 } from '../graphql-types';
import { Chapter } from '../models';
import { lessonFromTopics_2 } from './lesson-types';

export function chapterFromCurriculum_2(c: curriculum_2): Chapter {
  return {
    id: c.id,
    title: c.title,
    description: c.description,
    labsHtml: c.labsHtml,
    topics: c.topics.map(l => lessonFromTopics_2(l)),
  };
}

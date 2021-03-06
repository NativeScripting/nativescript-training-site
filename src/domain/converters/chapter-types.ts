import { curriculum_2 } from '../graphql-types';
import { Chapter } from '../models';

export function chapterFromCurriculum_2(c: curriculum_2): Chapter {
  return {
    id: c.id,
    title: c.title,
    description: c.description,
    lessonsHtml: c.lessonsHtml,
    labsHtml: c.labsHtml,
  };
}

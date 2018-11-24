import { defaultArray } from '../core';
import { CoursesJsonEdge, CoursesJson } from '../graphql-types';
import { Course, asCourseFlavorType } from '../models';
import { chapterFromCurriculum_2 } from './chapter-types';
import { asCourseTypeType } from '../models/course-type.model';

export function courseFromCoursesJsonEdge(edge: CoursesJsonEdge): Course {
  const c = edge.node;
  return courseFromCoursesJson(c);
}

export function courseFromCoursesJson(c: CoursesJson): Course {
  const course: Course = {
    id: c.id,
    code: c.code,
    length: c.length,
    version: c.version,
    price: c.price,
    label: c.label,
    order: c.order,
    courseType: asCourseTypeType(c.courseType),
    title: c.title,
    subtitle: c.subtitle,
    programFile: c.programFile,
    descriptionHtml: c.descriptionHtml,
    prerequisites: c.prerequisites,
    audience: defaultArray(c.audience).map(a => a.title),
    products: defaultArray(c.products).map(p => p.title),
    curriculum: defaultArray(c.curriculum).map(chapterFromCurriculum_2),
    flavors: defaultArray(c.flavors).map(asCourseFlavorType),
  };

  return course;
}

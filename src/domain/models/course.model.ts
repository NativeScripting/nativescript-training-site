import { Chapter } from './chapter.model';
import { CourseFlavorType } from './course-flavor.model';
import { CourseTypeType } from './course-type.model';



export interface Course {
  id: string;
  code: string;
  version: string;
  length: string;
  price: number;
  flavors: CourseFlavorType[];
  label: string;
  title: string;
  order: number;
  courseType: CourseTypeType;
  subtitle: string;
  programFile: string;
  descriptionHtml: string;
  prerequisites: string;
  products: string[];
  audience: string[];
  curriculum: Chapter[];
}

export function getCourseByCourseId(
  courseId: string,
  courses: Course[]
): Course {
  return courses.find(c => c.id === courseId);
}

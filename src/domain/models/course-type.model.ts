export type CourseTypeType = 'workshop' | 'course';

export function isWorkshopCourseType<K extends string>(
  ft: CourseTypeType | K
): ft is 'workshop' {
  return ft === 'workshop';
}

export function isCourseCourseType<K extends string>(
  ft: CourseTypeType | K
): ft is 'course' {
  return ft === 'course';
}

export function asCourseTypeType<K extends string>(
  str: CourseTypeType | K
): CourseTypeType {
  return str as CourseTypeType;
}

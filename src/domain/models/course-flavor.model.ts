export type CourseFlavorType = 'Core' | 'Angular';

export function isCoreCourseFlavor<K extends string>(
  ft: CourseFlavorType | K
): ft is 'Core' {
  return ft === 'Core';
}

export function isAngularCourseFlavor<K extends string>(
  ft: CourseFlavorType | K
): ft is 'Angular' {
  return ft === 'Angular';
}

export function asCourseFlavorType<K extends string>(
  str: CourseFlavorType | K
): CourseFlavorType {
  return str as CourseFlavorType;
}

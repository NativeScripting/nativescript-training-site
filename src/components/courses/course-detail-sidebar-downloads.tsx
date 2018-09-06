import * as React from 'react';
import { Course } from '../../domain/models';

interface CourseDetailSidebarDownloadsBoxProps {
  course: Course;
}

export const CourseDetailSidebarDownloadsBox: React.StatelessComponent<
  CourseDetailSidebarDownloadsBoxProps
> = (props: CourseDetailSidebarDownloadsBoxProps) => {
  const programFileHref = `/files/${props.course.programFile}`;

  return (
    <div>
      {props.course.programFile && (
        <div className="sidebar-download">
          <h5>Downloads</h5>
          <ul>
            <li>
              <a href={programFileHref} target="_blank">
                <i className="fa fa-file-pdf-o" aria-hidden="true" />
                This Course Program
              </a>
            </li>
            <li>
              <a href="/files/all-courses.pdf" target="_blank">
                <i className="fa fa-file-pdf-o" aria-hidden="true" /> All Course
                Programs
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

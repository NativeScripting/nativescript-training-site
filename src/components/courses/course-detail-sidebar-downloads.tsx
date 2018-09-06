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
          <ul>
            <li>
              <a href={programFileHref} target="_blank">
                <i className="fa fa-file-pdf-o" aria-hidden="true" /> Download
                Program
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

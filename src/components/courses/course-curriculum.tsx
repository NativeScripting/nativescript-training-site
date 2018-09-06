import * as React from 'react';
import { Course } from '../../domain/models';
import { CourseCurriculumChapter } from './course-curriculum-chapter';

interface CourseCurriculumProps {
  course: Course;
}

export const CourseCurriculum: React.StatelessComponent<
  CourseCurriculumProps
> = (props: CourseCurriculumProps) => {
  const course = props.course;

  const rowsHtml = course.curriculum.map((c, i) => {
    return <CourseCurriculumChapter key={i} chapter={c} idx={i} />;
  });

  return (
    <div className="panel">
      <div className="panel-heading active-panel">
        <h5 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
            Curriculum
          </a>
        </h5>
      </div>
      <div id="collapse1" className="panel-collapse collapse in">
        <div className="panel-body">
          <div className="course-preview-text">
            <img src="/images/course/22.jpg" alt="" />

            {rowsHtml}
          </div>
        </div>
      </div>
    </div>
  );
};

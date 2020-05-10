import * as React from 'react';
import { Chapter } from '../../domain/models';

interface CourseCurriculumChapterProps {
  chapter: Chapter;
  idx: number;
}

export const CourseCurriculumChapter: React.StatelessComponent<
  CourseCurriculumChapterProps
> = (props: CourseCurriculumChapterProps) => {
  const chapter = props.chapter;

  return (
    <div>
      <div className="course-figure">
        <h5>
          Chapter {props.idx + 1}: {chapter.title}
        </h5>
        <p>{chapter.description} </p>

        <div dangerouslySetInnerHTML={{ __html: chapter.lessonsHtml }} />
      </div>
    </div>
  );
};

import * as React from 'react';
import { Chapter } from '../../domain/models';

interface CourseCurriculumLabsProps {
  chapter: Chapter;
}

export const CourseCurriculumLabs: React.StatelessComponent<
  CourseCurriculumLabsProps
> = (props: CourseCurriculumLabsProps) => {
  const chapter = props.chapter;

  return (
    <div className="temp-component">
      <h4>Hands on Lab</h4>
      <div dangerouslySetInnerHTML={{ __html: chapter.labsHtml }}></div>
    </div>
  );
};

import * as React from 'react';
import { Chapter } from '../../domain/models';

interface CourseCurriculumLessonsProps {
  chapter: Chapter;
}

export const CourseCurriculumLessons: React.StatelessComponent<
  CourseCurriculumLessonsProps
> = (props: CourseCurriculumLessonsProps) => {
  const chapter = props.chapter;

  return (
    <div>
      <div className="single-course">
        <ul>
          <li>Topic</li>
          <li>
            <a
              data-fancybox
              href="https://www.youtube.com/embed/r-AuLm7S3XE?rel=0&amshowinfo=0"
              className="play-button"
            >
              Preview
            </a>
          </li>
          <li>30 Minute</li>
        </ul>
        <p>
          The Australian Qualifications Framework (AQF) provides the framework
          for qualifications in the school, vocational education and training
          (VET) and higher education sectors in Australia.
        </p>
      </div>
    </div>
  );
};

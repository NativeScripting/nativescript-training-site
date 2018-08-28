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

  const lessonsHtml = chapter.topics.map((c, i) => {
    return (
      <div key={i} className="single-course">
        <ul>
          <li>{c.title}</li>
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
    );
  });

  return (
    <div>
      <div className="course-figure">
        <h5>
          Chapter {props.idx + 1}: {chapter.title}
        </h5>
        <p>{chapter.description} </p>

        {lessonsHtml}
      </div>
    </div>
  );
};

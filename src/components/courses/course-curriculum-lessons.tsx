import * as React from 'react';
import { Chapter } from '../../domain/models';


interface CourseCurriculumLessonsProps {
    chapter: Chapter;
}

export const CourseCurriculumLessons: React.StatelessComponent<
    CourseCurriculumLessonsProps
    > = (props: CourseCurriculumLessonsProps) => {
        const chapter = props.chapter;

        const rowsHtml = chapter.topics.map((c, i) => {
            return (
                <li key={i}>
                    {c.title}
                </li>
            );
        });

        return (
            <div className="temp-component">
                <h4>Lecture Topics</h4>
                <ul>
                    {rowsHtml}
                </ul>
            </div>
        );
    };

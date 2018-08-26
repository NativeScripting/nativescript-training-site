import * as React from 'react';
import { Chapter } from '../../domain/models';
import { CourseCurriculumLabs } from './course-curriculum-labs';
import { CourseCurriculumLessons } from './course-curriculum-lessons';


interface CourseCurriculumChapterProps {
    chapter: Chapter;
    idx: number;
}

export const CourseCurriculumChapter: React.StatelessComponent<
    CourseCurriculumChapterProps
    > = (props: CourseCurriculumChapterProps) => {
        const chapter = props.chapter;

        return (
            <div className="temp-component">
                <h3>Chapter {props.idx + 1}: {chapter.title}</h3>
                <p>{chapter.description}</p>

                <CourseCurriculumLessons chapter={chapter} />
                <CourseCurriculumLabs chapter={chapter} />
            </div>
        );
    };

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
            return (
                <li key={i}>
                    <CourseCurriculumChapter chapter={c} idx={i} />
                </li>
            );
        });

        return (
            <div className="temp-component">
                <h2>Detailed Class Agenda</h2>
                <ul>
                    {rowsHtml}
                </ul>
            </div>
        );
    };

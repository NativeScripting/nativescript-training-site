import * as React from 'react';
import { Course } from '../../domain/models';


interface CourseProductsCoveredProps {
    course: Course;
}

export const CourseProductsCovered: React.StatelessComponent<
    CourseProductsCoveredProps
    > = (props: CourseProductsCoveredProps) => {
        const course = props.course;

        const rowsHtml = course.products.map((c, i) => {
            return (
                <li key={i}>
                    {c}
                </li>
            );
        });

        return (
            <div className="temp-component">
                <h2>Products Covered</h2>
                <ul>
                    {rowsHtml}
                </ul>
            </div>
        );
    };

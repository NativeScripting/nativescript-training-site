import * as React from 'react';
import { Course } from '../../domain/models';


interface CoursePrerequisitesProps {
    course: Course;
}

export const CoursePrerequisites: React.StatelessComponent<
    CoursePrerequisitesProps
    > = (props: CoursePrerequisitesProps) => {
        const course = props.course;

        return (
            <div className="temp-component">

                <h2>Student Prerequisites</h2>

                <p>
                    {course.prerequisites}
                </p>
            </div>
        );
    };

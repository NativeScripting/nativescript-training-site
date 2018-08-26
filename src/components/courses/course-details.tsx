import * as React from 'react';
import { Course } from '../../domain/models';


interface CourseDetailsProps {
    course: Course;
}

export const CourseDetails: React.StatelessComponent<
    CourseDetailsProps
    > = (props: CourseDetailsProps) => {
        const course = props.course;

        return (
            <div className="temp-component">

                <h2>Course Details</h2>

                <table>
                    <tbody>
                        <tr>
                            <td>Course Code</td>
                            <td>{course.code}</td>
                        </tr>
                        <tr>
                            <td>Course Version</td>
                            <td>{course.version}</td>
                        </tr>
                        <tr>
                            <td>Course Length</td>
                            <td>{course.length}</td>
                        </tr>
                        <tr>
                            <td>List Price</td>
                            <td>{course.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    };

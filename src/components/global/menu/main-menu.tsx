import * as React from 'react';
import { Offering, Course } from '../../../domain/models';
import { trainingUrlFromId, courseUrlFromId } from '../../../util/urls';

interface MainMenuProps {
    offerings: Offering[];
    courses: Course[];
}

export const MainMenu: React.StatelessComponent<MainMenuProps> = (
    props: MainMenuProps
) => {

    const offeringsHtml = props.offerings.map((o, i) => {
        return (
            <li key={i}>
                <a href={trainingUrlFromId(o.id)}>{o.title}</a>
            </li>
        );
    });

    const coursesHtml = props.courses.map((o, i) => {
        return (
            <li key={i}>
                <a href={courseUrlFromId(o.id)}>{o.title}</a>
            </li>
        );
    });

    return (
        <div className="temp-component">
            <ul>
                <li>
                    <a href="/training">Training</a>
                    <ul>{offeringsHtml}</ul>
                </li>
                <li>
                    <a href="/courses">Courses</a>
                    <ul>{coursesHtml}</ul>
                </li>
                <li><a href="/schedule">Schedule</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
        </div>
    );
};

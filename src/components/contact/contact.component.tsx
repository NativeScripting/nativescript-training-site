import * as React from 'react';
import { Course } from '../../domain/models';
import { courseUrlFromId } from '../../util/urls';

interface ContactComponentProps {

}

export const ContactComponent: React.StatelessComponent<
    ContactComponentProps
    > = (props: ContactComponentProps) => {

        return (
            <div className="temp-component">
                522 F St. NE<br />
                Washington, DC 20002<br />
                United States<br />
                <br /><br />
                Phone: +1-855-656-6884
            </div>
        );
    };

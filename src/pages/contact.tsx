import * as React from 'react';
import { ContactComponent } from '../components/contact/contact.component';

interface ContactPageProps {

}

export default class extends React.Component<ContactPageProps, any> {
    constructor(props: ContactPageProps) {
        super(props);
    }

    public render() {

        return (
            <div>
                <h1>Contact</h1>

                <h2>NativeScript Training</h2>

                <ContactComponent />
            </div>
        );
    }
}


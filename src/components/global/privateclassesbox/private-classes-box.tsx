import * as React from 'react';


interface PrivateClassesBoxProps {

}

export const PrivateClassesBox: React.StatelessComponent<
    PrivateClassesBoxProps
    > = (props: PrivateClassesBoxProps) => {

        return (
            <div className="temp-component">

                <h2>Private Classes</h2>

                <p>
                    Private on-site courses provide a more economical and convenient! training solution for companies with 5 or more students. Learn how you can have one of our instructor  experts deliver a NativeScript Training class as a <a href="/training/private">private on-site class</a> at your location.
                </p>
            </div>
        );
    };

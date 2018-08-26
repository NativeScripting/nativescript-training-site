import * as React from 'react';

interface HeaderProps {
    siteName: string;
}

export const Header: React.StatelessComponent<HeaderProps> = (
    props: HeaderProps
) => {

    return (
        <div className="temp-component">
            <h1><a href="/">{props.siteName}</a></h1>
        </div>
    );
};

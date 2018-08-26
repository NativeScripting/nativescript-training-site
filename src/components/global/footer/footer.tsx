import * as React from 'react';

interface FooterProps {
    siteName: string;
}

export const Footer: React.StatelessComponent<FooterProps> = (
    props: FooterProps
) => {

    return (
        <div className="temp-component">
            <a href="/">{props.siteName}</a>

            <h2>Partners</h2>
            <div>nStudio</div>
            <div>Progress</div>
        </div>
    );
};

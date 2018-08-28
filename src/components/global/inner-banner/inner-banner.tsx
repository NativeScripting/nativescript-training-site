import * as React from 'react';

interface InnerBannerProps {
  title: string;
  subtitle: string;
}

export const InnerBanner: React.StatelessComponent<InnerBannerProps> = (
  props: InnerBannerProps
) => {
  return (
    <div className="theme-inner-banner">
      <div className="opacity">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a>/</a>
          </li>
          <li>{props.title}</li>
        </ul>
        <h2>{props.subtitle}</h2>
      </div>
    </div>
  );
};

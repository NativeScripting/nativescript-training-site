import * as React from 'react';

interface InnerBannerProps {
  title: string;
  subtitle: string;
  bannerImg?: string;
}

export const InnerBanner: React.StatelessComponent<InnerBannerProps> = (
  props: InnerBannerProps
) => {
  let bannerImgBck = '/images/home/inner-banner.jpg';
  if (props.bannerImg) {
    bannerImgBck = props.bannerImg;
  }

  return (
    <div
      className="theme-inner-banner"
      style={{
        background: `url(${bannerImgBck}) no-repeat center`,
      }}
    >
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

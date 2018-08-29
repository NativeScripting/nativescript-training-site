import * as React from 'react';

interface NewsletterBannerProps {}

export const NewsletterBanner: React.StatelessComponent<
  NewsletterBannerProps
> = (props: NewsletterBannerProps) => {
  return (
    <div className="newsletter-banner">
      <div className="container">
        <h5 className="float-left">Sign up for Subscribe Newsletter</h5>
        <form action="#" className="float-right">
          <input type="email" placeholder="Your Email" />
          <button className="theme-solid-button theme-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

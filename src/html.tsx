/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from 'react';
import Helmet from 'react-helmet';

// Load production style
let styles: string;
/*
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require('!raw-loader!../public/styles.css');
  } catch (err) {
    console.log(err);
  }
}
*/

styles = require('!raw-loader!./css/styles.css');

interface HtmlProps {
  body: any;
  postBodyComponents: any;
  headComponents: any;
}

// Use `module.exports` to be compliante with `webpack-require` import method
export default class extends React.Component<HtmlProps, void> {
  render() {
    const head = Helmet.rewind();

    const css =
      process.env.NODE_ENV === `production` ? (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      ) : null;

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}
          {head.title.toComponent()}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/images/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#603cba" />
          <meta
            name="msapplication-config"
            content="/images/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />

          <link
            rel="image_src"
            href="https://nativescripting.com/img/course_banners/nativescript_core_ng_course_banner_bg.png"
          />
          <meta
            name="og:image"
            content="https://nativescripting.com/img/course_banners/nativescript_core_ng_course_banner_bg.png"
          />
          <meta
            name="twitter:image"
            content="https://nativescripting.com/img/course_banners/nativescript_core_ng_course_banner_bg.png"
          />
          <meta
            name="google-site-verification"
            content="y95Ku2hQnzaNGEeozgrk9QQZslcy_M_DUtpypkd6hw4"
          />

          <link rel="stylesheet" type="text/css" href="/css/style.css" />
          <link rel="stylesheet" type="text/css" href="/css/responsive.css" />

          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}

          <script
            dangerouslySetInnerHTML={{
              __html: `

                            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `

                            `,
            }}
          />
        </body>
      </html>
    );
  }
}

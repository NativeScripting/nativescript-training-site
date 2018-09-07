import * as React from 'react';
import { Helmet } from 'react-helmet';

function NotFoundPage() {
  const pageTitle = `Page not Found | NativeScript Training`;

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Take a look at <a href="/courses">our courses</a>.
      </p>
    </div>
  );
}

export default NotFoundPage;

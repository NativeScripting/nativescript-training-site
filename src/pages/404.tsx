import * as React from 'react';
import { Helmet } from 'react-helmet';
import { MainLayout } from '../layouts/MainLayout';

function NotFoundPage() {
  const pageTitle = `Page not Found | NativeScript Training`;

  return (
    <MainLayout>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Take a look at <a href="/courses">our courses</a>.
      </p>
    </MainLayout>
  );
}

export default NotFoundPage;

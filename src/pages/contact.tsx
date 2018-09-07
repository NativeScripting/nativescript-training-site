import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ContactComponent } from '../components/contact/contact.component';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';

interface ContactPageProps {}

export default class extends React.Component<ContactPageProps, any> {
  constructor(props: ContactPageProps) {
    super(props);
  }

  public render() {
    const pageTitle = `Contact Us | NativeScript Training`;

    return (
      <div>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <InnerBanner
          title="Contact Us"
          subtitle="Get in Touch. We'll get back to you within 24 hours."
          bannerImg="/images/contact/banner.jpg"
        />
        <ContactComponent />
      </div>
    );
  }
}

import * as React from 'react';
import { ContactComponent } from '../components/contact/contact.component';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';

interface ContactPageProps {}

export default class extends React.Component<ContactPageProps, any> {
  constructor(props: ContactPageProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        <InnerBanner
          title="Contact Us"
          subtitle="Get in Touch. We'll get back to you within 24 hours."
        />
        <ContactComponent />
      </div>
    );
  }
}

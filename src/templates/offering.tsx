import * as React from 'react';
import { Helmet } from 'react-helmet';

import { OfferingsJson } from '../domain/graphql-types';

import { Offering } from '../domain/models';
import { offeringFromOfferingsJson } from '../domain/converters';
import { InnerBanner } from '../components/global/inner-banner/inner-banner';
import { OfferingDetailSection } from '../components/offerings/offering-detail-section';
import { SidebarPhone } from '../components/global/sidebar-phone/sidebar-phone';
import { OfferingDetailSidebarPrivateClassesBox } from '../components/offerings/offering-detail-sidebar-private';
import { OfferingDetailSidebarOnsiteRequestBox } from '../components/offerings/offering-detail-sidebar-onsite-request';
import { OfferingDetailOnsiteRequestForm } from '../components/offerings/offering-detail-onsite-request';

interface OfferingTemplateProps {
  data: {
    offeringsConnection: OfferingsJson;
  };
}

interface OfferingTemplateState {
  offering: Offering;
}

class OfferingTemplate extends React.Component<
  OfferingTemplateProps,
  OfferingTemplateState
> {
  constructor(props: OfferingTemplateProps) {
    super(props);

    this.state = {
      offering: offeringFromOfferingsJson(this.props.data.offeringsConnection),
    };
  }

  public render() {
    const offering = this.state.offering;
    const pageTitle = `${offering.title} | NativeScripting`;

    const sectionsHtml = offering.sections.map((s, i) => {
      return <OfferingDetailSection key={i} section={s} />;
    });

    return (
      <div>
        <InnerBanner title="Training" subtitle={offering.title} />
        <div className="blog-list section-margin-top section-margin-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-xs-12 blog-details-content">
                <div className="single-blog-list">
                  <div className="image">
                    <img src="/images/blog/10.jpg" alt="" />
                  </div>
                  <ul className="post-info">
                    <li>20 March 2017</li>
                    <li>By Admin R</li>
                    <li>in English</li>
                  </ul>
                  <h3>The Experience Of Studying In The USA</h3>
                  <p
                    className="bold-text"
                    dangerouslySetInnerHTML={{ __html: offering.introHtml }}
                  />

                  <p
                    dangerouslySetInnerHTML={{
                      __html: offering.descriptionHtml,
                    }}
                  />
                  {sectionsHtml}

                  <ul className="text-list">
                    <li>Money for your future</li>
                    <li>Do you deserve a vacation?</li>
                    <li>
                      We partner with startups and companies, small and large
                    </li>
                    <li>
                      Launching an attractive and scalable website quickly and
                      affordably is important for modern{' '}
                    </li>
                  </ul>
                </div>

                {offering.id === 'private' && (
                  <OfferingDetailOnsiteRequestForm />
                )}
              </div>

              <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 theme-sidebar">
                <SidebarPhone />
                {offering.id !== 'private' && (
                  <OfferingDetailSidebarPrivateClassesBox />
                )}
                {offering.id === 'private' && (
                  <OfferingDetailSidebarOnsiteRequestBox />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const offeringPageQuery = graphql`
  query OfferingPageQuery($offeringId: String) {
    #get current offering
    offeringsConnection: offeringsJson(id: { eq: $offeringId }) {
      id
      title
      img
      summary
      introHtml
      descriptionHtml
      sections {
        id
        title
        contentHtml
      }
    }
  }
`;

export default OfferingTemplate;

import * as React from 'react';
import { OfferingsJsonConnection } from '../../domain/graphql-types';
import { offeringFromOfferingsJsonEdge } from '../../domain/converters';
import { trainingUrlFromId } from '../../util/urls';

interface HomeFeaturesProps {
  offeringsConnection: OfferingsJsonConnection;
}

export const HomeFeatures: React.StatelessComponent<HomeFeaturesProps> = (
  props: HomeFeaturesProps
) => {
  const offerings = props.offeringsConnection.edges.map(
    offeringFromOfferingsJsonEdge
  );

  const homeFeaturesHtml = offerings
    .filter(o => o.id !== 'discounts')
    .map((o, i) => {
      return (
        <div key={i} className="col-md-4 col-sm-6 col-xs-12">
          <div className="feature-block">
            <div className="wrapper">
              <div className="icon">
                <i className={o.icon} />
              </div>
              <h5>
                <a href={trainingUrlFromId(o.id)}>{o.title}</a>
              </h5>
              <p>{o.summary}</p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="our-feature-course-one section-margin-top">
      <div className="container">
        <div className="row">{homeFeaturesHtml}</div>
      </div>
    </div>
  );
};

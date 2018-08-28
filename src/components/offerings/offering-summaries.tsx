import * as React from 'react';
import { Offering } from '../../domain/models';
import { OfferingSummary } from './offering-summary';
import { trainingUrlFromId } from '../../util/urls';

interface OfferingSummariesProps {
  offerings: Offering[];
}

export const OfferingSummaries: React.StatelessComponent<
  OfferingSummariesProps
> = (props: OfferingSummariesProps) => {
  const offerings = props.offerings;

  const html = offerings.map((o, i) => {
    if (o.summary) {
      return <OfferingSummary key={i} index={i + 1} offering={o} />;
    } else {
      return null;
    }
  });

  return (
    <div className="blog-grid section-margin-top">
      <div className="container">
        <div className="row">{html}</div>
      </div>
    </div>
  );
};

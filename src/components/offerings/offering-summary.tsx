import * as React from 'react';
import { Offering } from '../../domain/models';

interface OfferingSummaryProps {
  offering: Offering;
}

export const OfferingSummary: React.StatelessComponent<OfferingSummaryProps> = (
  props: OfferingSummaryProps
) => {
  const offering = props.offering;

  return (
    <div>
      <h2>{offering.title}</h2>
      <p>{offering.summary}</p>
    </div>
  );
};

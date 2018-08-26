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
        return (
          <li key={i}>
            <OfferingSummary offering={o} />
            <a href={trainingUrlFromId(o.id)}>Read more...</a>
          </li>
        );
      } else {
        return null;
      }
    });

    return (
      <div className="temp-component">
        <ul>{html}</ul>
      </div>
    );
  };

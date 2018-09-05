import * as React from 'react';
import { Offering } from '../../domain/models';
import { trainingUrlFromId } from '../../util/urls';

interface OfferingSummaryProps {
  offering: Offering;
  index: number;
}

export const OfferingSummary: React.StatelessComponent<OfferingSummaryProps> = (
  props: OfferingSummaryProps
) => {
  const offering = props.offering;

  return (
    <div className="col-md-4 col-xs-6">
      <div className="single-blog-grid hover-effect-one">
        <div className="image">
          <img src={offering.imgSmall} alt="" />
          <div className="title">
            <h5>
              <a href={trainingUrlFromId(offering.id)}>{offering.title}</a>
            </h5>
            <div className="number">0{props.index}</div>
          </div>
        </div>
        <div className="text">
          <h5>
            <a href={trainingUrlFromId(offering.id)}>{offering.title}</a>
          </h5>
          <p>
            <a href={trainingUrlFromId(offering.id)}>{offering.summary}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

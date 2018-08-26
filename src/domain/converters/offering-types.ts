import { OfferingsJsonEdge, OfferingsJson } from '../graphql-types';
import { Offering } from '../models/offering.model';
import { defaultArray } from '../core';
import { offeringSectionFromOfferingSections_2 } from './offering-section-types';

export function offeringFromOfferingsJsonEdge(
  edge: OfferingsJsonEdge
): Offering {
  const n = edge.node;
  return offeringFromOfferingsJson(n);
}

export function offeringFromOfferingsJson(o: OfferingsJson): Offering {
  const offering: Offering = {
    id: o.id,
    title: o.title,
    order: o.order,
    introHtml: o.introHtml,
    descriptionHtml: o.descriptionHtml,
    img: o.img,
    summary: o.summary,
    sections: defaultArray(o.sections).map(
      offeringSectionFromOfferingSections_2
    ),
  };
  return offering;
}

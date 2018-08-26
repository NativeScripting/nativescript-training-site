import { sections_2 } from '../graphql-types';
import { OfferingSection } from '../models/offering-section.model';

export function offeringSectionFromOfferingSections_2(
  s: sections_2
): OfferingSection {
  return {
    id: s.id,
    title: s.title,
    contentHtml: s.contentHtml,
  };
}

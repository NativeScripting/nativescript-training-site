import { OfferingSection } from './offering-section.model';

export interface Offering {
  id: string;
  order: number;
  img: string;
  summary: string;
  title: string;
  introHtml: string;
  descriptionHtml: string;
  sections: OfferingSection[];
}

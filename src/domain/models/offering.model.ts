import { OfferingSection } from './offering-section.model';

export interface Offering {
  id: string;
  order: number;
  img: string;
  imgSmall: string;
  icon: string;
  summary: string;
  title: string;
  subtitle: string;
  introHtml: string;
  descriptionHtml: string;
  sections: OfferingSection[];
}

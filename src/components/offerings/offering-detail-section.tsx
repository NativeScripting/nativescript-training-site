import * as React from 'react';
import { OfferingSection } from '../../domain/models';

interface OfferingDetailSectionProps {
  section: OfferingSection;
}

export const OfferingDetailSection: React.StatelessComponent<
  OfferingDetailSectionProps
> = (props: OfferingDetailSectionProps) => {
  const section = props.section;

  return (
    <div>
      <h3 className="sub-heading">{section.title}</h3>
      <p
        dangerouslySetInnerHTML={{
          __html: section.contentHtml,
        }}
      />
    </div>
  );
};

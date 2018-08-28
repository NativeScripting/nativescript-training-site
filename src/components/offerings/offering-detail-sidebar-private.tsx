import * as React from 'react';

interface OfferingDetailSidebarPrivateClassesProps {}

export const OfferingDetailSidebarPrivateClassesBox: React.StatelessComponent<
  OfferingDetailSidebarPrivateClassesProps
> = (props: OfferingDetailSidebarPrivateClassesProps) => {
  return (
    <div className="sidebar-widget sidebar-search sidebar-list">
      <h5>We also have private onsite training options!</h5>
      <p>
        Have a big group? All of the courses we offer as open enrollment
        hands-on classes can be brought to the convenience and privacy of your
        organization. This is ideal for those who have a large group to get up
        to speed.
      </p>
      <br />
      <p>
        <ul>
          <li>
            <a href="/training/private">
              Learn more about our private onsite training options
            </a>
          </li>
        </ul>
      </p>
    </div>
  );
};

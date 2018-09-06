import * as React from 'react';

interface SidebarPhoneProps {}

export const SidebarPhone: React.StatelessComponent<SidebarPhoneProps> = (
  props: SidebarPhoneProps
) => {
  return (
    <div className="sidebar-widget sidebar-search">
      <h5>Still have questions?</h5>
      <p>Give us a call: +1-855-656-6884</p>
      <p>
        Email us:{' '}
        <a href="mailto:training@nuvious.com?cc=alex@nuvious.com&subject=NativeScript%20Training%20Email">
          training@nuvious.com
        </a>
      </p>
    </div>
  );
};

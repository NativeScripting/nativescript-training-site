import * as React from 'react';

interface SidebarPhoneProps {}

export const SidebarPhone: React.StatelessComponent<SidebarPhoneProps> = (
  props: SidebarPhoneProps
) => {
  return (
    <div className="sidebar-widget sidebar-search">
      <h5>Still have questions?</h5>
      <p>Give us a call: +1-855-656-6884</p>
      <p>Email us: training@nuvious.com</p>
    </div>
  );
};

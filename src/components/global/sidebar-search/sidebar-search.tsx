import * as React from 'react';

interface SidebarSearchProps {}

export const SidebarSearch: React.StatelessComponent<SidebarSearchProps> = (
  props: SidebarSearchProps
) => {
  return (
    <div className="sidebar-widget sidebar-search">
      <h5>Search</h5>
      <form action="#">
        <input type="text" placeholder="Type hit" />
        <button>
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

import * as React from 'react';

interface OfferingDetailSidebarOnsiteRequestProps {}

export const OfferingDetailSidebarOnsiteRequestBox: React.StatelessComponent<
  OfferingDetailSidebarOnsiteRequestProps
> = (props: OfferingDetailSidebarOnsiteRequestProps) => {
  return (
    <div className="sidebar-widget sidebar-contact blog-details-content">
      <h5>Onsite request form</h5>

      <div className="comment-form ">
        <form action="#">
          <div className="">
            <div className="">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Subject" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="">
              <textarea placeholder="Message " />
            </div>
          </div>
          <div>
            <button className="theme-solid-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

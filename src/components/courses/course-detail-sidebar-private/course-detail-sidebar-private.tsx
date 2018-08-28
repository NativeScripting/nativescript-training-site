import * as React from 'react';

interface CourseDetailSidebarPrivateClassesProps {}

export const CourseDetailSidebarPrivateClassesBox: React.StatelessComponent<
  CourseDetailSidebarPrivateClassesProps
> = (props: CourseDetailSidebarPrivateClassesProps) => {
  return (
    <div className="sidebar-widget sidebar-search">
      <h5>Private Classes</h5>
      <p>
        Private on-site courses provide a more economical and convenient!
        training solution for companies with 5 or more students. Learn how you
        can have one of our instructor experts deliver a NativeScript Training
        class as a <a href="/training/private">private on-site class</a> at your
        location.
      </p>
    </div>
  );
};

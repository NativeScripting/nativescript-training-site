import * as React from 'react';

import './breadcrumbs.css';

export interface BreadCrumb {
  name: string;
  url: string;
}

export interface BreadCrumbsProps {
  breadcrumbs: BreadCrumb[];
}

export const BreadCrumbs: React.StatelessComponent<BreadCrumbsProps> = (
  props: BreadCrumbsProps
) => {
  const listHtml = props.breadcrumbs.map((bc, idx) => {
    if (idx === props.breadcrumbs.length - 1) {
      return (
        <li key={idx}>
          <span>{bc.name}</span>
        </li>
      );
    } else {
      return (
        <li key={idx}>
          <a href={bc.url}>{bc.name}</a>
          <img src="/img/arrow.png" />
        </li>
      );
    }
  });

  return (
    <div className="breadcrumbs-container">
      <ul>{listHtml}</ul>
    </div>
  );
};

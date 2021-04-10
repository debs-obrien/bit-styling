import React from 'react';
import {MemoryRouter as Router,} from 'react-router-dom'
import { Breadcrumb } from './breadcrumb';

// sets the Component preview in gallery view
export const BasicBreadcrumb = () => {
  return (
    <Router>
      <Breadcrumb title="live streams" link="resources" />
    </Router>
  )
};

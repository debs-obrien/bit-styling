import React from 'react';
import { render } from '@testing-library/react';
import { BasicBreadcrumb } from './breadcrumb.composition';

describe('breadcrumb', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicBreadcrumb />);
    const rendered = getByText('resources');
    expect(rendered).toBeTruthy();
  });

})
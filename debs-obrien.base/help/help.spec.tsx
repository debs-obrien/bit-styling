import React from 'react';
import { render } from '@testing-library/react';
import { BasicHelp } from './help.composition';

describe('help', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicHelp />);
    const rendered = getByText('hello from Help');
    expect(rendered).toBeTruthy();
  });

})
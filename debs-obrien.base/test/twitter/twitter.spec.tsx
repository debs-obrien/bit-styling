import React from 'react';
import { render } from '@testing-library/react';
import { BasicTwitter } from './twitter.composition';

describe('twitter', () => {
  it('should render with the correct text', () => {
    const { getByText } = render(<BasicTwitter />);
    const rendered = getByText('hello from Twitter');
    expect(rendered).toBeTruthy();
  });
});

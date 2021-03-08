import React from 'react';
import { ThemeProvider } from '@ranm8/design.ui.theme-context';
import { Card } from '@ranm8/design.ui.card';

export function PeopleList() {
  return (
    <div>
      <ThemeProvider color="blue">
        <Card />
      </ThemeProvider>
      <ThemeProvider color="navy">
      <Card />
      </ThemeProvider>
    </div>
  );
}

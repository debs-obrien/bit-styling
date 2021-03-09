import React, { useContext } from 'react';
import { Button } from '@debs-obrien/design.ui.base.button'
import { ThemeContext } from '@debs-obrien/design.ui.theme-context';

export function Card() {
  const theme = useContext(ThemeContext);
  return <div style={{ color: theme.color, padding: theme.padding, backgroundColor: theme.backgroundColor}}>Hi there<Button>click me</Button></div>;
}

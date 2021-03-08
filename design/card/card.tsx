import React, { useContext } from 'react';
import { ThemeContext } from '@ranm8/design.ui.theme-context';

export function Card() {
  const theme = useContext(ThemeContext);
  return <div style={{ color: theme.color }}>Hi there</div>;
}

import React, { ReactNode } from 'react';
import { ThemeContext } from './theme-context';

export type ThemeProviderProps = {
  color: string,
  children: ReactNode
};

export function ThemeProvider({ color, children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{color: color}}>{children}</ThemeContext.Provider>
  );
}

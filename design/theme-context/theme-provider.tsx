import React, { ReactNode } from "react"
import { ThemeContext, ThemeContextType } from "./theme-context"
export type ThemeProviderProps = ThemeContextType & {
  children: ReactNode
}

export function ThemeProvider({ color, padding, backgroundColor, headingFontSize,textFontSize,children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ color, padding, backgroundColor, headingFontSize, textFontSize  }}>
      {children}
    </ThemeContext.Provider>
  )
}

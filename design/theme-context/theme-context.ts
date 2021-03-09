import { createContext } from "react"
import {
  headingFontSize,
  textFontSize,
} from "@debs-obrien/design.theme.size-definition"
export type ThemeContextType = {
  color: string
  padding: string
  backgroundColor: string
  headingFontSize: string
  textFontSize: string
}

export const ThemeContext = createContext<ThemeContextType>({
  color: "gold",
  padding: "20px",
  backgroundColor: "purple",
  headingFontSize: headingFontSize,
  textFontSize: textFontSize,
})

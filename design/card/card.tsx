import React, { useContext } from "react"
import { Button } from "@debs-obrien/design.button"
import { ThemeContext } from "@debs-obrien/design.theme-context"

export function Card() {
  const theme = useContext(ThemeContext)
  return (
    <div
      style={{
        color: theme.color,
        padding: theme.padding,
        backgroundColor: theme.backgroundColor,
      }}
    >
      Hi there
      <Button>This works</Button>
    </div>
  )
}

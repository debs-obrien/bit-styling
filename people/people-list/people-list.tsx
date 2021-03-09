import React from "react"
import { ThemeProvider } from "@debs-obrien/design.theme-context"
import { Card } from "@debs-obrien/design.card"

export function PeopleList() {
  return (
    <div>
      <ThemeProvider color="orange">
        <Card />
      </ThemeProvider>
      <ThemeProvider color="purple">
        <Card />
      </ThemeProvider>
    </div>
  )
}

import React from "react"
import classNames from "classnames"
import {
  headingFontSize,
  textFontSize,
} from "@debs-obrien/design.theme.size-definition"

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={classNames(headingFontSize, textFontSize)}></div>
  )
}

import React from "react"
import classNames from "classnames"
import { HeadingProps, Heading } from "@debs-obrien/base-ui.base.ui.heading"
import sizeStyles from "./heading-sizes.module.scss"
import styles from "./heading.module.scss"
import margins from "./margins.module.scss"

export type Sizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

export type HeaderProps = {
  /** font-size for the header */
  size?: Sizes
} & HeadingProps
/**
 * A set of concrete heading for the workspace docs
 * H1, H2, H3, H4, H5, H6
 *
 * To keep a consistent look to the site, headers come in a limited set of sizes.
 * While each header corresponds to a default font-size. It can be overridden using the size prop
 */

export function H1(props: HeaderProps) {
  return (
    <Heading
      element="h1"
      {...props}
      className={classNames(
        styles.h1,
        margins.h1,
        sizeStyles[props.size || "lg"],
        props.className
      )}
    />
  )
}

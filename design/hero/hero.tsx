import React, {useContext, HTMLAttributes} from "react"
import {ThemeContext} from '@debs-obrien/design.theme-context'
import { H1 } from "@debs-obrien/design.heading"
import { Subtitle } from "@debs-obrien/design.subtitle"
import {LineBreak} from "@debs-obrien/design.line-break"
import styles from "./hero.module.scss"

export type HeroProps = {
  title: string,
  subtitle: string
} & HTMLAttributes<HTMLDivElement>

export function Hero({title, subtitle, ...rest}: HeroProps) {
  const theme = useContext(ThemeContext)
  return (
    <div className={styles.hero} {...rest}>
      <H1>{title}</H1>
      <Subtitle>{subtitle}</Subtitle>
      <div className={styles.line}>
        <LineBreak></LineBreak>
      </div>
    </div>
  )
}

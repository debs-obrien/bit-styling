import React, {useContext} from "react"
import classNames from "classnames"
import {ThemeContext} from '@debs-obrien/design.theme-context'
import { H1 } from "@debs-obrien/design.heading"
import { Subtitle } from "@debs-obrien/design.subtitle"
import {LineBreak} from "@debs-obrien/design.line-break"
import styles from "./hero.module.scss"


export function Hero() {
  const theme = useContext(ThemeContext)
  return (
    <div className={styles.hero}>
      <H1>Live Streams</H1>
      <Subtitle>Live Streams where I have appeared as a Guest</Subtitle>
      <div className={styles.line}>
        <LineBreak></LineBreak>
      </div>
    </div>
  )
}

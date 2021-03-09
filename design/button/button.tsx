import React, {ReactNode} from "react"
import { Button as BaseButton } from "@debs-obrien/base-ui.input.button"
import styles from "./button.module.scss"

export type ButtonProps = {
  children?: ReactNode
}

export function Button({children}: ButtonProps) {
  return <BaseButton className={styles.button}>{children}</BaseButton>
}

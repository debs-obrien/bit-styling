import React, { ReactNode } from 'react';
import styles from './button.module.scss';
import classnames from 'classnames';

export type ButtonProps = {
  className?: string,
  children?: ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...rest }: ButtonProps) {
  return <button className={classnames(styles.button, className)} {...rest}>{children}</button>;
}

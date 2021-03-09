import React from 'react';
import { Button as BaseButton } from '@debs-obrien/base-ui.ui.button';
import styles from './button.module.scss';

export type ButtonProps = {

};

export function Button() {
  return <BaseButton className={styles.button}>Stunning button!</BaseButton>;
}

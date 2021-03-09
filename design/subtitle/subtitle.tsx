import React, {ReactNode} from 'react';
import styles from './subtitle.module.scss';

export type SubtitleProps = {
  children?: ReactNode
};

export function Subtitle({children}: SubtitleProps) {
  return <p className={styles.subtitle}>{children}</p>;
}

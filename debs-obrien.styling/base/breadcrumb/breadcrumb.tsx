import React from 'react';
import { Link }  from 'react-router-dom';
import styles from './breadcrumb.module.scss';
import classnames from 'classnames';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement>{
title: string,
link: string
};

export const Breadcrumb = ( {className, title, link, children, ...rest}: BreadcrumbProps ) => {
  return (
      <div className={classnames(styles.breadcrumb, className)} aria-label="Breadcrumb" {...rest}>
      <ol>
        <li>
          <div className={styles.list}>
            <Link to="/" className={styles.link}>
              <svg
                className={styles.home}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
            </Link>
          </div>
        </li>
        <li>
          <div className={styles.list}>
            <svg
              className={styles.home}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
                <Link
                to={`/${link}`}
                className={styles.link}
              >
                { link }
              </Link>
          </div>
        </li>
        <li>
          <div className={styles.list}>
            <svg
              className={styles.home}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
            </svg>
  
            { title }
          </div>
        </li>
      </ol>
    </div>
  )
};
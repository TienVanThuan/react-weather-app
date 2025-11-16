import React from 'react';
import styles from './Button.module.scss';

export default function Button({ children }) {
  return (
    <button className={`${styles.btn} inline-flex items-center gap-2 px-4 py-2 rounded-md`}>
      {children}
    </button>
  );
}

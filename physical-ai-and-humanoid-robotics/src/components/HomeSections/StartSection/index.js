import React from 'react';
import styles from './styles.module.css';

export default function StartSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Get Started</h2>
      <p className={styles.text}>
        Begin your journey into Physical AI and humanoid robotics with the introductory chapter.
      </p>

      <button
        className={styles.button}
        onClick={() => (window.location.href = '/docs/part-1/foundations-of-physical-ai')}
      >
        Start Reading
      </button>
    </section>
  );
}

import React from 'react';
import styles from './styles.module.css';

export default function WhySection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why Physical AI Matters</h2>
        <p className={styles.text}>
          Artificial intelligence becomes truly transformative when it leaves
          the digital world and interacts with the physical one. 
        </p>
        <p className={styles.text}>
          Physical AI integrates perception, reasoning, and action in real environments,
          forming the foundation for humanoid robots, autonomous systems,
          and machines capable of meaningful collaboration with humans.
        </p>
      </div>
    </section>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.title}>Physical AI & Humanoid Robotics</h1>
        <p className={styles.subtitle}>
          Building intelligent machines — from embodied cognition to actuation,
          perception, and autonomous motion in real-world environments.
        </p>
        <button
          className={styles.ctaButton}
          onClick={() => (window.location.href = '/docs/part-1/foundations-of-physical-ai')}
        >
          Explore the Book
        </button>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Core Theory & Principles',
    description:
      'Embodied intelligence, sensorimotor learning, adaptive control, and frameworks for physical autonomy.',
  },
  {
    title: 'Humanoid Design & Mechanics',
    description:
      'Actuators, compliant structures, balance control, perception pipelines, and motion planning.',
  },
  {
    title: 'Development & Deployment Workflow',
    description:
      'Simulation, embedded programming, middleware systems, and AI stacks for robotic development.',
  },
];

function Feature(props) {
  return (
    <div className={styles.featureCard}>
      <h3 className={styles.featureTitle}>{props.title}</h3>
      <p className={styles.featureDesc}>{props.description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresGrid}>
        {FeatureList.map((feature, idx) => (
          <Feature key={idx} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}

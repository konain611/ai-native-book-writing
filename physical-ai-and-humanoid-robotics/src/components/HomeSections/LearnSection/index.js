import styles from './styles.module.css';

const items = [
  { 
    title: 'Embodied Intelligence', 
    text: 'Understand how cognition emerges from physical interaction rather than pure computation.' 
  },
  { 
    title: 'Motion & Control', 
    text: 'Learn the mechanics and algorithms behind balance, locomotion, and manipulation.' 
  },
  { 
    title: 'Perception Systems', 
    text: 'Explore vision, tactile sensing, proprioception, and multimodal sensor fusion.' 
  },
  { 
    title: 'Robotics Architectures', 
    text: 'End-to-end systems: actuation, planning, autonomy, and safety protocols.' 
  },
  { 
    title: 'Learning for Robotics', 
    text: 'Study reinforcement learning, imitation learning, and adaptive policy methods optimized for real-world robots.' 
  },
  { 
    title: 'Simulation & Tooling', 
    text: 'Work with simulators, digital twins, hardware interfaces, and development pipelines for robotic systems.' 
  },
];

export default function LearnSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>What You Will Learn</h2>
      <div className={styles.grid}>
        {items.map((item, i) => (
          <div className={styles.card} key={i}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

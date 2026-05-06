'use client';
import { motion } from 'framer-motion';
import styles from './Programs.module.css';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: '01',
    title: 'Elite Bodybuilding',
    desc: 'For those who want to push their limits and build a stage-ready physique.',
    size: 'large',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
  },
  {
    id: '02',
    title: 'CrossFit Core',
    desc: 'High intensity functional movements for overall athleticism.',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80'
  },
  {
    id: '03',
    title: 'Powerlifting',
    desc: 'Focus on the big three: Squat, Bench, and Deadlift.',
    size: 'small',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80'
  }
];

export default function Programs() {
  return (
    <section id="programs" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <span className={styles.preTitle}>Our Expertise</span>
            <h2 className={styles.title}>CHOOSE YOUR <span className="text-gradient">DISCIPLINE</span></h2>
          </div>
          <p className={styles.headerDesc}>
            Our programs are designed by world-class athletes to ensure you get the most out of every drop of sweat.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((prog, i) => (
            <motion.div 
              key={prog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`${styles.card} ${styles[prog.size]}`}
            >
              <div className={styles.imageOverlay}></div>
              <img src={prog.image} alt={prog.title} className={styles.cardImg} />
              
              <div className={styles.cardContent}>
                <span className={styles.number}>{prog.id}</span>
                <h3 className={styles.cardTitle}>{prog.title}</h3>
                <p className={styles.cardDesc}>{prog.desc}</p>
                <button className={styles.learnMore}>
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

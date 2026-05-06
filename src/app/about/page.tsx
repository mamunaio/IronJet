'use client';
import styles from './about.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Dumbbell } from 'lucide-react';

const values = [
  {
    icon: <Shield size={40} />,
    title: "DISCIPLINE",
    desc: "Consistency is the foundation of every evolution. We provide the environment to build unbreakable habits."
  },
  {
    icon: <Target size={40} />,
    title: "EVOLUTION",
    desc: "We don't believe in maintenance. Every session is a step toward a stronger, better version of yourself."
  },
  {
    icon: <Users size={40} />,
    title: "COMMUNITY",
    desc: "You train alone, but you evolve together. Join a brotherhood of high-achievers and elite athletes."
  }
];

const stats = [
  { val: "10+", label: "YEARS EXP" },
  { val: "5K+", label: "MEMBERS" },
  { val: "25+", label: "ELITE COACHES" },
  { val: "24/7", label: "ACCESS" }
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroSub}
          >
            Beyond the Iron
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.heroTitle}
          >
            OUR <span className="text-gradient">LEGACY</span>
          </motion.h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.storyImage}
            >
              <img src="/images/about.png" alt="Gym Story" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.storyContent}
            >
              <h2 className={styles.storyTitle}>THE <span className="text-gradient">IRONJET</span> STORY</h2>
              <p className={styles.storyText}>
                Founded in 2014, IronJet was born from a simple realization: the fitness industry was broken. 
                Mass-market gyms were focused on volume, not results. We wanted to build a temple for those 
                who demand more from themselves.
              </p>
              <p className={styles.storyText}>
                What started as a small underground facility has evolved into a world-class performance hub. 
                We combine industrial aesthetics with state-of-the-art sports science to deliver an 
                unparalleled training experience.
              </p>
            </motion.div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span className={styles.heroSub}>Core Values</span>
            <h2 className={styles.storyTitle}>WHAT WE <span className="text-gradient">STAND FOR</span></h2>
          </div>

          <div className={styles.bentoGrid}>
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.bentoCard}
              >
                <div className={styles.bentoIcon}>{v.icon}</div>
                <h3 className={styles.bentoTitle}>{v.title}</h3>
                <p className={styles.bentoDesc}>{v.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.statsGrid}
          >
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statVal}>{s.val}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

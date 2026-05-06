'use client';
import styles from './programs.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { BarChart3, Snowflake, Trophy, Utensils } from 'lucide-react';

const programDetails = [
  {
    title: "HYPERTROPHY",
    tag: "MUSCLE GROWTH",
    desc: "Science-based muscle building protocols designed to maximize your genetic potential through progressive overload.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2adfcd?auto=format&fit=crop&q=80",
    features: ["Body Composition Analysis", "Custom Meal Plans", "Bi-weekly Check-ins"]
  },
  {
    title: "STRENGTH & POWER",
    tag: "ABSOLUTE STRENGTH",
    desc: "Focus on the big three: Squat, Bench, and Deadlift. Build a foundation of power that lasts a lifetime.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    features: ["Powerlifting Prep", "Calibrated Plates", "Expert Technique Coaching"]
  },
  {
    title: "MMA & BOXING",
    tag: "COMBAT SPORTS",
    desc: "Train like an athlete. High-intensity combat drills, heavy bag work, and technical striking sessions.",
    img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80",
    features: ["Sparring Zones", "Professional Coaches", "Endurance Training"]
  },
  {
    title: "ZEN FLOW",
    tag: "MIND & BODY",
    desc: "Recovery is as important as the workout. Dynamic yoga flows and deep mobility sessions to keep you agile.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    features: ["Infrared Sauna", "Mobility Classes", "Guided Meditation"]
  }
];

const trainingApproach = [
  { 
    title: "DATA DRIVEN", 
    desc: "We track every rep, set, and calorie to ensure maximum progress.", 
    icon: <BarChart3 size={32} />,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
  },
  { 
    title: "RECOVERY LAB", 
    desc: "Infrared saunas and cryotherapy to speed up your muscle repair.", 
    icon: <Snowflake size={32} />,
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
  },
  { 
    title: "ELITE COACHES", 
    desc: "Train with the best in the industry, including former pro athletes.", 
    icon: <Trophy size={32} />,
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
  },
  { 
    title: "CUSTOM NUTRITION", 
    desc: "Tailored meal plans that match your specific body goals.", 
    icon: <Utensils size={32} />,
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17051?auto=format&fit=crop&q=80"
  }
];

const schedule = [
  { day: "MON", morning: "Powerlifting", evening: "MMA Striking" },
  { day: "TUE", morning: "Yoga Flow", evening: "Hypertrophy" },
  { day: "WED", morning: "HIIT", evening: "Boxing Drills" },
  { day: "THU", morning: "Strength", evening: "Zen Recovery" },
  { day: "FRI", morning: "Bodybuilding", evening: "MMA Sparring" },
  { day: "SAT", morning: "Full Body", evening: "Open Gym" },
  { day: "SUN", morning: "Active Recovery", evening: "Closed" },
];

export default function ProgramsPage() {
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
            Our Training Systems
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.heroTitle}
          >
            MASTER YOUR <br /> <span className="text-gradient">EVOLUTION</span>
          </motion.h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {programDetails.map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.programCard}
              >
                <div className={styles.imgSide}>
                  <img src={prog.img} alt={prog.title} />
                </div>
                <div className={styles.textSide}>
                  <span className={styles.tag}>{prog.tag}</span>
                  <h3 className={styles.cardTitle}>{prog.title}</h3>
                  <p className={styles.desc}>{prog.desc}</p>
                  <button className={styles.enroll}>ENROLL NOW</button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.approachSection}>
            <div className={styles.approachHeader}>
              <span className={styles.tag}>Methodology</span>
              <h2 className={styles.approachTitle}>THE <span className="text-gradient">IRONJET</span> APPROACH</h2>
            </div>
            <div className={styles.bentoGrid}>
              {trainingApproach.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`${styles.bentoCard} ${styles[`bento${i+1}`]}`}
                >
                  <div className={styles.bentoBg}>
                    <img src={item.img} alt={item.title} />
                    <div className={styles.bentoOverlay}></div>
                  </div>
                  <div className={styles.bentoContent}>
                    <div className={styles.bentoIcon}>{item.icon}</div>
                    <h3 className={styles.bentoTitle}>{item.title}</h3>
                    <p className={styles.bentoDesc}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.scheduleSection}>
            <h2 className={styles.scheduleTitle}>WEEKLY <span className="text-gradient">SCHEDULE</span></h2>
            <div className={styles.scheduleGrid}>
              {schedule.map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={styles.dayCard}
                >
                  <span className={styles.dayName}>{s.day}</span>
                  <div className={styles.classes}>
                    <div>{s.morning}</div>
                    <div>{s.evening}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

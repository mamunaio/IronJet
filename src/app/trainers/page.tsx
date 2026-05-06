'use client';
import styles from './trainers.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Instagram, Award, Users, Star } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

const trainers = [
  {
    name: "MARCUS KANE",
    specialty: "STRENGTH & CONDITIONING",
    img: "/images/trainer1.png",
    stats: { exp: "12y", clients: "500+", rating: "5.0" },
    bio: "Former IFBB Pro and specialist in power-building protocols."
  },
  {
    name: "SARAH VANCE",
    specialty: "HYPERTROPHY SPECIALIST",
    img: "https://images.unsplash.com/photo-1548691905-57c36cc8d93f?auto=format&fit=crop&q=80",
    stats: { exp: "8y", clients: "350+", rating: "4.9" },
    bio: "Expert in muscle architecture and functional movement patterns."
  },
  {
    name: "VICTOR RODRIGUEZ",
    specialty: "COMBAT SPORTS COACH",
    img: "/images/trainer3.png",
    stats: { exp: "15y", clients: "200+", rating: "5.0" },
    bio: "Black belt in BJJ and professional MMA striking coach."
  },
  {
    name: "ELENA ROSSI",
    specialty: "YOGA & RECOVERY",
    img: "https://images.unsplash.com/photo-1518611012118-29615b65106d?auto=format&fit=crop&q=80",
    stats: { exp: "10y", clients: "600+", rating: "5.0" },
    bio: "Focusing on athletic mobility and mental performance coaching."
  },
  {
    name: "DAVID CHEN",
    specialty: "ATHLETIC AGILITY",
    img: "/images/trainer2.png",
    stats: { exp: "7y", clients: "280+", rating: "4.8" },
    bio: "Transforming raw speed into elite on-field performance."
  }
];

export default function TrainersPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      
      <section className={styles.hero}>
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
          alt="Gym Atmosphere" 
          className={styles.heroBg}
        />
        <div className={styles.heroContent}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroSub}
          >
            Architects of Evolution
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.heroTitle}
          >
            MEET THE <br /> <span className="text-gradient">ELITE</span>
          </motion.h1>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {trainers.map((trainer, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.card}
              >
                <div className={styles.imageWrapper}>
                  <img src={trainer.img} alt={trainer.name} />
                </div>
                <div className={styles.overlay}></div>
                
                <div className={styles.cardContent}>
                  <span className={styles.specialty}>{trainer.specialty}</span>
                  <h3 className={styles.name}>{trainer.name}</h3>
                  
                  <div className={styles.stats}>
                    <div className={styles.statItem}>
                      <span className={styles.statVal}>{trainer.stats.exp}</span>
                      <span className={styles.statLabel}>Exp.</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statVal}>{trainer.stats.clients}</span>
                      <span className={styles.statLabel}>Clients</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statVal}>{trainer.stats.rating}</span>
                      <span className={styles.statLabel}>Rating</span>
                    </div>
                  </div>

                  <p className={styles.bio} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '25px', lineHeight: '1.5' }}>
                    {trainer.bio}
                  </p>

                  <Magnetic>
                    <button className={styles.bookBtn}>BOOK A SESSION</button>
                  </Magnetic>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

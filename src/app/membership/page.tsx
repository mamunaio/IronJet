'use client';
import styles from './membership.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Check, Crown, Shield, Zap, Coffee, Wifi, Smartphone, Clock } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

const tiers = [
  {
    name: "BASE",
    price: "$49",
    tag: "Essential Access",
    features: ["24/7 Gym Access", "Standard Equipment", "Basic Locker Access", "Water Station", "Mobile App Access"],
    popular: false
  },
  {
    name: "PRO",
    price: "$89",
    tag: "Performance Plus",
    features: ["All Base Features", "Group Classes", "Sauna & Steam Room", "Advanced Recovery Zone", "1 PT Session/mo"],
    popular: true
  },
  {
    name: "ELITE",
    price: "$149",
    tag: "Ultimate Luxury",
    features: ["All Pro Features", "Private Locker Room", "Laundry Service", "Unlimited PT Sessions", "Protein Bar Access"],
    popular: false
  }
];

const amenities = [
  { icon: <Smartphone />, title: "Digital Access", desc: "Scan and enter 24/7 with our biometric mobile app." },
  { icon: <Coffee />, title: "Protein Bar", desc: "Freshly made shakes and pre-workouts at your service." },
  { icon: <Clock />, title: "24/7 Service", desc: "Work out whenever inspiration strikes. Day or night." },
  { icon: <Wifi />, title: "Gigabit WiFi", desc: "High-speed connectivity across the entire facility." }
];

export default function MembershipPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      
      <section className={styles.hero}>
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80" 
          alt="Luxury Gym" 
          className={styles.heroImage}
        />
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={styles.bgText}
        >
          ELITE
        </motion.div>

        <div className={styles.heroContent}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroSub}
          >
            Invest in Your Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={styles.heroTitle}
          >
            CHOOSE YOUR <br /> <span className="text-gradient">EVOLUTION</span>
          </motion.h1>
        </div>
      </section>

      <section className={styles.tierSection}>
        <div className="container">
          <div className={styles.tierGrid}>
            {tiers.map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`${styles.card} ${tier.popular ? styles.popular : ''}`}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.planType}>{tier.tag}</span>
                  <h3 className={styles.planName}>{tier.name}</h3>
                  <div className={styles.price}>
                    {tier.price}<span>/mo</span>
                  </div>
                </div>

                <div className={styles.featureList}>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <Check className={styles.checkIcon} size={18} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Magnetic>
                  <button className={`${styles.cta} ${tier.popular ? styles.ctaPopular : ''}`}>
                    JOIN THE ELITE
                  </button>
                </Magnetic>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.amenities}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className={styles.heroSub}>World Class</span>
            <h2 className={styles.planName} style={{ fontSize: '3.5rem' }}>BEYOND THE <span className="text-gradient">WORKOUT</span></h2>
          </div>

          <div className={styles.amenityGrid}>
            {amenities.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={styles.amenityCard}
              >
                <div className={styles.amenityIcon}>
                  {item.icon}
                </div>
                <h4 className={styles.amenityTitle}>{item.title}</h4>
                <p className={styles.amenityDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';
import styles from './join.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

export default function JoinPage() {
  return (
    <main className={styles.page}>
      <img 
        src="https://images.unsplash.com/photo-1571902258032-783007841759?auto=format&fit=crop&q=80" 
        className={styles.bg} 
        alt="Gym Background" 
      />
      <div className={styles.overlay} />
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.container}
        >
          {/* Info Side */}
          <div className={styles.infoSide}>
            <h1 className={styles.title}>JOIN THE <br /><span className="text-gradient">INNER CIRCLE</span></h1>
            <p className={styles.storyText} style={{ marginBottom: '30px', color: 'var(--text-muted)' }}>
              Take the first step towards your physical peak. Your evolution begins the moment you join the elite.
            </p>
            
            <div className={styles.perks}>
              <div className={styles.perkItem}>
                <CheckCircle2 className={styles.perkIcon} size={20} />
                <span className={styles.perkText}>24/7 Elite Facility Access</span>
              </div>
              <div className={styles.perkItem}>
                <ShieldCheck className={styles.perkIcon} size={20} />
                <span className={styles.perkText}>World-Class Performance Hub</span>
              </div>
              <div className={styles.perkItem}>
                <Zap className={styles.perkIcon} size={20} />
                <span className={styles.perkText}>Instant Access to Member App</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className={styles.formSide}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" placeholder="John Doe" className={styles.input} />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address</label>
              <input type="email" placeholder="john@example.com" className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Choose Your Evolution</label>
              <div className={styles.selectGrid}>
                <div className={styles.planOption}>
                  <span className={styles.planName}>BASE</span>
                  <span className={styles.planPrice}>$49/mo</span>
                </div>
                <div className={`${styles.planOption} ${styles.active}`} style={{ borderColor: 'var(--accent)', background: 'rgba(var(--accent-rgb), 0.1)' }}>
                  <span className={styles.planName}>PRO</span>
                  <span className={styles.planPrice}>$89/mo</span>
                </div>
                <div className={styles.planOption}>
                  <span className={styles.planName}>ELITE</span>
                  <span className={styles.planPrice}>$149/mo</span>
                </div>
              </div>
            </div>

            <Magnetic>
              <button className={styles.submitBtn}>
                CONFIRM MEMBERSHIP <ArrowRight size={22} style={{ marginLeft: '10px' }} />
              </button>
            </Magnetic>
            
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '20px' }}>
              By joining, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

'use client';
import styles from './login.module.css';
import { motion } from 'framer-motion';
import { Globe, Smartphone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Magnetic from '@/components/Magnetic';

export default function LoginPage() {
  return (
    <main className={styles.page}>
      <img 
        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80" 
        className={styles.bg} 
        alt="Gym Atmosphere" 
      />
      <div className={styles.glow} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={styles.loginBox}
      >
        <Link href="/" className={styles.backBtn} style={{ position: 'absolute', top: '30px', left: '30px', color: 'var(--text-muted)' }}>
          <ArrowLeft size={20} />
        </Link>

        <h1 className={styles.title}>MEMBER <span className="text-gradient">LOGIN</span></h1>
        <span className={styles.subtitle}>Welcome back to the temple of strength.</span>

        <div className={styles.formGroup}>
          <label className={styles.label}>Email Address</label>
          <input type="email" placeholder="name@example.com" className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input type="password" placeholder="••••••••" className={styles.input} />
          <Link href="#" className={styles.forgot}>Forgot password?</Link>
        </div>

        <Magnetic>
          <button className={styles.loginBtn}>ACCESS PORTAL</button>
        </Magnetic>

        <div className={styles.social}>
          <span className={styles.socialLabel}>OR CONTINUE WITH</span>
          <div className={styles.socialBtns}>
            <button className={styles.socialBtn}>
              <Globe size={20} style={{ marginRight: '10px' }} /> Google
            </button>
            <button className={styles.socialBtn}>
              <Smartphone size={20} style={{ marginRight: '10px' }} /> Apple
            </button>
          </div>
        </div>

        <p className={styles.footerText}>
          Not a member yet? 
          <Link href="/join" className={styles.joinLink}>Join the Elite</Link>
        </p>
      </motion.div>
    </main>
  );
}

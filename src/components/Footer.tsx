'use client';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';
import { Dumbbell, Camera, Send, Globe } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.glowLine} />
      
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <Dumbbell size={30} />
              IRON<span>JET</span>
            </div>
            <p className={styles.brandDesc}>
              Defining the next generation of athletic excellence. We provide the protocols, 
              you provide the drive. The temple of transformation awaits.
            </p>
            <div className={styles.socials}>
              <Magnetic><a href="#" className={styles.socialBtn}><Camera size={18} /></a></Magnetic>
              <Magnetic><a href="#" className={styles.socialBtn}><Send size={18} /></a></Magnetic>
              <Magnetic><a href="#" className={styles.socialBtn}><Globe size={18} /></a></Magnetic>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/trainers">Trainers</Link></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Support</h4>
            <ul className={styles.list}>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.newsletterCol}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsletterDesc}>Subscribe for exclusive performance protocols and updates.</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="ACCESS@PROTOCOL.COM" />
              <button className={styles.subscribeBtn}>JOIN</button>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} IRONJET FITNESS. ALL RIGHTS RESERVED.
          </p>
          
          <div className={styles.clock}>
            <div className={styles.dot} />
            GLOBAL ACCESS: {time} GMT
          </div>
        </div>
      </div>

      <div className={styles.watermark}>IRONJET</div>
    </footer>
  );
}

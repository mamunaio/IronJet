'use client';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Dumbbell, Search, User } from 'lucide-react';
import Magnetic from './Magnetic';

export default function Navbar() {
  const navRef = useRef(null);
  const blobRef = useRef(null);

  useGSAP(() => {
    // Initial Reveal
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.5
    });

    // Magnetic Blob Logic
    const links = document.querySelectorAll(`.${styles.link}`);
    links.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        const target = e.target as HTMLElement;
        const rect = target.getBoundingClientRect();
        const navRect = navRef.current!.getBoundingClientRect();
        
        gsap.to(blobRef.current, {
          x: rect.left - navRect.left - 10,
          width: rect.width + 20,
          opacity: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.75)" // Elastic movement
        });

        gsap.to(target, {
          scale: 1.1,
          color: "#ffffff",
          duration: 0.3
        });
      });

      link.addEventListener('mouseleave', (e) => {
        const target = e.target as HTMLElement;
        gsap.to(target, {
          scale: 1,
          color: "var(--text-muted)",
          duration: 0.3
        });
      });
    });

    navRef.current!.addEventListener('mouseleave', () => {
      gsap.to(blobRef.current, {
        opacity: 0,
        duration: 0.4
      });
    });
  }, { scope: navRef });

  return (
    <div className={styles.navWrapper}>
      <nav ref={navRef} className={styles.nav}>
        {/* Animated Background Blob */}
        <div ref={blobRef} className={styles.blob}></div>

        <div className={styles.container}>
          <Magnetic>
            <Link href="/" className={styles.logo}>
              <Dumbbell size={24} color="var(--accent)" strokeWidth={3} />
              <span className={styles.logoText}>IRON<span>JET</span></span>
            </Link>
          </Magnetic>
          
          <div className={styles.links}>
            <Link href="/programs" className={styles.link}>Programs</Link>
            <Link href="/membership" className={styles.link}>Membership</Link>
            <Link href="/trainers" className={styles.link}>Trainers</Link>
            <Link href="/about" className={styles.link}>About</Link>
          </div>

          <div className={styles.navActions}>
            <Magnetic>
              <Link href="/join">
                <button className={styles.cta}>Join Now</button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </nav>
    </div>
  );
}

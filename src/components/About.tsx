'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';
import { Target, Zap, Shield } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MarqueeLine = ({ text, className, innerClass }: { text: string, className: string, innerClass: string }) => (
  <div className={className}>
    <div className={`${innerClass} ${styles.marqueeInner}`}>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  </div>
);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marquee1 = useRef<HTMLDivElement>(null);
  const marquee2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Continuous Infinite Auto-Scroll
    gsap.to(".marquee-inner-1", {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1
    });

    gsap.to(".marquee-inner-2", {
      xPercent: 0,
      ease: "none",
      duration: 30,
      repeat: -1,
      startAt: { xPercent: -50 }
    });

    // Scroll Parallax (Optional additive effect)
    gsap.to(marquee1.current, {
      x: -150,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(marquee2.current, {
      x: 150,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Image & Bento Reveal
    gsap.from(".about-img", {
      scale: 1.2,
      opacity: 0,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".about-img",
        start: "top 90%",
      }
    });

    gsap.from(".feat-item", {
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".features-grid",
        start: "top 95%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section} id="about">
      <div className={styles.marqueeWrapper}>
        <div ref={marquee1}>
          <MarqueeLine 
            text="DISCIPLINE • PROGRESS • STRENGTH • POWER • " 
            className={`${styles.largeText} ${styles.strokeText}`}
            innerClass="marquee-inner-1"
          />
        </div>
        <div ref={marquee2}>
          <MarqueeLine 
            text="LIMITLESS • BOLD • RELENTLESS • ELITE • " 
            className={`${styles.largeText} ${styles.filled}`}
            innerClass="marquee-inner-2"
          />
        </div>
      </div>

      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imageBox}>
              <img src="/images/about.png" alt="Luxury Gym" className="about-img" />
              <div className={styles.yearBadge}>EST. MMXXIV</div>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>
              WE DON'T JUST TRAIN, <br /> WE <span className="text-gradient">EVOLVE</span>.
            </h2>
            <p className={styles.desc}>
              IronJet was founded on the principle that average is the enemy. We provide the tools, the atmosphere, and the community for those who demand more from themselves. 
            </p>
            
            <div className={`${styles.features} features-grid`}>
              <div className={`${styles.featItem} feat-item`}>
                <div className={styles.iconBox}><Target size={28} /></div>
                <div>
                  <span>SYSTEM 01</span>
                  <h4>Elite Coaching</h4>
                  <p>Personalized protocols designed to push your genetic potential.</p>
                </div>
              </div>
              
              <div className={`${styles.featItem} feat-item`}>
                <div className={styles.iconBox}><Zap size={28} /></div>
                <div>
                  <span>SYSTEM 02</span>
                  <h4>Premium Tech</h4>
                  <p>Access to state-of-the-art bio-tracking and strength equipment.</p>
                </div>
              </div>

              <div className={`${styles.featItem} feat-item`}>
                <div className={styles.iconBox}><Shield size={28} /></div>
                <div>
                  <span>SYSTEM 03</span>
                  <h4>Elite Community</h4>
                  <p>Join a network of high-achievers dedicated to mastery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

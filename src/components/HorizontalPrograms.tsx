'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HorizontalPrograms.module.css';
import Magnetic from './Magnetic';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const programs = [
  { title: "STRENGTH", subtitle: "FORGE POWER", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" },
  { title: "HYPERTROPHY", subtitle: "SCULPT BODY", img: "https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop" },
  { title: "ATHLETICISM", subtitle: "ELITE AGILITY", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" },
  { title: "COMBAT", subtitle: "STRIKE FAST", img: "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=1964&auto=format&fit=crop" },
  { title: "RECOVERY", subtitle: "MIND & BODY", img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=2070&auto=format&fit=crop" },
];

export default function HorizontalPrograms() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wrappers = gsap.utils.toArray(`.${styles.cardWrapper}`);
    
    wrappers.forEach((wrapper: any, index: number) => {
      if (index === wrappers.length - 1) return;

      const card = wrapper.querySelector(`.${styles.card}`);
      const nextCard = wrappers[index + 1];
      
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.2,
        y: -100,
        scrollTrigger: {
          trigger: nextCard,
          start: "top 100%",
          end: "top 150px",
          scrub: true,
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.watermark}>SYSTEMS</div>
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}>ELITE <br /> <span className="text-gradient">SYSTEMS</span></h2>
          <p className={styles.introDesc}>
            ADVANCED PROTOCOLS FOR THE DRIVEN. DISCOVER OUR PERFORMANCE MODULES 
            DESIGNED FOR THE TOP 1%.
          </p>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {programs.map((p, i) => (
          <div key={i} className={styles.cardWrapper}>
            <div className={styles.card}>
              <img src={p.img} alt={p.title} className={styles.cardImg} />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <span className={styles.cardNumber}>PROTOCOL 0{i + 1}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardSub}>{p.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

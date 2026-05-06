'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Trainers.module.css';
import { Camera, Send, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';

const trainers = [
  {
    name: "MARCUS VANE",
    role: "HEAD PERFORMANCE COACH",
    img: "/images/trainer1.png",
    socials: { ig: "#", tw: "#", li: "#" }
  },
  {
    name: "SARAH CHASE",
    role: "ELITE ATHLETE TRAINER",
    img: "/images/trainer2.png",
    socials: { ig: "#", tw: "#", li: "#" }
  },
  {
    name: "VIKTOR KANE",
    role: "MOBILITY & RECOVERY",
    img: "/images/trainer3.png",
    socials: { ig: "#", tw: "#", li: "#" }
  }
];

export default function Trainers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".trainer-card", {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className={styles.section} id="trainers">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Expertise</span>
          <h2 className={styles.title}>MEET THE <br /> <span className="text-gradient">ELITE</span></h2>
        </div>

        <div className={styles.grid}>
          {trainers.map((trainer, i) => (
            <div key={i} className={`${styles.card} trainer-card`}>
              <div className={styles.imageBox}>
                <img src={trainer.img} alt={trainer.name} />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <span className={styles.role}>{trainer.role}</span>
                    <h3 className={styles.name}>{trainer.name}</h3>
                    <div className={styles.socials}>
                      <a href={trainer.socials.ig} className={styles.socialIcon}><Camera size={18} /></a>
                      <a href={trainer.socials.tw} className={styles.socialIcon}><Send size={18} /></a>
                      <a href={trainer.socials.li} className={styles.socialIcon}><LinkIcon size={18} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.cta}>
          <Magnetic>
            <Link href="/trainers" className={styles.ctaBtn}>
              VIEW ALL SPECIALISTS
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';
import { Play } from 'lucide-react';
import Magnetic from './Magnetic';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial State
    gsap.set(".hero-char", { y: 200, skewY: 10, opacity: 0 });
    gsap.set(imageRef.current, { scale: 1.5, filter: "brightness(0) blur(20px)" });
    gsap.set(".info-card", { opacity: 0, y: 50 });
    gsap.set(".badge-float", { opacity: 0, x: 50 });

    tl.to(imageRef.current, {
      scale: 1,
      filter: "brightness(1) blur(0px)",
      duration: 2.5,
      ease: "expo.out",
      delay: 2.8
    })
    .to(".hero-char", {
      y: 0,
      skewY: 0,
      opacity: 1,
      stagger: 0.02,
      duration: 1.2,
      ease: "power4.out"
    }, "-=1.8")
    .to(".info-card", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.8")
    .to(".badge-float", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=1");

    // Scroll Parallax
    gsap.to(imageRef.current, {
      y: 100,
      scale: 1.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-title-bg", {
      y: -200,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

  }, { scope: containerRef });

  const splitText = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="hero-char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <section ref={containerRef} className={styles.hero}>
      {/* Background Cinematic Text */}
      <div className={`${styles.titleBg} hero-title-bg`}>
        <h2 className={styles.bigText}>{splitText("FORGE LIMITS")}</h2>
      </div>

      {/* Main Athlete Image */}
      <div className={styles.imageContainer}>
        <img 
          ref={imageRef}
          src="/images/hero.png" 
          alt="Elite Athlete" 
          className={styles.mainImg}
        />
        {/* Overlay Text for Depth */}
        <div className={styles.overlayText}>
          <h1 className={styles.mainTitle}>
            {splitText("IRONJET")}
          </h1>
        </div>
      </div>

      {/* Floating Experience Badge */}
      <div className={`${styles.badge} badge-float`}>
        <span className={styles.badgeValue}>12+</span>
        <span className={styles.badgeLabel}>YEARS OF<br/>ELITE COACHING</span>
      </div>

      {/* Bottom Content */}
      <div className={styles.bottomInfo}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={`${styles.infoCard} info-card`}>
              <span className={styles.label}>ESTABLISHED</span>
              <span className={styles.value}>MMXXIV</span>
            </div>
            
            <div className={`${styles.infoCard} info-card`}>
              <span className={styles.label}>PHILOSOPHY</span>
              <span className={styles.value}>PURE PERFORMANCE</span>
            </div>

            <div className={`${styles.infoCard} info-card`}>
              <Magnetic>
                <div className={styles.playBtn}>
                  <div className={styles.playIcon}>
                    <Play fill="currentColor" size={20} />
                  </div>
                  <span>START YOUR EVOLUTION</span>
                </div>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <span>DISCOVER MORE</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}

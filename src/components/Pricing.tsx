'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Pricing.module.css';
import { Check, Zap, Crown, Shield } from 'lucide-react';
import Magnetic from './Magnetic';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const plans = [
  {
    name: "Base",
    price: "$49",
    icon: <Zap size={30} />,
    features: ["24/7 Gym Access", "Basic Equipment", "Locker Room Access", "1 Fitness Assessment"],
    popular: false
  },
  {
    name: "Pro",
    price: "$89",
    icon: <Shield size={30} />,
    features: ["All Base Features", "Group Training", "Nutrition Coaching", "Pool & Sauna Access", "Monthly Massage"],
    popular: true
  },
  {
    name: "Elite",
    price: "$149",
    icon: <Crown size={30} />,
    features: ["All Pro Features", "Private Trainer", "Biometric Tracking", "Priority Support", "Guest Passes"],
    popular: false
  }
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".pricing-card", {
      y: 40,
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
    <section ref={containerRef} className={styles.section} id="membership">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Investment</span>
          <h2 className={styles.title}>CHOOSE YOUR <br /> <span className="text-gradient">EVOLUTION</span></h2>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`${styles.card} ${plan.popular ? styles.popular : ''} pricing-card`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              
              <div className={styles.top}>
                <div className={styles.iconBox}>{plan.icon}</div>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.price}>
                  <span className={styles.currency}>$</span>
                  {plan.price.replace('$', '')}
                  <span className={styles.period}>/mo</span>
                </div>
              </div>

              <div className={styles.features}>
                {plan.features.map((feat, idx) => (
                  <div key={idx} className={styles.feature}>
                    <Check size={18} className={styles.checkIcon} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className={styles.ctaArea}>
                <Magnetic>
                  <button className={`${styles.cta} ${plan.popular ? styles.ctaPopular : ''}`}>
                    GET STARTED NOW
                  </button>
                </Magnetic>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

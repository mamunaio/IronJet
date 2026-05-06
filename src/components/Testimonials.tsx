'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonials.module.css';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Elite Member",
    img: "/images/members/m1.png",
    text: "Joining IronJet was the best decision I made for my health. The atmosphere is electric and the equipment is second to none.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Pro Member",
    img: "/images/members/m2.png",
    text: "The community here is incredible. I've achieved results in 6 months that I couldn't reach in 3 years elsewhere.",
    rating: 5
  },
  {
    name: "David Smith",
    role: "Strength Athlete",
    img: "/images/members/m3.png",
    text: "Premium in every sense of the word. From the locker rooms to the trainers, everything is top-tier.",
    rating: 5
  },
  {
    name: "Sophia Chen",
    role: "Wellness Member",
    img: "/images/members/m4.png",
    text: "The mobility classes have completely transformed how I move. I feel 10 years younger and more energetic than ever.",
    rating: 5
  },
  {
    name: "Michael Ross",
    role: "Powerlifter",
    img: "/images/members/m5.png",
    text: "If you're serious about strength, this is the place. The platforms and calibrated plates are world-class.",
    rating: 5
  },
  {
    name: "Isabella V.",
    role: "Fitness Model",
    img: "/images/members/m6.png",
    text: "The lighting, the vibe, and the expert coaching. IronJet is where I prepare for every single one of my shoots.",
    rating: 5
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    // Pick random start
    setIndex(Math.floor(Math.random() * testimonials.length));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5, ease: "easeIn" }
    })
  };

  const current = testimonials[index];

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Success Stories</span>
          <h2 className={styles.title}>VOICES OF THE <br /> <span className="text-gradient">EVOLVED</span></h2>
        </div>

        <div className={styles.sliderWrapper}>
          <button className={styles.navBtn} onClick={prevStep}><ChevronLeft /></button>
          
          <div className={styles.cardContainer}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className={styles.card}
              >
                <div className={styles.cardContent}>
                  <Quote className={styles.quoteIcon} size={50} />
                  <p className={styles.text}>{current.text}</p>
                  
                  <div className={styles.member}>
                    <div className={styles.avatar}>
                      <img src={current.img} alt={current.name} />
                    </div>
                    <div className={styles.memberInfo}>
                      <h4 className={styles.name}>{current.name}</h4>
                      <span className={styles.role}>{current.role}</span>
                      <div className={styles.stars}>
                        {[...Array(current.rating)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className={styles.navBtn} onClick={nextStep}><ChevronRight /></button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

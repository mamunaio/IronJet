'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What are the gym opening hours?",
    answer: "IronJet is a 24/7 premium facility. Members have full access to the gym at any time of day or night using their digital entry key."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes, we have a team of world-class elite trainers specializing in various disciplines including bodybuilding, powerlifting, and athletic performance."
  },
  {
    question: "Is there a parking facility available?",
    answer: "Absolutely. We provide dedicated secure underground parking for all our members, free of charge."
  },
  {
    question: "Can I freeze my membership if I travel?",
    answer: "Yes, Pro and Elite members can freeze their membership for up to 3 months per year. Base members can do so for a small administrative fee."
  },
  {
    question: "What equipment do you have?",
    answer: "We feature top-of-the-line equipment from brands like Eleiko, Hammer Strength, and Life Fitness, along with dedicated recovery zones and saunas."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section} id="faq">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Support</span>
          <h2 className={styles.title}>COMMON <br /> <span className="text-gradient">ENQUIRIES</span></h2>
        </div>

        <div className={styles.faqContainer}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`${styles.faqItem} ${openIndex === i ? styles.activeItem : ''}`}
            >
              <button 
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <h3>{faq.question}</h3>
                <div className={`${styles.iconWrapper} ${openIndex === i ? styles.activeIcon : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={styles.answer}
                  >
                    <div className={styles.answerInner}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

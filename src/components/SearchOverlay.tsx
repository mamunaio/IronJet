'use client';
import { useState, useEffect } from 'react';
import styles from './SearchOverlay.module.css';
import { X, Search as SearchIcon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const searchableData = [
  { id: 1, title: "MMA Training", cat: "Program", desc: "Professional combat sports training.", link: "/programs" },
  { id: 2, title: "Bodybuilding", cat: "Program", desc: "Advanced hypertrophy protocols.", link: "/programs" },
  { id: 3, title: "CrossFit", cat: "Program", desc: "High-intensity functional fitness.", link: "/programs" },
  { id: 4, title: "Marcus Kane", cat: "Trainer", desc: "Strength & Conditioning Head Coach.", link: "/trainers" },
  { id: 5, title: "Sarah Vance", cat: "Trainer", desc: "Muscle Architecture Specialist.", link: "/trainers" },
  { id: 6, title: "Elite Membership", cat: "Membership", desc: "The ultimate luxury club access.", link: "/membership" },
  { id: 7, title: "Pro Membership", cat: "Membership", desc: "Performance focused access.", link: "/membership" },
  { id: 8, title: "Yoga & Recovery", cat: "Program", desc: "Athletic mobility and mindfulness.", link: "/programs" },
  { id: 9, title: "Private Lockers", cat: "Service", desc: "Exclusive member storage solutions.", link: "/membership" }
];

export default function SearchOverlay({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchableData);

  useEffect(() => {
    if (query === '') {
      setResults(searchableData.slice(0, 4));
    } else {
      const filtered = searchableData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.cat.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.overlay}
          onClick={onClose}
        >
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>

          <div className={styles.searchContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.inputWrapper}>
              <input 
                autoFocus
                type="text" 
                placeholder="SEARCH FOR EVOLUTION..." 
                className={styles.input}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className={styles.resultsGrid}>
              {results.map((item) => (
                <Link href={item.link} key={item.id} onClick={onClose}>
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.resultCard}
                  >
                    <span className={styles.category}>{item.cat}</span>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.desc}>{item.desc}</p>
                  </motion.div>
                </Link>
              ))}
            </div>

            {results.length === 0 && (
              <div className={styles.noResults}>
                No results found for "{query}". Try searching for 'MMA' or 'Trainer'.
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

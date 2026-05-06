'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon, Monitor, X } from 'lucide-react';
import styles from './ThemeToggle.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.setAttribute('data-theme', systemTheme);
    } else {
      root.setAttribute('data-theme', t);
    }
  };

  const handleThemeChange = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
    localStorage.setItem('theme', t);
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className={styles.menu}
          >
            <button 
              onClick={() => handleThemeChange('light')} 
              className={`${styles.option} ${theme === 'light' ? styles.active : ''}`}
              title="Light Mode"
            >
              <Sun size={20} />
            </button>
            <button 
              onClick={() => handleThemeChange('dark')} 
              className={`${styles.option} ${theme === 'dark' ? styles.active : ''}`}
              title="Dark Mode"
            >
              <Moon size={20} />
            </button>
            <button 
              onClick={() => handleThemeChange('system')} 
              className={`${styles.option} ${theme === 'system' ? styles.active : ''}`}
              title="System Default"
            >
              <Monitor size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Magnetic>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className={`${styles.mainToggle} ${isOpen ? styles.activeMain : ''}`}
          aria-label="Toggle Theme Menu"
        >
          {isOpen ? <X size={24} /> : (
            theme === 'light' ? <Sun size={24} /> : 
            theme === 'dark' ? <Moon size={24} /> : <Monitor size={24} />
          )}
        </button>
      </Magnetic>
    </div>
  );
}

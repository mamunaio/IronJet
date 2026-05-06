'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.css';

export default function Loader() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    if (progress === 100) {
      gsap.to(loaderRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5
      });
    }

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div ref={loaderRef} className={styles.loader}>
      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1 ref={textRef} className={styles.logo}>
            IRON<span>JET</span>
          </h1>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
          </div>
          <span className={styles.percentage}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

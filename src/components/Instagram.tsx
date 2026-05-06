'use client';
import styles from './Instagram.module.css';
import { Camera as InstaIcon, ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';

const images = [
  { id: 1, src: "/images/insta/i1.png", class: styles.item1 },
  { id: 2, src: "/images/insta/i2.png", class: styles.item2 },
  { id: 3, src: "/images/insta/i3.png", class: styles.item3 },
  { id: 4, src: "/images/insta/i4.png", class: styles.item4 },
];

export default function Instagram() {
  return (
    <section className={styles.section} id="lifestyle">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.preTitle}>Community</span>
          <h2 className={styles.title}>EVOLUTION <br /> <span className="text-gradient">LIFESTYLE</span></h2>
        </div>

        <div className={styles.grid}>
          {images.map((img) => (
            <div key={img.id} className={`${styles.item} ${img.class}`}>
              <img src={img.src} alt="Gym Life" />
              <div className={styles.overlay}>
                <div className={styles.instaIcon}>
                  <InstaIcon size={30} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Magnetic>
            <button className={styles.followBtn}>
              FOLLOW @IRONJET_GYM <ExternalLink size={18} />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

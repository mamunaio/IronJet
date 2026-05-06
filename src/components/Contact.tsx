'use client';
import styles from './Contact.module.css';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.preTitle}>Find Us</span>
            <h2 className={styles.title}>VISIT THE <br /> <span className="text-gradient">TEMPLE</span></h2>
            
            <div className={styles.infoCards}>
              <a href="https://maps.google.com" target="_blank" className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <MapPin size={24} />
                </div>
                <div>
                  <span className={styles.cardTitle}>Location</span>
                  <span className={styles.cardValue}>123 Elite Plaza, Fitness District, NY</span>
                </div>
              </a>

              <a href="tel:+1234567890" className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Phone size={24} />
                </div>
                <div>
                  <span className={styles.cardTitle}>Call Us</span>
                  <span className={styles.cardValue}>+1 (234) 567-890</span>
                </div>
              </a>

              <a href="mailto:evolve@ironjet.com" className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Mail size={24} />
                </div>
                <div>
                  <span className={styles.cardTitle}>Email</span>
                  <span className={styles.cardValue}>evolve@ironjet.com</span>
                </div>
              </a>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <Clock size={24} />
                </div>
                <div>
                  <span className={styles.cardTitle}>Operating Hours</span>
                  <span className={styles.cardValue}>24/7 Access for Members</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157071441!2d-73.9878441!3d40.7579747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus" 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

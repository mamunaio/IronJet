'use client';
import styles from './HubSidebar.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Calendar, BarChart3, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function HubSidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const menuItems = [
    { icon: <User size={20} />, label: "My Profile", link: "/login" },
    { icon: <Calendar size={20} />, label: "My Schedule", link: "/programs" },
    { icon: <BarChart3 size={20} />, label: "Workout Stats", link: "#" },
    { icon: <Settings size={20} />, label: "Settings", link: "#" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className={styles.overlay}
          />
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={styles.sidebar}
          >
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={24} />
            </button>

            <div className={styles.header}>
              <div className={styles.userProfile}>
                <div className={styles.avatar}>MK</div>
                <div>
                  <h3 className={styles.userName}>Marcus Kane</h3>
                  <span className={styles.userTier}>Elite Member</span>
                </div>
              </div>
            </div>

            <nav className={styles.menu}>
              {menuItems.map((item, i) => (
                <Link key={i} href={item.link} className={styles.menuItem} onClick={onClose}>
                  <span className={styles.menuIcon}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className={styles.footer}>
              <button className={styles.logoutBtn}>
                <LogOut size={18} style={{ marginRight: '10px' }} /> Logout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

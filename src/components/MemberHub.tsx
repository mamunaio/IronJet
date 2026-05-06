'use client';
import { useEffect, useState } from 'react';
import styles from './MemberHub.module.css';
import { Search, User } from 'lucide-react';
import Link from 'next/link';
import Magnetic from './Magnetic';
import { motion } from 'framer-motion';

import SearchOverlay from './SearchOverlay';

import HubSidebar from './HubSidebar';

export default function MemberHub() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className={styles.hub}
      >
        <button className={styles.labelBtn} onClick={() => setIsSidebarOpen(true)}>
          <span className={styles.label}>Member Hub</span>
        </button>
        
        <Magnetic>
          <button className={styles.btn} aria-label="Search" onClick={() => setIsSearchOpen(true)}>
            <Search size={18} />
          </button>
        </Magnetic>
      
        <div className={styles.divider} />
        
        <Magnetic>
          <Link href="/login">
            <button className={styles.btn} aria-label="Client Login">
              <User size={18} />
            </button>
          </Link>
        </Magnetic>
      </motion.div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <HubSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}

'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CustomCursor() {
  const glowRef = useRef(null);
  const dotRef = useRef(null);

  useGSAP(() => {
    const glow = glowRef.current;
    const dot = dotRef.current;

    const xTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "none" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "none" });
    
    const gxTo = gsap.quickTo(glow, "x", { duration: 0.8, ease: "power3" });
    const gyTo = gsap.quickTo(glow, "y", { duration: 0.8, ease: "power3" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      gxTo(e.clientX);
      gyTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a');

      if (isInteractive) {
        gsap.to(dot, { scale: 10, opacity: 0.1, duration: 0.3 });
        gsap.to(glow, { scale: 1.5, opacity: 0.5, duration: 0.3 });
      } else {
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
        gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Large Spotlight Glow */}
      <div 
        ref={glowRef} 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 77, 0, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0, // Behind content but follows mouse
          transform: 'translate(-50%, -50%)',
        }} 
      />
      
      {/* Precision Inverting Dot */}
      <div 
        ref={dotRef} 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '6px',
          height: '6px',
          backgroundColor: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }} 
      />
    </>
  );
}

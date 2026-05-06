import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HorizontalPrograms from '@/components/HorizontalPrograms';
import Trainers from '@/components/Trainers';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Instagram from '@/components/Instagram';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <About />
      <HorizontalPrograms />
      <Trainers />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Instagram />
      <Footer />
    </main>
  );
}

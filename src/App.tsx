import styles from './style';

import { 
  Billing,
  Business,
  Button,
  CTA,
  CardDeal,
  Client,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials
} from './components';

function App() {

  return (
    <main className="bg-primary w-full overflow-hidden">
      <section id='navigation' className={`${styles.paddingX} ${styles.flexCenter}`}>
        <section id='navbar' className={`${styles.boxWidth}`}>
          <Navbar />
        </section>
      </section>

      <section id='main-content' className={`bg-primary ${styles.flexStart}`}>
        <section id='hero-section' className={`${styles.boxWidth}`}>
          <Hero />
        </section>
      </section>

      <section id='others' className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <section id='others-section' className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </section>
      </section>
    </main>
  )
}

export default App

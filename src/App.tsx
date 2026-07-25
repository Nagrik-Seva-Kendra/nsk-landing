import { LanguageProvider } from "./i18n/LanguageContext";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Security } from "./components/Security";
import { Testimonials } from "./components/Testimonials";
import { Quote } from "./components/Quote";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-bg font-body text-fg">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Features />
          <Security />
          <Testimonials />
          <Quote />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

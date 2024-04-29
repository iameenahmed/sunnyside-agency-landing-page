import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};
export default App;

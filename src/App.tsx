import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Booking from './components/Booking';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero onBook={scrollToBooking} />
      <Marquee />
      <Services onBook={scrollToBooking} />
      <Testimonials />
      <Gallery />
      <Team />
      <Booking />
      <About />
      <Footer />
    </div>
  );
}

export default App;

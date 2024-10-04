import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have the same styles
import icon1 from './icon1.svg'; // Import your images and icons
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import codingImage1 from './coding-image1.png';
import codingImage2 from './coding-image2.png';
import codingImage3 from './coding-image3.png';



const Navbar = () => (
  <nav>
    <div className="container">
      <h1><a href="#">devJam</a></h1>
      <ul>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#opportunities">Opportunities</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </nav>
);

const Header = () => (
  <header>
    <div className="container">
      <h2>Web Development: <br /> Shaping the Future</h2>
      <p>Craft innovative digital experiences. Build the web, transform the world.</p>
      <a href="#opportunities" className="btn">Explore Opportunities</a>
    </div>
  </header>
);

const ImpactSection = () => (
  <section id="impact">
    <div className="container">
      <h2>The Impact of Web Development</h2>
      <p>From e-commerce giants to startups, web development fuels online success. It empowers businesses, connects people, and drives innovation.</p>
      <div className="impact-grid">
        <div>
          <img src={icon1} alt="Business Growth Icon" />
          <h3>Business Growth</h3>
          <p>Websites drive sales, increase brand visibility, and help you reach a global audience.</p>
        </div>
        <div>
          <img src={icon2} alt="Communication Icon" />
          <h3>Enhanced Communication</h3>
          <p>Web applications connect people instantly, fostering collaboration and breaking down geographical barriers.</p>
        </div>
        <div>
          <img src={icon3} alt="Innovation Icon" />
          <h3>Innovation Driver</h3>
          <p>Web technologies are constantly evolving, creating new possibilities and pushing the boundaries of what's achievable online.</p>
        </div>
      </div>
    </div>
  </section>
);

const OpportunitiesSection = () => {
  const [index, setIndex] = useState(0);
  const slides = [codingImage1, codingImage2, codingImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const showSlide = (n) => {
    if (n >= slides.length) {
      setIndex(0);
    } else if (n < 0) {
      setIndex(slides.length - 1);
    } else {
      setIndex(n);
    }
  };

  return (
    <section id="opportunities" className="bg-light">
      <div className="container">
        <h2>Opportunities in Web Development</h2>
        <p>The demand for skilled web developers is higher than ever. Launch your career in a dynamic and rewarding field.</p>
        <ul className="opportunities-list">
          <li>Front-end Development</li>
          <li>Back-end Development</li>
          <li>Full-stack Development</li>
          <li>Web Design</li>
          <li>UX/UI Design</li>
        </ul>

        <div className="slider">
          <div className="slides" style={{ transform: `translateX(-${index * 100}%)` }}>
            {slides.map((slide, idx) => (
              <div className="slide" key={idx}>
                <img src={slide} alt={`People Coding ${idx + 1}`} />
              </div>
            ))}
          </div>
          <button className="prev" onClick={() => showSlide(index - 1)}>&#10094;</button>
          <button className="next" onClick={() => showSlide(index + 1)}>&#10095;</button>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact">
    <div className="container">
      <h2>Contact Us</h2>
      <p>Ready to start your web development journey? Get in touch!</p>
      <form action="#" method="post">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <p>&copy; 2024 devJam Insights. All rights reserved.</p>
    </div>
  </footer>
);

const App = () => {
  useEffect(() => {
    const impactItems = document.querySelectorAll('.impact-grid > div');

    const checkInView = () => {
      impactItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          item.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', checkInView);
    checkInView();

    return () => window.removeEventListener('scroll', checkInView);
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <ImpactSection />
      <OpportunitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;

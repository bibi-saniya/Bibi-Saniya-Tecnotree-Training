import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Travel Destination</h1>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="hero">
        <div className="container"><br/>
          <h2>Explore the World with Us</h2>
          <p>Discover new places, create unforgettable memories, and meet new people.</p>
          <button>Book Now</button>
        </div>
      </section>
      <section id="about">
        <div className="container"><br/>
          <h2>About Us</h2>
          <p>We are a team of passionate travelers who want to share our love of adventure with you. We offer a wide range of travel services to suit every budget and every type of traveler.
          We Provide Everything You Need To Experience The Luxury Vacation Of Your Dreams. Check Into Your Luxury Accommodations and Watch Your Trouble Melt Away. Customized Itinerary. Culinary Travels. Luxury Travel Agency. Services: Plan, Organize.
          </p>
        </div>
      </section>
      <section id="services">
        <div className="container"><br/>
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service">
              <img src={require("./1.jpg")} alt="Service 1" width="500px;" height="300"/>
              <h3>Flights</h3>
              <p>Book flights to your dream destination at the best prices.</p>
            </div><br/>
            <div className="service">
              <img src={require("./2.jpg")} alt="Service 2" width="500px;" height="300" />
              <h3>Accommodations</h3>
              <p>Find the perfect place to stay, whether it's a luxury hotel or a cozy hostel.</p>
            </div><br/>
            <div className="service">
              <img src={require("./3.jpg")} alt="Service 3" width="500px;" height="300"/>
              <h3>Tours</h3>
              <p>Discover the local culture and attractions with our guided tours.</p>
            </div><br/>
          </div>
        </div>
      </section>
      <section id="packages">
        <div className="container"><br/>
          <h2>Our Packages</h2>
          <div className="packages-grid">
            <div className="package"><br/>
              <img src={require("./1.gif")} alt="Package 1" width="500px;" height="300"/>
              <h3>Beach Vacation</h3>
              <p>Escape to a tropical paradise with our beach vacation package.</p>
              <button>Book Now</button>
            </div><br/>
            <div className="package">
              <img src={require("./2.gif")} alt="Package 2" width="500px;" height="300"/>
              <h3>City Break</h3>
              <p>Explore the sights and sounds of a vibrant city with our city break package.</p>
              <button>Book Now</button><br/>
            </div><br/>
            <div className="package">
              <img src={require("./3.gif")} alt="Package 3" width="500px;" height="300"/>
              <h3>Adventure Trip</h3>
              <p>Get your adrenaline pumping with our adventure trip package.</p>
              <button>Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container"><br/>
          <h2>Contact Us</h2><br/>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required /><br/><br/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br/><br/>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea><br/><br/>
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
  <footer>
    <div className="container">
      <p>&copy; 2023 Travel Destination. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </nav>
    </div>
  </footer>
</div>
);
}

export default App;


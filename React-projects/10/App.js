import React, { useRef } from 'react';
import './App.css';

function App() {
  const imagesRef = useRef(null);

  const scrollToImages = () => {
    imagesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Photography</h1>
          <button onClick={scrollToImages}>View Work</button>
        </div>
      </header>
      <section id="images" ref={imagesRef}>
        <div className="container">
          <div className="gallery">
          <img  class="a" src={require("./2.jpg")} />
          <img  class="b" src={require("./3.jpg")}/>
          <img   class="c"src={require("./4.jpg")} width="500" height="750"/>
          <img  class="d"src={require("./5.jpg")}/>
          <img  class="e"src={require("./6.jpg")}/>
          
          
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>Contact: photographer@Photography.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

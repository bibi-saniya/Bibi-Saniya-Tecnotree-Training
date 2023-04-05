import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Projects</a></li>
              <li><a href="#packages">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="hero">
        <div className="container"><br/>
          
          <img src={require("./r.jpg")} alt="Package 2" width="500px;" height="400"/>
         
        </div>
      </section>
      <section id="about">
        <div className="container"><br/>
          <h2>About Me</h2>
          <p>Iam Priya<br/>
            I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects. Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
          A key strength is communication; building strong relationships with people in order to deliver the best results.
          
          Recently, I completed an Open degree, including Business and Design modules at the Open University and I am now fully employed by Clearly Presented as a Digital Media Manager.
          </p>
        </div>
      </section>
      <section id="services">
        <div className="container"><br/>
          <h2>Projects</h2>
          <div className="services-grid">
            <div className="service">
              
              <h3>Database Management System</h3>
              <p>Database Management System (DBMS) software applications essentially structure and organize data files to provide easy access and standard data assortment. It essentially categorizes the data system so that the user can derive the required information from heaps of data</p>
            </div><br/>
            <div className="service">
              
              <h3>Computer Graphics</h3>
              <p>The Graphic Designer job description includes the entire process of defining requirements, visualizing and creating graphics including illustrations, logos, layouts and photos. You'll be the one to shape the visual aspects of websites, books, magazines, 
              product packaging, exhibitions and more.</p>
            </div><br/>
          </div>
        </div>
      </section>
      <section id="packages">
        <div className="container"><br/>
          <h2>Skills</h2>
          <div className="packages-grid">
            <div className="package"><br/>
              <p>Skill 1<br/> Skill 2<br/>Skill 3</p>
            
            </div><br/>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container"><br/>
        <h2>Contact</h2>
        <p>Mobile:+91 123456789<br/>Email-id:abc@gmail.com</p>
    </div>
  </section>
  <footer>
    <div className="container">
    <p>&copy; My Portfolio 2023</p>
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


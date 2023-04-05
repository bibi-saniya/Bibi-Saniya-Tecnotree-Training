import React from 'react';

function MainContent() {
  return (
    <main>
      <section>
        <h1>Welcome to Our Charity</h1>
        <p>We are a nonprofit organization committed to making a positive impact in our community.</p>
      </section>
      <section>
      <center><img src={require("./2.gif")} wigth="300" height="200"/></center>
        <h2>Upcoming Events</h2>
        <ul>
          <li>1.Cupcake contest-20/04/23</li>
<p>A riff on the normal bake off theme, a cupcake contest is sure to be a hit for anyone with a sweet tooth. Which includes most people. According to Mobile Cause, you’ll need the following to make your cupcake contest a hit:

Several teams of bakers
A panel of judges (we recommend using event sponsors)
An event ticketing platform
A venue with kitchen space<br/><br/>
<img src={require("./1.gif")} wigth="300" height="200"/></p>
          <li>2.Shoe drive- 12/05/23
<p>What’s a shoe drive? It’s an event where participants can donate their new or gently used shoes. Once collected, the host organization (in collaboration with other nonprofits) can trade shoes for donation checks to their charity. The donated shoes go to small business owners and members of developing countries in
 need of clothing or a leg up on their own entrepreneurial efforts.<br/><br/>
 <img src={require("./1.jpg")} wigth="300" height="200"/></p></li>
          
        </ul>
      </section>
      <section>
        <h2>How You Can Help</h2>
        <p>We rely on the generosity of our donors and volunteers to make our work possible. You can make a difference by:</p>
        <ul>
          <li>Donating money</li>
          <li>Donating goods</li>
          <li>Volunteering your time</li>
        </ul>
      </section>
    </main>
  );
}

export default MainContent;

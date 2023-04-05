import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>Explore my technical documentation on various topics.</p>
      <Link to="/getting-started">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default Homepage;

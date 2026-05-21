import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Paradise Nursery</h1>
      <div className="about-content">
        <p>
          Founded in 2020, Paradise Nursery has been bringing joy and greenery 
          to homes across the country. We believe that every home deserves a 
          touch of nature.
        </p>
        <p>
          Our mission is to provide high-quality, healthy houseplants that 
          thrive in indoor environments. We carefully select each plant from 
          sustainable growers who share our commitment to quality and 
          environmental responsibility.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✓ Expertly curated plant collection</li>
          <li>✓ Fast, secure shipping</li>
          <li>✓ Plant care guides and support</li>
          <li>✓ 30-day health guarantee</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
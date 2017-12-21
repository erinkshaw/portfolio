// Import the base CSS, if you're using webpack just import them straight.
// Else import them into your base CSS.
import React from 'react'
import '../node_modules/react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import './App.css'

export default () => (
  <div>
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <h1 className="Header_title">ReactStickyHeader</h1>

        <ul className="Header_links">
          <li className="Header_link">When</li>
          <li className="Header_link">Why</li>
          <li className="Header_link">About</li>
        </ul>
      </div>
    }
  />
    <section>
      <p>
        This section will be what the sticky header scrolls over before entering into
        sticky state. See the gif above or run the test story book to see examples.
      </p>
    </section>
  </div>
);

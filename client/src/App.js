import React, { useState } from "react";

// STYLES 🎨
import 'bulma/css/bulma.css';
import './App.css';

// FunctionalComponents
const Header = () => {
  const [active, setActive] = useState(false);
};


function App() {
  return (
    <div className="App">

      <div classname="main">
        <div className="buttons">
          <button class="button is-primary is-large">Primary</button>
          <button class="button is-link is-medium">Link</button>
          <button class="button is-info is-small">Info</button>
          <button class="button is-success is-medium">Success</button>
          <button class="button is-warning is-large">Warning</button>
          <button class="button is-danger is-medium">Danger</button>
          <button class="button is-black is-small">Black</button>
          <button class="button is-white is-medium">White</button>
          <button class="button is-dark is-large">Dark</button>
          <button class="button is-light is-medium">Light</button>
        </div>
        <div className="buttons">
          <button class="button is-success is-outlined">Outlined</button>
          <button class="button is-warning is-loading">Loading</button>
          <button class="button is-danger" disabled>Disabled</button>
        </div>
      </div>

    </div>
  )
}

export default App;

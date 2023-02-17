import React from "react";
import Imagem from '../imgsoftex/imagem';

import "./styles.css";

const HomePage = () => {
  return (
    <div id='homepage'>
      <header className='header'>
        <div className='space'>
          <div className='logo'>
            <Imagem />
          </div>
          <div className='title'>
            <h1>AdminSystem</h1>
          </div>
          <div className='options'>
            <ul>
              <li>Mídias</li>
              <li>Painéis</li>
              <li>AdminArea</li>
            </ul>
          </div>
          <div className='logout'>
            <button type="submit">Logout</button>
          </div>
        </div>
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
};

export default HomePage;
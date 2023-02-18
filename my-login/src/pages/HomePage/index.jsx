import React, { useContext } from "react";

import { AuthContext } from '../../contexts/auth';

import Imagem from '../imgsoftex/imagem';

import "./styles.css";

const HomePage = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

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
            <button onClick={handleLogout} >Logout</button>
          </div>
        </div>
      </header>
      <main>
        <p>Página main</p>
      </main>
      <footer>
        <p>Página footer</p>
      </footer>
    </div>
  );
};

export default HomePage;
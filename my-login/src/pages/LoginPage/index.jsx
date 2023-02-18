import React, { useState, useContext } from 'react';
import Imagem from '../imgsoftex/imagem';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

import "./styles.css";
import "./stylebuttons.css";

const LoginPage = () => {
  const { authenticated, login, logout } = useContext
    (AuthContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit', { email, password });
    login(email, password);
  }

  const handleLogout = () => {
    logout();
  }

  const navigateP = () => {
    navigate("/");
  }

  const isLogged = () => {
    let htmlElement;
    if (Boolean(authenticated) === true) {
      htmlElement = <div id='onsession'>
        <div className='tittleon'>Sessão já iniciada!</div>
        <div className='buttons'>
          <div className='buttonlogout'>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className='buttonhomepage'>
            <button onClick={navigateP}>HomePage</button>
          </div>
        </div>
      </div>;
    }
    else {
      htmlElement = <div id='offsession'>
        <div className='tittleoff'>Iniciar sessão abaixo!</div>
      </div>;
    }
    return (
      <div>
        {htmlElement}
      </div>
    );

  };

  return (
    <div id="login">
      <a
        href="https://softexpe.org.br/"
        target="_blank" rel="noreferrer"
      >
        <Imagem />
      </a>
      <h1 className='title'>Mídia Indoor</h1>
      <div className='sessionstatus'>{isLogged()}</div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder='Digite seu email...'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Digite sua senha...'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='actions'>
          <button type="submit">Entrar</button>
        </div>
      </form>
      <p className='paragraph'>Sistema administrativo para painéis de mídias</p>
    </div>
  )
}

export default LoginPage
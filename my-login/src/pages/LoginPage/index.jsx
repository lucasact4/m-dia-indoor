import React, { useState } from 'react';
import Imagem from '../imgsoftex/imagem';

import "./styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('submit', { email, password })
  }

  return (
    <div id="login">
      <a
        href="https://softexpe.org.br/"
        target="_blank" rel="noreferrer"
      >
        <Imagem />
      </a>
      <h1 className='title'>Mídia Indoor</h1>
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
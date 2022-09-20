import React from 'react'
import './Project.css'
import Catolico from '../../images/catolico.jpg'
import Netflix from '../../images/netflix.jpg'
import Secret from '../../images/secretWord.jpg'
import Pokedex from '../../images/pokedex.jpg'
import Storage from '../../images/storage.jpg'
import Login from '../../images/Login.jpg'

const Project = () => {
  return (
    <div className='project-content row'>
      <article className='project-card'>
        <img src={Catolico} alt="mini blog catolico" />
        <div className='project-modal'>
          <div>
            <span className='project-subtitle'>Website</span>
            <h3 className='project-title'>Mini Blog Catholic</h3>
            <a target={'_blank'} href="https://www.linkedin.com/feed/update/urn:li:activity:6967519138860658689/" className='project-button button'>
              <i className='ri-link'></i>
            </a>
          </div>
        </div>
      </article>

      <article className='project-card'>
        <img src={Netflix} alt="clone netflix" />
        <div className='project-modal'>
          <div>
            <span className='project-subtitle'>Website</span>
            <h3 className='project-title'>Clone Netflix</h3>
            <a target={'_blank'} href="https://lnkd.in/dSjjrT8i" className='project-button button'>
              <i className='ri-link'></i>
            </a>
          </div>
        </div>
      </article>

      <article className='project-card'>
        <img src={Secret} alt="secret word" />
        <div className='project-modal'>
          <div>
            <span className='project-subtitle'>Game</span>
            <h3 className='project-title'>Secret word</h3>
            <a target={'_blank'} href="https://lnkd.in/djTzt87x" className='project-button button'>
              <i className='ri-link'></i>
            </a>
          </div>
        </div>
      </article>

      <article className='project-card'>
        <img src={Pokedex} alt="pokedex" />
        <div className='project-modal'>
          <div>
            <span className='project-subtitle'>Website</span>
            <h3 className='project-title'>Pokedex</h3>
            <a target={'_blank'} href="https://lnkd.in/dd-sKhNP" className='project-button button'>
              <i className='ri-link'></i>
            </a>
          </div>
        </div>
      </article>

      <article className='project-card'>
        <img src={Storage} alt="storage" />
        <div className='project-modal'>
          <div>
            <span className='project-subtitle'>Website</span>
            <h3 className='project-title'>Storage</h3>
            <a target={'_blank'} href="https://prjtstorage.herokuapp.com/" className='project-button button'>
              <i className='ri-link'></i>
            </a>
          </div>
        </div>
      </article>

      <article className='project-card'>
        <img src={Login} alt="tela de login" />
        <div className='project-modal'>
          <div>
            <span className='project-subtitle'>Website</span>
            <h3 className='project-title'>Login</h3>
            <a target={'_blank'} href="https://github.com/ElderFausto/projetoPessoal" className='project-button button'>
              <i className='ri-link'></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Project
import React from "react";
import '../Css/Menu.css';
import logo from '../Images/App-logo.png';
import home from '../Images/home.png';
import book from '../Images/book.png';
import outil from '../Images/outil.png';
import calendar from '../Images/calendar.png';
import chatt from '../Images/chatt.png';
import live from '../Images/live.png';
import profit from '../Images/profit.png';
import settings from '../Images/settings.png';
import bot from '../Images/bot.png';
import folder from '../Images/folder.png';
import dot from '../Images/dot.png';
import startupgrade from '../Images/startupgrade.png';
import userdiversity from '../Images/userdiversity.png';
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
        
        <div className="App-menu">
        <div className='App-logo'>
          <div className='logo'>
            <p>Learn<strong style={{ color: 'var(--bleue)' }}>Genius</strong></p>
            <img src={logo} />
          </div>
        </div>
        <div className='scroll-menu'>
          <nav className='App-nav'>
            <ul>
              <li><NavLink to='/1' className={({isActive})=>isActive?'active':undefined}><img src={home} />Accueil</NavLink></li>
              <li><NavLink to='/formations'  className={({isActive})=>isActive?'active':undefined}><img src={book} />Formations</NavLink></li>
              <li><NavLink to='/3'  className={({isActive})=>isActive?'active':undefined}><img src={outil} />Outils & Pedagogies</NavLink></li>
              <li><NavLink to='/4'  className={({isActive})=>isActive?'active':undefined}><img src={folder} />Bibliotheque</NavLink></li>
              <li><NavLink to='/utilisateurs'  className={({isActive})=>isActive?'active':undefined}><img src={userdiversity} />Utilisateurs</NavLink></li>
              <li><NavLink to='/5'  className={({isActive})=>isActive?'active':undefined}><img src={calendar} />Calendrier</NavLink></li>
              <li><NavLink to='/6'  className={({isActive})=>isActive?'active':undefined}><img src ={chatt} />Message</NavLink></li>
              <li><NavLink to='/7'  className={({isActive})=>isActive?'active':undefined}><img src={live} />Webinaire</NavLink></li>
              <li><NavLink to='/8'  className={({isActive})=>isActive?'active':undefined}><img src={bot} />Robe IA</NavLink></li>
              <li><NavLink to='/9'  className={({isActive})=>isActive?'active':undefined}><img src={settings} />Paramettre</NavLink></li>
            </ul>
          </nav>
          <div className='App-upgrade'>
            <p><img src={startupgrade} />Pret a developper votre branch?</p>
            <p>Enrichissez votre expérience - Rejoignez notre communauté d'abonnés pour accéder à un contenu premium et des fonctionnalités avancées.</p>
            <NavLink>S'abonner</NavLink>
          </div>
        </div>
        <div className='footer-menu'>
          <span><img src={profit} />Kammogne val<i><img src={dot} /></i></span>
        </div>
      </div >

    );
};
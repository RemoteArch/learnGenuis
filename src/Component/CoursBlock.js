

import { NavLink } from 'react-router-dom';
import niveau from '../Images/niveau.png';
import imgback from '../Images/imgback.jpg';
import fondbleue from '../Images/fondbleue.jpg';
import leftarrow from '../Images/leftarrow.png';
import rigtharrow from '../Images/rigtharrow.png';
import arrowleft from '../Images/arrowleft.png';
import time from '../Images/time.png';
import '../Css/CoursBlock.css';
export default function CoursBlock() {
    return (
        <div className='App-coursblock'>
            <div className='entete-coursblock'>
                <div className='div'>
                    <h1>Les cours libres acces</h1>
                    <div>Affichage par theme<img src={arrowleft}/></div>
                </div>
                <div className='items-coursblock'>
                    <NavLink to='/Formations/detail cours' className='fa-item-cours'>
                        <div className='img-desc'>
                            <img src={imgback} />
                        </div>
                        <div className='txt-desc'>
                            <p>Reseau & securiser - cours</p>
                            <p className='fa-desc'>Concevez votre systeme TCP/IP</p>
                            <span><p><img src={niveau} /> facile</p><p><img src={time} /> 10 heures</p></span>
                            <p>Vous revez de creer non seulement des sites web mais aussi des application wed completement dynaiser alors React js est la pour ca...</p>
                        </div>
                    </NavLink>

                    <NavLink className='fa-item-cours'>
                        <div className='img-desc'>
                            <img src={fondbleue} />
                        </div>
                        <div className='txt-desc'>
                            <p>Developpement - cours</p>
                            <p className='fa-desc'>Apprener le framework React js</p>
                            <span><p><img src={niveau} /> facile</p><p><img src={time} /> 6 heures</p></span>
                            <p>Vous revez de creer non seulement des sites web mais aussi des application wed completement dynaiser alors React js est la pour ca...</p>
                        </div>
                    </NavLink>
                    <NavLink className='fa-item-cours'>
                        <div className='img-desc'>
                            <img src={imgback} />
                        </div>
                        <div className='txt-desc'>
                            <p>Bureatique - cours</p>
                            <p className='fa-desc'>Maitriser les bases des suites Offices</p>
                            <span><p><img src={niveau} /> facile</p><p><img src={time} /> 4 heures</p></span>
                            <p>Vous revez de creer non seulement des sites web mais aussi des application wed completement dynaiser alors React js est la pour ca...</p>
                        </div>
                    </NavLink>

                </div>
                <div className='slt-lvl-cours'>
                    <p><img src={leftarrow} /></p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p><img src={rigtharrow} /></p>
                </div>

            </div>
        </div>
    );
};
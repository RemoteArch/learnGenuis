

import { NavLink } from 'react-router-dom';

import '../Css/Formation.css';
import liste from '../Images/liste.png';
import plus from '../Images/plus.png';
import monospace from '../Images/monospace.png';
import start from '../Images/star.png';
import filter from '../Images/filter.png';
import tri from '../Images/tri.png';
import dot from '../Images/dot.png';
import group from '../Images/group.png';
import notifspeaker from '../Images/notifspeak.png';
import whitestar from '../Images/whitestar.png';
import search from '../Images/search.png';
import { useState } from 'react';

export default function FormModules() {
    const [showformationname, setShowformationname] = useState(false);
    const handleshowformationname = () => {
        setShowformationname(!showformationname);
    }
    const Formationname = () => {
        return (
            <div className='App-formationname'  style={showformationname ? styleformname.opacity : null}>
                <div className='center-formationname' style={showformationname ? styleformname.translatex : null}>
                    <div className='etetformname blc-formname'>
                        <h1>Creer une formation</h1>
                        <span onClick={handleshowformationname}>Annuler</span>
                    </div>
                    <div className='centerformname blc-formname'>
                        <p>Nom de la formation(Obligatoire)</p>
                        <input type='texte' placeholder='Ma formation' />
                    </div>
                    <div className='footerformname blc-formname'>
                        <NavLink to='/Formations/detail cours/AddFormation'>Creer</NavLink>
                    </div>
                </div>
            </div>
        );
    };
    const styleformname = () => [
        {
            translatex: {
                transform: ' translateY(45px)',
                backgroundColor: 'red',
                transition: 'all 2s ease',

            },
        },
        {
            opacity: {
                opacity: '0',
                transition: 'all 2s ease',
            }
        },
    ]
    return (
        <div className='entete-formation'>
            {showformationname && <Formationname />}
            <div className='fa-entete-formation'>
                <p>1 Formation</p>
                <div>
                    <span className='span' onClick={handleshowformationname}><img src={plus} />Creer une formation</span>
                    <i><img src={start} /></i>
                    <span><img src={monospace} /></span>
                    <span><img src={liste} /></span>
                </div>
            </div>
            <div className='center-formation'>
                <div className='entete-filter'>
                    <input type='search' placeholder='Rechercher une formation' />
                    <span className='span'><img src={search} /></span>
                    <div>
                        <span><img src={tri} /> Afficher les tri</span>
                        <span><img src={filter} /> Afficher les filtres</span>
                    </div>
                </div>
                <div className='formarution-list'>

                    <table>
                        <tr>
                            <th>Nom</th>
                            <th>Méthodologie</th>
                            <th>Membres</th>
                            <th>Favoris</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td><strong>Projet A</strong></td>
                            <td>Methode par modules prepares</td>
                            <td>10</td>
                            <td>5</td>
                            <td>
                                <button className="action-button">
                                    <img src={dot} className="trois-points" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Projet A</strong></td>
                            <td>Methode par modules prepares</td>
                            <td>10</td>
                            <td>5</td>
                            <td>
                                <button className="action-button">
                                    <img src={dot} className="trois-points" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Projet A</strong></td>
                            <td>Methode par modules prepares</td>
                            <td>10</td>
                            <td>5</td>
                            <td>
                                <button className="action-button">
                                    <img src={dot} className="trois-points" />
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Projet A</strong></td>
                            <td>Methode par modules prepares</td>
                            <td>10</td>
                            <td>5</td>
                            <td>
                                <button className="action-button">
                                    <img src={dot} className="trois-points" />
                                </button>
                            </td>
                        </tr>
                    </table>

                </div>

            </div>
            <div className='formarution-items'>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='formarution-item'>
                    <NavLink>
                        {/* <img src={tri} /> */}
                        <div><img src={whitestar} /></div>
                        <div><img src={dot} /></div>
                    </NavLink>
                    <div className='div'>
                        <div className='desc-form'>
                            <p><strong>React js</strong></p>
                            <p>Constitiuer de 0 modules et<br /> 0 Pages</p>
                        </div>
                        <div className='member-notif'>
                            <div className='member'>
                                <span><img src={group} /> 0</span>
                            </div>
                            <div className='notif'>
                                <span><img src={notifspeaker} /> 0</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
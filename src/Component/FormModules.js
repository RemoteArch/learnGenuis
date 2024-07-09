

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
export default function FormModules() {
    return (
        <div className='entete-formation'>
            <div className='fa-entete-formation'>
                <p>1 Formation</p>
                <div>
                    <NavLink to='/Formations/detail cours/AddFormation'><img src={plus} />Creer une formation</NavLink>
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
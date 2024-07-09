
import { NavLink } from 'react-router-dom';

import '../Css/Utilisateurs.css';
import importe from '../Images/import.png';
import add from '../Images/add.png';
import colonne from '../Images/colonne.png';
import filter from '../Images/filter.png';
import dot from '../Images/dot.png';

import search from '../Images/search.png';
export default function Utilisateurs() {
    return (
        <div className='App-utilisateur'>
            <div className='center-utilisateur'>
                <h1>Utilisateurs<span>BETA</span></h1>
                <div className='header-utilisateur'>
                    <p>1 Utilisateur</p>
                    <div className='fa-import-export'>
                        <span><img src={importe} /> Importer</span>
                        <span><img src={importe} /> Exporter</span>
                        <NavLink to='/utilisateurs/AddUser'><img src={add} /> Nouvel utilisateur</NavLink>
                    </div>
                </div>
                <div className='blc-table'>
                    <div className='entete-table'>
                        <div className='search'>
                            <input type='search' placeholder='Rechercher' />
                            <span><img src={search} /></span>
                        </div>
                        <div className='filter-table'>
                            <span><img src={filter} />Afficher les filtres</span>
                            <span><img src={colonne} />Colonnes</span>
                        </div>
                    </div>
                    <div className='utilisateur-list'>
                        <table>
                            <tr>

                                <th><input type='checkbox' /></th>
                                <th>Nom Prenom</th>
                                <th>@Email</th>
                                <th>Etat</th>
                                <th>Inscription</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>Yvan Kammogne</td>
                                <td>yvankammogne@ggmail.com</td>
                                <td><p><span></span>Active</p></td>
                                <td>10/23/12 15:32</td>
                                <td>
                                    <button className="action-button">
                                        <img src={dot} className="trois-points" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>Yvan Kammogne</td>
                                <td>yvankammogne@ggmail.com</td>
                                <td><p><span></span>Active</p></td>
                                <td>10/23/12 15:32</td>
                                <td>
                                    <button className="action-button">
                                        <img src={dot} className="trois-points" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>Yvan Kammogne</td>
                                <td>yvankammogne@ggmail.com</td>
                                <td><p><span></span>Active</p></td>
                                <td>10/23/12 15:32</td>
                                <td>
                                    <button className="action-button">
                                        <img src={dot} className="trois-points" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>Yvan Kammogne</td>
                                <td>yvankammogne@ggmail.com</td>
                                <td><p><span></span>Active</p></td>
                                <td>10/23/12 15:32</td>
                                <td>
                                    <button className="action-button">
                                        <img src={dot} className="trois-points" />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /></td>
                                <td>Yvan Kammogne</td>
                                <td>yvankammogne@ggmail.com</td>
                                <td><p><span></span>Active</p></td>
                                <td>10/23/12 15:32</td>
                                <td>
                                    <button className="action-button">
                                        <img src={dot} className="trois-points" />
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
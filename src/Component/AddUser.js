

import { useState } from 'react';
import img from '../Images/bot.png'
import adresse from '../Images/adresse.png'
import person from '../Images/person.png'
import country from '../Images/country.png'
import city from '../Images/city.png'
import '../Css/AddUser.css';
import { NavLink } from 'react-router-dom';
export default function AddUser() {
    const [showformat, setShowformat] = useState(false);
    const handleshowformat = () => {
        setShowformat(!showformat);
    }
    const [showrole, setshowrole] = useState(false);
    const handlerolet = () => {
        setshowrole(!showrole);
    }
    const [showwebinaire, setshowwebinaire] = useState(false);

    const handlewebinaire = () => {
        setshowwebinaire(!showwebinaire);
    }
    const [activeCon, setActiveCon] = useState(false);

    const handlectiveCon = () => {
        setActiveCon(!activeCon);
    }
    const styl = [
        {
            sltBtn: {
                backgroundColor: 'white',
                transform: 'translateX(1rem)',
            },
        },
        {
            sltCtn: {
                background: 'var(--linear-bg-black)',

            },
        },
        {
            transit: {
                transition: 'all 3s ease',

            },
        },
    ];

    return (
        <div className='App-adduser'>
            <p className='p-adduser'>Creation d'un nouvel utilisateur</p>
            <div className='blc-adduser'>
                <form>
                    <label>Nom*</label>
                    <div className='input-blc'>
                        <div><img src={person} /></div>
                        <input type='text' />
                    </div>

                    <label>Prenom*</label>
                    <div className='input-blc'>
                        <div><img src={person} /></div>
                        <input type='text' />
                    </div>
                    <label>Email*</label>
                    <div className='input-blc'>
                        <div>@</div>
                        <input type='text' />
                    </div>
                    <label>Pays*</label>
                    <div className='input-blc'>
                        <div><img src={country} /></div>
                        <input type='text' />
                    </div>
                    <label>Ville*</label>
                    <div className='input-blc'>
                        <div><img src={adresse} /></div>
                        <input type='text' />
                    </div>
                    <label>Adresse*</label>
                    <div className='input-blc'>
                        <div><img src={city} /></div>
                        <input type='text' />
                    </div>

                    <div className='slt-add-user slt-formation'>
                        <div className='titre-add' onClick={handleshowformat}>
                            <p className='title'>Ajouter l'utilisateur a des formations</p>
                            <div className='desc-add'>
                                <p>L'utilisateur aura accès aux formations sélectionnées et recevra un email avec ses identifiants de connexion</p>
                                <div style={showformat ? styl[1].sltCtn : null} className='slt-radio'><div style={showformat ? styl[0].sltBtn : null}></div></div>
                            </div>
                        </div>
                        {showformat && (
                            <div className='blc-table-user' style={showformat ? styl[2].transit : null}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Formation</th>
                                            <th>Membres</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>Cours de Programmation Web</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>Certification en Gestion de Projet</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>Initiation à l'Intelligence Artificielle</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>Formation en Marketing Digital</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>Préparation à la Certification Comptable</td>
                                            <td>1</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='fa-encadreur'>
                                    <h2>Encadreur</h2>
                                    <p>L'encadreur selectionner et lea Administrateurs pourront acceder a la page de cet utilisateur</p>
                                    <input type='texte' placeholder='Rechercher' />
                                </div>
                                <div className='fa-connexion'>
                                    <div className='add-connexion'>
                                        <div onClick={handlectiveCon} style={activeCon ? styl[1].sltCtn : null} className='slt-radio'><div style={activeCon ? styl[0].sltBtn : null}></div></div>
                                    </div>
                                    <div className='fa-fa-connexion'>
                                        <h2>Desactiver la connexion a deux pametres</h2>
                                        <p>Si vous avez activé la connexion a deux parametres avec envoi d'un SMS dans certaines formations, vous pouvez désactiver cette option pour ce membre uniquement. Aucun SMS ne lui sera envoyé à sa connexion et il pourra accéder à ses formations en renseignant simplement son adresse email et son mot de passe.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className='slt-add-user slt-formation'>
                        <div className='titre-add' onClick={handlerolet}>
                            <p className='title'>Profil d'utilisateur</p>
                            <div className='desc-add'>
                                <p>Cela vous permettra de différencier les niveaux d'accès et de permissions a votre Compte LearnGenius</p>
                                <div style={showrole ? styl[1].sltCtn : null} className='slt-radio' ><div style={showrole ? styl[0].sltBtn : null}></div></div>
                            </div>
                        </div>
                        {showrole && (
                            <div className='blc-slt-role blc-add-mod'>
                                <h2>Role</h2>
                                <input type='texte' placeholder='Selectionner un role' />
                            </div>
                        )}
                    </div>

                    <div className='slt-add-user slt-formation'>
                        <div className='titre-add' onClick={handlewebinaire}>
                            <p className='title'>Inscription a des Webinaires</p>
                            <div className='desc-add'>
                                <p>Specifier les conferences en live dont doit avoir acces l'utilisateur grace a un lien envoye</p>
                                <div style={showwebinaire ? styl[1].sltCtn : null} className='slt-radio'><div style={showwebinaire ? styl[0].sltBtn : null}></div></div>
                            </div>
                        </div>
                        {showwebinaire && (
                            <div className='blc-slt-webinaire blc-add-mod'>
                                <h2>Inscrire dans une conference live</h2>
                                <input type='texte' placeholder='Selectionner le Webinaire' />
                            </div>
                        )}
                    </div>
                    <div className='div-send'>
                        <NavLink to='/utilisateurs'>Annuler</NavLink>
                        <button>Valider</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
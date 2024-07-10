import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
export default function FormModules({data}) {

    const [showGrid , setshowGrid] = useState(false);

    const changeshow = ()=>{
        setshowGrid(showGrid ? false : true)
    }
    const [formationData , setFormationdata] = useState(Array());
    
    useEffect(() => {
        const updateData = async ()=>{
            let id = localStorage.getItem("user")
            setFormationdata(Array())
            data.forEach(form => {
                if(form.userid == id){
                    setFormationdata((prev)=>([...prev,form]))
                }
            });
        }
        updateData();
    },[]);

    return (
        <div className='entete-formation'>
            <div className='fa-entete-formation'>
                <p>{formationData.length} Formation</p>
                <div>
                    <span><img src={plus} />Creer une formation</span>
                    <i><img src={start} /></i>
                    
                    {!showGrid && <span onClick={changeshow}><img src={monospace} /></span>}

                    {showGrid && <span onClick={changeshow}><img src={liste} /></span>}
                </div>
            </div>
            { !showGrid && formationData.length !=0 &&
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
                        { formationData.map((formation)=>(
                            <tr>
                                <td><strong>{formation.nom}</strong></td>
                                <td>{formation.method}</td>
                                <td>{formation.nbreMembre}</td>
                                <td>{formation.nbreFavories}</td>
                                <td>
                                    <button className="action-button">
                                        <img src={dot} className="trois-points" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </table>

                </div>

            </div>
            }
            { showGrid &&
            <div className='formarution-items'>
                { formationData.map((formation)=>(
                    <div className='formarution-item'>
                        <NavLink>
                            {/* <img src={tri} /> */}
                            <div><img src={whitestar} /></div>
                            <div><img src={dot} /></div>
                        </NavLink>
                        <div className='div'>
                            <div className='desc-form'>
                                <p><strong>{formation.nom}</strong></p>
                                <p>Constitiuer de {formation.nbreModules} modules et<br /> {formation.nbrePages} Pages</p>
                            </div>
                            <div className='member-notif'>
                                <div className='member'>
                                    <span><img src={group} /> {formation.nbreAbonne}</span>
                                </div>
                                <div className='notif'>
                                    <span><img src={notifspeaker} /> {formation.nbreMembre}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            }
        </div>
    );
};
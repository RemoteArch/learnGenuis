

import { NavLink } from 'react-router-dom';
import niveau from '../Images/niveau.png';
import imgback from '../Images/imgback.jpg';
import fondbleue from '../Images/fondbleue.jpg';
import leftarrow from '../Images/leftarrow.png';
import rigtharrow from '../Images/rigtharrow.png';
import arrowleft from '../Images/arrowleft.png';
import time from '../Images/time.png';
import '../Css/CoursBlock.css';
export default function CoursBlock({data}) {

    return (
        <div className='App-coursblock'>
            <div className='entete-coursblock'>
                <div className='div'>
                    <h1>Les cours libres acces</h1>
                    <div>Affichage par theme<img src={arrowleft}/></div>
                </div>
                
                <div className='items-coursblock'>
                { data.map((formation)=>(
                    <NavLink to={'/Formations/detail/'+formation._id} className='fa-item-cours'>
                        <div className='img-desc'>
                            <img src={imgback} />
                        </div>
                        <div className='txt-desc'>
                            <p>{formation.categorie}</p>
                            <p className='fa-desc'>{formation.nom}</p>
                            <span><p><img src={niveau} /> {formation.niveau}</p><p><img src={time} /> {formation.nbreHeure} heures</p></span>
                            <p>{formation.desc}</p>
                        </div>
                    </NavLink>
                ))}
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
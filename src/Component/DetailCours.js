import { NavLink,useParams, Route, Routes } from 'react-router-dom';
import arrowback from '../Images/arrowback.png';
import infosorange from '../Images/infosorange.png';
import '../Css/DetailCours.css';
import { useEffect, useState } from 'react';
import config from '../config';

const Apercu = ({data}) => {
    return (
        <div>
            <video controls style={{ width: '80%', marginTop: '3rem', marginBottom: '1rem' }}>
                <source style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '450px',
                    display: 'block',
                }}
                    src={bl} type="video/mp4" />
            </video>
            <div>
                <p style={{ lineHeight: '2rem' }}>
                    {data.desc}
                </p>
            </div>
            <div className='prerequis-av-chapter'>
                <h1>Prérequis :</h1>
                <p> {data.prerequis}
                </p>
                <img src={infosorange} />
            </div>
        </div>
    );
};

export default function DetailCours() {
    const [showElement, setshowElement] = useState(0);
    const show = (index) => {
        setshowElement(index)
    }

    const [formation , setFormation] = useState()
    const { id } = useParams()

    useEffect(()=>{
        const fetchFormation = async ()=>{
            let rep = await fetch(config.apiUrl+"/getFormation?id="+id).then(rep=>rep.json())
            if(rep.statut == "success"){
                setFormation(rep.data)
            }
        }
        fetchFormation()
    } , [])

    return (
        <div>
            {formation != undefined && 
                <div className='App-detailcours'>
                    <div className='entete-detailcours'>
                        <NavLink to='/Formations'><img src={arrowback} />Tous les cours</NavLink>
                        <p className='txt-cat'>{formation.categorie}</p>
                        <h1>{formation.nom}</h1>
                        {/* <div className='blc-progress'>
                            <div className='blc-possession'>
                                <p>Progression</p>
                                <div className='blc-fa'>
                                    <div className='div'>
                                        <div className='fa-div'></div>
                                    </div>
                                    <p>0%</p>
                                </div>
                            </div>
                            <div className='blc-module'>
                                <p>Nombres de Modules</p>
                                <div className='blc-fa'>
                                    <div className='div'>
                                        <div className='fa-div'></div>
                                    </div>
                                    <p>{formation.nbreModules}</p>
                                </div>
                            </div>
                        </div> */}
                        <NavLink to={'/Formations/learn/'+formation._id}>Commencer le cours</NavLink>
                    </div>
                    <div className='link-page-cours'>
                        <ul>
                            <li><span onClick={() => show(0)} className={showElement === 0 ? "link-page" : undefined}>Apercu</span></li>
                            <li><span onClick={() => show(1)} className={showElement === 1 ? "link-page" : undefined}>Table de matiere</span></li>
                            <li><span onClick={() => show(2)} className={showElement === 2 ? "link-page" : undefined}>Formateurs</span></li>
                        </ul>
                    </div>
                    <div className='page-cours'>
                        {showElement === 0 && <Apercu data={formation} />}
                        {showElement === 1 && 's'}
                        {showElement === 2 && '8'}
                    </div>


                </div>
            }
        </div>
    );
};
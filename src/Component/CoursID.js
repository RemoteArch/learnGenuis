
import { NavLink , useParams } from 'react-router-dom';
import '../Css/CoursID.css';
import arrowback from '../Images/arrowback.png';
import whitestar from '../Images/whitestar.png';
import bl from '../Images/bl.mp4';
import imgback from '../Images/imgback.jpg';
import liste from '../Images/liste.png';
import infos from '../Images/infos.png';
import win from '../Images/win.png';
import beginhome from '../Images/beginhome.png';
import arrowrigth from '../Images/arrowrigth.png';
import { useState , useEffect } from 'react';
import config from '../config';

export default function CoursID() {
    const [isHovered, setIsHovered] = useState(false);
    const [showchapitreItems, setShowchapitreItems] = useState(0);
    const [idModule , setIdModule] = useState(0);
    const showclickchapter = (index) => {
        setShowchapitreItems(index);
    }

    const [formation , setFormation] = useState()
    const [module , setModule] = useState([])
    const { id } = useParams()

    const avancer = (event)=>{
        let val = idModule
        val++
        setIdModule(val)
    }

    useEffect(()=>{
        const fetchFormation = async ()=>{
            let rep = await fetch(config.apiUrl+"/getFormation?id="+id).then(rep=>rep.json())
            if(rep.statut == "success"){
                setFormation(rep.data)
            }
        }
        const fetchModule = async ()=>{
            let rep = await fetch(config.apiUrl+"/getModules?id="+id).then(rep=>rep.json())
            if(rep.statut == "success"){
                console.log(rep.data)
                setModule(rep.data)
            }
        }
        fetchModule()
        fetchFormation()
    } , [])

    return (
        <div>
            {formation != undefined &&
            <div className="App-coursid">
            <div className='back-link-detailcours'>
                <NavLink to={'/Formations/detail/'+formation._id}><img src={arrowback} />{formation.nom}</NavLink>
                <div className='show-elmt-dashboard'>
                    <div>
                        <img src={liste} />
                    </div>
                </div>
            </div>
            {/* <div className='lbl-dashbord-link'><p>Installation de l'environnement</p></div> */}
            <div className='dashbord-link'>
                <NavLink onClick={()=>setIdModule(0)}><img src={beginhome} /></NavLink>
                {module.map((i , index)=>(
                    <NavLink onClick={()=>setIdModule(index)}></NavLink>  
                ))}
                <NavLink onClick={()=>setIdModule(module.length-1)}><img src={win} /></NavLink>
            </div>
            <div className='blc-coursid'>
                <h1>{formation.nom}</h1>
                <div className='center-coursid' onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} style={{ opacity: isHovered ? 1 : 0.9, }}>
                    {/* <video className='entete-video-coursid' controls={isHovered} poster={imgback}>
                        <source style={{ width: '100%', height: '100%' }} src={bl} type="video/mp4" />
                    </video> */}
                </div>
                <div className='fa-center-coursid'>
                    <p>{module[idModule].desc}</p>
                </div>
                <div className='chapters-cours'>
                    {module[idModule].chapitres.map((chap)=>(
                        <div className='fa-chapter-cours'>
                            <h1 onClick={() => showclickchapter(0)}> {chap.titre}<img src={arrowrigth} /></h1>
                            {showchapitreItems === 0 &&
                                <div>
                                    {chap.contenus.map((content)=>(
                                        <p>{content.val}</p>
                                    ))}
                                </div>
                            }
                        </div>
                    ))}
                        {idModule < module.length &&
                            <div className='link-chapter-suiv'>
                                <span onClick={avancer}>Passer au chapitre suivant</span>
                            </div>
                        }
                </div>
            </div>
            </div>}
        </div>
    );
};
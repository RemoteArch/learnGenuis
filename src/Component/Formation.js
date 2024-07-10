
import { NavLink, Route, Routes } from 'react-router-dom';
import '../Css/Formation.css';
import FormModules from '../Component/FormModules';
import Membres from './Membres';
import CoursBlock from './CoursBlock';
import { useState,useEffect } from 'react';
import config from '../config';

export default function Formation() {
    const [activeBlock, setActiveBlock] = useState(0);

    const [formationData, setformationData] = useState([]);

    const handleBlockClick = (index) => {
        setActiveBlock(index);
    }
    useEffect(() => {
        const fetcFormationdata = async ()=>{
            let rep = await fetch(config.apiUrl+"/getFormations").then(rep=>rep.json())
            if(rep.statut == "success"){
                setformationData(rep.data)
            }
        }
        fetcFormationdata()
    },[]);

    return (
        <div className='App-formation'>
            <div className='entete-formation'>
                <h1>Formations</h1>
                <ul>
                    <li><span onClick={() => handleBlockClick(0)} className={ activeBlock === 0 ?'activelinkform':null} >Formations</span></li>
                    <li><span  onClick={() => handleBlockClick(1)} className={ activeBlock === 1 ?'activelinkform':null}>Se former</span></li>
                    <li><span  onClick={() => handleBlockClick(2)} className={ activeBlock === 2?'activelinkform':null}>Membres</span></li>
                </ul>
                {activeBlock === 0 && < FormModules data={formationData} />}
                {activeBlock === 1 && <CoursBlock data={formationData}/>}
                {activeBlock === 2 && <Membres data={formationData}/>}
            </div>


        </div>
    );
};

import { NavLink, Route, Routes } from 'react-router-dom';
import '../Css/Formation.css';
import FormModules from '../Component/FormModules';
import Membres from './Membres';
import CoursBlock from './CoursBlock';
import { useState } from 'react';
export default function Formation() {
    const [activeBlock, setActiveBlock] = useState(0);
    const handleBlockClick = (index) => {
        setActiveBlock(index);
    }
    return (
        <div className='App-formation'>
            <div className='entete-formation'>
                <h1>Formations</h1>
                <ul>
                    <li><span onClick={() => handleBlockClick(0)} className={ activeBlock === 0 ?'activelinkform':null} >Formations</span></li>
                    <li><span  onClick={() => handleBlockClick(1)} className={ activeBlock === 1 ?'activelinkform':null}>Se former</span></li>
                    <li><span  onClick={() => handleBlockClick(2)} className={ activeBlock === 2?'activelinkform':null}>Membres</span></li>
                </ul>
                {activeBlock === 0 && < FormModules />}
                {activeBlock === 1 && <CoursBlock/>}
                {activeBlock === 2 && <Membres />}
               
            </div>


        </div>
    );
};
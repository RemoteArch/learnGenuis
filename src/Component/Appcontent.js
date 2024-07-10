
import search from '../Images/search.png';
import '../Css/Appcontent.css';
import Formation from '../Component/Formation';
import AddUser from '../Component/AddUser';
import { Route, Router, Routes } from 'react-router-dom';
import DetailCours from './DetailCours';
import AddFormation from './AddFormation';
import CoursID from './CoursID';

export default function Appcontent({data}) {
    return (
        <div className='App-content'>
            <div className='hearder-content'>
                <p>Accueil</p>
                <div>
                    <input type='search' placeholder='Taper pour rechercher...' />
                    <button><img src={search} /></button>
                </div>
            </div>
            <div className='App-component'>
            
                <Routes>
                    <Route path='/1' element="ras1" />'
                    <Route path='/Formations/detail/:id' element={<DetailCours data={data}/>} />
                    <Route path='/Formations/learn/:id' element={<CoursID />} />
                    <Route path='/formations' element={<Formation data={data}/>} />
                    <Route path='/Formations/AddFormation' element={<AddFormation />} />
                    <Route path='/3' element="ras3"/>
                    <Route path='/4' element='ras4' />
                    <Route path='/6' element='ras6' />
                    <Route path='/7' element='ras7' />
                    <Route path='/8' element='ras8' />
                    <Route path='*' element='ras9' />
                </Routes>
            </div>
        </div>
    );
};
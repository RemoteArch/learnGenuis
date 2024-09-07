
import search from '../Images/search.png';
import '../Css/Appcontent.css';
import Formation from '../Component/Formation';
import AddUser from '../Component/AddUser';
import CoursID from '../Component/CoursID';
import { Route, Router, Routes } from 'react-router-dom';
import Utilisateurs from './Utilisateurs';
import DetailCours from './DetailCours';
import AddFormation from './AddFormation';
import {Webinaire ,WebinaireDetais ,WebinaireLive , WebinaireMembres} from './webinaire';

export default function Appcontent() {
    return (
        <div className='App-content'>
            <div className='hearder-content'>
                <p>Accueil</p>
                <div>
                    <input type='search' placeholder='Taper pour rechercher...' />
                    <button><img src={search} /></button>
                </div>
            </div>
            <div className='App-component h-screen overflow-y-scroll'>
                <Routes>
                    <Route path='/1' element='ras1' />
                    <Route path='/webinaire' element={<Webinaire/>} />
                    <Route path='/webinaire/details/:id' element={<WebinaireDetais/>} />
                    <Route path='/webinaire/live/:id' element={<WebinaireLive/>} />
                    <Route path='/webinaire/membres/:id' element={<WebinaireMembres/>} />
                    <Route path='/Formations/detail cours/AddFormation/:nom' element={<AddFormation />} />
                    <Route path='/Formations/learn/:id' element={<CoursID />} />
                    <Route path='/Formations/detail/:id' element={<DetailCours />} />
                    <Route path='/formations' element={<Formation />} />
                    <Route path='/utilisateurs/AddUser' element={<AddUser />} />
                    <Route path='/3' element='ras3' />
                    <Route path='/4' element='ras4' />
                    <Route path='/utilisateurs' element={<Utilisateurs />} />
                    <Route path='/6' element='ras6' />
                    <Route path='/7' element='ras7' />
                    <Route path='/8' element='ras8' />
                    <Route path='/9' element='ras9' />
                </Routes>
            </div>
        </div >
    );
};
import { NavLink } from 'react-router-dom';
import '../Css/AddFormation.css';
import back from '../Images/arrowback.png';
import dot from '../Images/dot.png';
import star from '../Images/star.png';
import { useState } from 'react';
import AddContenueForm from '../Component/AddContenuForm';
import AddDocumentsForm from '../Component/AddDocumentsForm';
import AddMembreForm from '../Component/AddMembreForm';
import AddParametreForm from '../Component/AddParametreForm';
import AddSuiviForm from '../Component/AddSuiviForm';
import DetailFormation from '../Component/DetailFormation';
export default function AddFormation() {
    const [activeBlock, setActiveBlock] = useState(0);

    const [formationData, setformationData] = useState([]);

    const handleBlockClick = (index) => {
        setActiveBlock(index);
    }

    return (
        <div className='App-addformation'>

            <div className='fa-center-add-formation'>
                <div className='link-back-form'>
                    <NavLink><img src={back} /> Retourner au formation</NavLink>
                </div>
                <div className='entete-name'>
                    <h1>React</h1>
                    <div className='div'>
                        <img src={star} />
                        <NavLink>Voire la formation</NavLink>
                        <NavLink>Modifier la formation</NavLink>
                        <div><img src={dot} /></div>
                    </div>
                </div>
                <div className='link-list'>
                    <ul>
                        <li onClick={() => handleBlockClick(0)} className={activeBlock === 0 ? 'activelinkform' : null}><span>Detail  de la Formation</span></li>
                        <li onClick={() => handleBlockClick(1)} className={activeBlock === 1 ? 'activelinkform' : null}><span>Membres</span></li>
                        <li onClick={() => handleBlockClick(2)} className={activeBlock === 2 ? 'activelinkform' : null}><span>Contenu</span></li>
                        <li onClick={() => handleBlockClick(3)} className={activeBlock === 3 ? 'activelinkform' : null}><span>Suivi</span></li>
                        <li onClick={() => handleBlockClick(4)} className={activeBlock === 4 ? 'activelinkform' : null}><span>Documents</span></li>
                        <li onClick={() => handleBlockClick(5)} className={activeBlock === 5 ? 'activelinkform' : null}><span>Parametres</span></li>
                    </ul>
                </div>
                <div className='ctn-add-form'>
                    {activeBlock === 0 && <DetailFormation />}
                    {activeBlock === 1 && <AddMembreForm />}
                    {activeBlock === 2 && <AddContenueForm />}
                    {activeBlock === 3 && <AddSuiviForm />}
                    {activeBlock === 4 && <AddDocumentsForm />}
                    {activeBlock === 5 && <AddParametreForm />}


                </div>
            </div>
        </div>
    );
};
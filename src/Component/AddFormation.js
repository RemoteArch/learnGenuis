import { NavLink } from 'react-router-dom';
import '../Css/AddFormation.css';
import back from '../Images/arrowback.png';
export default function AddFormation() {
    return (
        <div className='App-addformation'>
            <div className='fa-center-add-formation'>
                <div className='link-back-form'>
                    <NavLink><img src={back} /> Retourner au formation</NavLink>
                </div>
                <div className='entete-name'>
                    <h1>React</h1>
                    <div>
                        <img src={back} />
                        <NavLink>Voire la formation</NavLink>
                        <NavLink>Modifier la formation</NavLink>
                        <span><img src={back} /></span>

                    </div>
                </div>
            </div>
        </div>
    );
};
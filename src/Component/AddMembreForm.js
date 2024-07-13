


import '../Css/AddMembreForm.css';
import img from '../Images/memberlist.png';
export default function AddMembreForm() {
    return (
        <div className='App-addmembreform'>
            <div className='ctn-addmembre'>
                <img src={img} />
                <p>Ajouter et gerer les membres de votre formation</p>
                <p>Ajouter des membres</p>
                <p>Importer des membres</p>
            </div>
        </div>
    );
};








import '../Css/AddDocumentsForm.css';
import img from '../Images/memberlist.png';

export default function AddDocumentsForm() {
    return (
        <div className='App-addmembreform'>
            <div className='ctn-addmembre'>
                <img src={img} />
                <p>Ajouter et gerer vos documents de vos formation</p>
                <p>Ajouter des  Documents</p>
                <p>Importer des Documents</p>
            </div>
        </div>
    );
};
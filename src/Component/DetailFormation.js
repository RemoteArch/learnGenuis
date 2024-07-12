
import '../Css/DetailFormation.css';
export default function DetailFormation() {
    return (
        <div className='App-addresumeform'>


            <div className='form-section'>
                <label>Description</label>
                <textarea placeholder="Décrivez votre formation"></textarea>
            </div>

            <div className='form-section'>
                <label>Catégorie</label>
                <input type="text" placeholder="Entrez la catégorie" />
            </div>
            <div className='form-section'>
                <label>Methodologie</label>
                <input type="texte" placeholder="Télécharger une bannière" />
            </div>
            <div className='form-section'>
                <label>Bannière</label>
                <input type="file" placeholder="Télécharger une bannière" />
            </div>


        </div>
    );
};
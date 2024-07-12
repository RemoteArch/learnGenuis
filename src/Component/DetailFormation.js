
import '../Css/DetailFormation.css';
export default function DetailFormation() {
    return (
        <div className='App-addresumeform'>

            <form>
                <div className='form-section'>
                    <label>Description</label>
                    <p>Renseiller, elle sera placer a l'entete de la formation afin d'informer vos membres</p>
                    <textarea placeholder="Décrivez votre formation"></textarea>
                </div>

                <div className='form-section'>
                    <label>Catégorie</label>
                    <p>ceci permettra a vos membres de mieux specifier leur recherches dans vos formations</p>
                    <input type="text" placeholder="Entrez la catégorie" />
                </div>
                <div className='form-section'>
                    <label>Methodologie</label>
                    <p>Ceci renseigne comment est structurer votre formation(mais ne sera pas afficher a vos membres)</p>
                    <input type="texte" placeholder="Methodologie de la formation" />
                </div>
                <div className='form-section'>
                    <label>Difficulte</label>
                    <p>Ceci renseigne a vos membres le niveau de difficulter de la formation</p>
                    <input type="number" placeholder="Difficulter (1-5)" min={1} max={5} />
                </div>
                <div className='form-section'>
                    <label>Bannière</label>
                    <input type="file" placeholder="Télécharger une bannière" />
                </div>
                <button>Creer</button>

            </form>

        </div>
    );
};
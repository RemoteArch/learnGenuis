import '../Css/DetailFormation.css';
import config from '../config';
import upload from '../upload'

export default function DetailFormation({data , setData}) {

    const InputChange = (event) => {
        const { name, value } = event.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onUpload = ()=>{

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let myid = localStorage.getItem("user")
        console.log(data)
        try {
            let res = await fetch(config.apiUrl+"/addFormation?id="+myid , {method:"POST" , body: JSON.stringify(data)}).then(rep => rep.json());
            console.log(res)
            if(res.statut != "success"){
                switch(res.code){
                    case 1:
                        console.log("id user non reconnue")
                        break
                    default:
                        console.log(res.msg)
                }
            }else{
                document.getElementById("resultStatus").textContent = "Formations enregistrer avec succes"
                setData({...data , id:res.data})
            }
        } catch (error) {
            console.error(error);   
        }
    };

    return (
        <div className='App-addresumeform'>

            <form>
                <div className='form-section'>
                    <label>Description</label>
                    <p>Renseiller, elle sera placer a l'entete de la formation afin d'informer vos membres</p>
                    <textarea onChange={InputChange} value={data.desc} name='desc' placeholder="Décrivez votre formation"></textarea>
                </div>

                <div className='form-section'>
                    <label>Catégorie</label>
                    <p>ceci permettra a vos membres de mieux specifier leur recherches dans vos formations</p>
                    <input onChange={InputChange} value={data.categorie} name='categorie' type="text" placeholder="Entrez la catégorie" />
                </div>
                <div className='form-section'>
                    <label>Methodologie</label>
                    <p>Ceci renseigne comment est structurer votre formation(mais ne sera pas afficher a vos membres)</p>
                    <input onChange={InputChange} value={data.method} name='method' type="texte" placeholder="Methodologie de la formation" />
                </div>
                <div className='form-section'>
                    <label>Difficulte</label>
                    <p>Ceci renseigne a vos membres le niveau de difficulter de la formation</p>
                    <input onChange={InputChange} value={data.niveau} name='niveau' type="text" placeholder="Difficulter (facile, moyen, difficile)"/>
                </div>
                <div className='form-section'>
                    <label>Bannière</label>
                    <input type="file" id="file" placeholder="Télécharger une bannière" />
                </div>
                <p id='resultStatus'></p>
                <button onClick={handleSubmit}>Creer</button>
            </form>

        </div>
    );
};
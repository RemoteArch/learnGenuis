import { useState } from 'react';
import config from '../config';
import '../Css/tailwind.min.css';

export default function Register() {
    const [UserData, setUserData] = useState({
        name:"",
        firstname:"",
        email:"",
        country:"",
        city:"",
        address:"",
        password:""
    });

    const InputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await fetch(config.apiUrl+"/register" , {method:"POST" , body: JSON.stringify(UserData)}).then(rep => rep.json());
            console.log(res)
            if(res.statut != "success"){
                switch(res.code){
                    case 1:
                        console.log("l'email est deja utiliser")
                        break
                    default:
                        console.log(res.msg)
                }
            }
        } catch (error) {
            console.error(error);   
        }
    };

    return (

    <div className="bg-gray-100 font-sans">
        <div className="flex justify-center h-screen">
            <div className="bg-white shadow-lg rounded-lg px-8 py-4 my-4 w-full max-w-xl  overflow-y-scroll">
            <div className="mb-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800">Rejoignez LearnGenius</h1>
                <p className="text-gray-600">Créez votre compte gratuitement</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" >
                    Nom
                </label>
                <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="name" value={UserData.name} onChange={InputChange} type="text" placeholder="Entrez votre nom" required />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" >
                    Prénom
                </label>
                <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="firstname" value={UserData.firstname} onChange={InputChange} type="text" placeholder="Entrez votre prénom" required />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" >
                    Pays
                </label>
                <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="country" value={UserData.country} onChange={InputChange} type="text" placeholder="Entrez votre pays" required/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" >
                    Ville
                </label>
                <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="city" value={UserData.city} onChange={InputChange} type="text" placeholder="Entrez votre ville" required/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2" >
                    Adresse
                </label>
                <textarea className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="address" value={UserData.address} onChange={InputChange} rows="3" placeholder="Entrez votre adresse"></textarea>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Adresse e-mail
                </label>
                <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="email" value={UserData.email} onChange={InputChange} type="email" placeholder="Entrez votre adresse e-mail" required/>
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                    Mot de passe
                </label>
                <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" id="password" name="password" value={UserData.password} onChange={InputChange} type="password" placeholder="Entrez votre ville" required/>
                </div>
                <div className="flex items-center justify-between">
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out" type="submit">
                    S'inscrire
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-700 transition duration-300 ease-in-out" href="#">
                    Déjà un compte ?
                </a>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
};
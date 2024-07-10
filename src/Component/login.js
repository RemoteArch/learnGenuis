import { useState } from "react";
import config from '../config';
import logo from '../Images/App-logo.png';

export default function Login(){
    const [UserData, setUserData] = useState({
        username:"",
        password:"",
    });

    const [error, setError] = useState();

    const InputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        let res = await fetch(config.apiUrl+"/login" , {method:"POST" , body:JSON.stringify(UserData)}).then(rep => rep.json())
        console.log(res)
        if(res.statut == "success"){
            console.log(res.data)
            localStorage.setItem("user" , res.data)
            window.location.reload()
        }else{
            switch(res.code){
                case 1:
                    setError("nom d'utilisateur our mot de passe incorrect")
                    break;
                default:
                    setError(res.msg)
                    break;
            }
        }
    }

    return(
        <div className="bg-gray-200 h-screen flex items-center justify-center">
            <div className='max-w-xl bg-white py-10 px-16 rounded-lg shadow-lg'>
                <div className="flex items-center justify-center space-x-2">
                    <p className="font-bold text-lg">Learn<strong style={{ color: 'var(--bleue)' }}>Genius</strong></p>
                    <img className="w-6" src={logo} />
                </div>
                <p className="font-bold text-lg text-center my-3">login</p>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" >
                            Username
                        </label>
                        <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="username" value={UserData.username} onChange={InputChange} type="email" placeholder="Entrez votre usename" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" >
                            Password
                        </label>
                        <input className="shadow appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:shadow-outline" name="password" value={UserData.password} onChange={InputChange} type="password" placeholder="Entrez votre password" required />
                    </div>
                    <p>{error}</p>
                    <button className="bg-indigo-500 w-full hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out" type="submit">S'inscrire</button>
                </form>
            </div>
        </div>

    );
}

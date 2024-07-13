import React, { useEffect, useRef, useState } from 'react';
import upload from '../upload';
import config from '../config';
import Loading from './loading';
import { NavLink , useParams , useNavigate } from 'react-router-dom';
import nocamera from "../Images/nocamera.svg"

export function WebinaireDetais(){
  const [webinaire , setWebinaires] = useState(undefined);
  let navigate = useNavigate();
  let {id} = useParams()
  let myid = localStorage.getItem("user")
  let [btn , setbtn ] = useState("") 
    useEffect(()=>{
      const getWebinaire = async ()=>{
        let rep = await fetch(config.apiUrl+"/getWebinaires").then(rep => rep.json())
        console.log(rep)
        if(rep.statut == "success"){
          rep.data.forEach(data => {
            if(data._id == id){
              setWebinaires(data)
              if(data.userid == myid){
                setbtn("commencer le webinaire")
              }else{
                data.membres.forEach((membre)=>{
                  console.log(membre.userid ,myid)
                  if (membre.userid == myid) {
                    setbtn("participer au webinaire")
                    return
                  }else{
                    setbtn("S'inscrire");
                  }
                })
              }
            }
          });
        }
      }
      getWebinaire();
    },[])

    const handleBtnClick = async (event)=>{
      let text = event.target.textContent
      if (text == "S'inscrire"){
        let rep = await fetch(config.apiUrl+"/getUser?id="+myid).then(rep => rep.json())
        rep = await fetch(config.apiUrl+"/addWebinaire?action=update&id="+id , {method:"POST" , body:JSON.stringify({userid: myid , nom:rep.data.name+" "+rep.data.firstname, email:rep.data.email , statut:0})}).then(rep => rep.json())
        console.log(rep)
        window.location.reload()
      }else{
        navigate('/webinaire/live/'+id)
      }
    }

    return(
        <div className="flex justify-center items-center bg-gray-300 h-screen">
          { webinaire != undefined &&

            <div className="bg-white shadow-lg rounded-lg p-8 w-full mx-5 max-w-4xl">
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-gray-800">{webinaire.titre}</h1>
                <p className="text-gray-600">Rejoignez notre session en ligne</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div>
                <img src={config.apiUrl+"/files/"+webinaire.imagebanniere} alt="Webinaire" className="rounded-lg shadow-lg"/>
                </div>
                <div>
                <p className="text-gray-600 mb-6">
                    {webinaire.description}
                </p>
                <div className="mb-6">
                    <p className="font-bold text-gray-800 mb-2">Détails du Webinaire:</p>
                    <ul className="list-disc pl-6 text-gray-600">
                    <li>Heure: {webinaire.heuredebut} - {webinaire.heurefin}</li>
                    </ul>
                </div>
                    <button onClick={handleBtnClick} className="bg-indigo-500 w-full hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">{btn}</button>
                </div>
            </div>
            </div>
          }
          { webinaire == undefined && <Loading/>}
        </div>
    );
} 

export function WebinaireLive(){
  const [webinaire , setWebinaires] = useState(undefined);
  let myid = localStorage.getItem("user")
  let {id} = useParams()
    useEffect(()=>{
      const getWebinaire = async ()=>{
        let rep = await fetch(config.apiUrl+"/getWebinaires").then(rep => rep.json())
        console.log(rep)
        if(rep.statut == "success"){
          rep.data.forEach(data => {
            console.log(id , data._id)
            if(data._id == id){
              setWebinaires(data);
              console.log(data)
              return
            }
          });
        }
      }
      getWebinaire();
    },[]);

    const startVideoCapture = async () =>  {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        let videoOutput = document.getElementById("videoOutput")
        videoOutput.srcObject = stream;
      } catch (error) {
        console.error('Erreur lors de la capture vidéo:', error);
      }
    }

    const captureImage = async ()=> {
      let videoOutput = document.getElementById("videoOutput")
      const canvas = document.createElement('canvas');
      canvas.width = videoOutput.videoWidth;
      canvas.height = videoOutput.videoHeight;
      liveCapture(canvas , videoOutput)
    }

    const liveCapture = (canvas , video )=>{
      canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageUrl = canvas.toDataURL('image/png'); 
      console.log(imageUrl)
    }

    return (
      <div className='flex items-center justify-center h-screen'>
          { webinaire != undefined &&
          <div className='bg-gray-800 h-screen p-5'>
            <p className='text-center font-bold text-white text-lg mb-5'>{webinaire.titre}</p>
            <div className='flex space-x-5'>
            <div className='w-1/4 space-y-5 p-6'>
              <div className='bg-gray-700 p-4 rounded-md'>
                <p className='text-white font-bold text-lg'>Participants</p>
                <ul className='space-y-2 mt-2'>
                  <div className='flex justify-between items-center'>
                      <li className='text-white'>John Doe</li>
                      <img src={nocamera} className='text-white w-5 h-5'/>
                  </div>
                </ul>
              </div>
            </div>
            <div className='w-3/4 h-96 flex justify-center items-center'>
              { webinaire.myid == myid && 
                <video id="videoOutput" autoPlay className='rounded-md shadow-lg w-full h-full'/>
              }
              
            </div>
          </div>
          </div>
          }
          { webinaire == undefined && <Loading/>}
      </div>
    );
}

export function WebinaireAdd(){
    const [formdata , setFormdata] = useState({
      titre:"",
      description:"",
      heuredebut:"",
      heurefin:"",
      imagebanniere:""
    })
    let id = localStorage.getItem("user")
    const InputChange = (event) => {
      const { name, value } = event.target;
      setFormdata((prevState) => ({
          ...prevState,
          [name]: value,
      }));
    };

    const addWebinaire = async (event)=>{
      event.preventDefault()
      let file = document.getElementById("image-banniere").files[0]
      let ext = file.name.split(".").pop()
      let url = config.apiUrl+"/upload?filename="+Date.now()+"."+ext
      let rep = await upload(file , url)
      setFormdata((prevState) => ({
        ...prevState,
        imagebanniere: rep.file,
        iduser : id
      }));

      rep = await fetch(config.apiUrl+"/addWebinaire" , {method:"POST" , body:JSON.stringify(formdata)}).then(rep => rep.json())
      console.log(rep)
    }

    return(
        <div className="bg-white shadow-md rounded-lg m-8 p-5">
      <h2 className="text-2xl font-bold mb-6">Créer un Nouveau Webinaire</h2>
      <form onSubmit={addWebinaire}>
        <div className="mb-6">
          <label  className="block text-gray-700 font-medium mb-2">Titre du webinaire</label>
          <input type="text" id="titre" name="titre" onChange={InputChange} value={formdata.titre} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required/>
        </div>
        <div className="mb-6">
          <label  className="block text-gray-700 font-medium mb-2">Description du webinaire</label>
          <textarea id="description" name="description" onChange={InputChange} value={formdata.description} rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required></textarea>
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label  className="block text-gray-700 font-medium mb-2">Heure de début</label>
            <input type="time" name="heuredebut" onChange={InputChange} value={formdata.heuredebut} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required/>
          </div>
          <div>
            <label  className="block text-gray-700 font-medium mb-2">Heure de fin</label>
            <input type="time" id="heure-fin" onChange={InputChange} value={formdata.heurefin} name="heurefin" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required/>
          </div>
        </div>
        <div className="mb-6">
          <label  className="block text-gray-700 font-medium mb-2">Image de bannière</label>
          <input type="file" id="image-banniere" name="imagebanniere"  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" required/>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
          Créer le webinaire
        </button>
      </form>
        </div>
    );
}

export function WebinaireTable(){
    const [webinaires , setWebinaires] = useState([]);
    let id = localStorage.getItem("user")
    useEffect(()=>{
      const getWebinaire = async ()=>{
        let rep = await fetch(config.apiUrl+"/getWebinaires").then(rep => rep.json())
        console.log(rep)
        if(rep.statut == "success"){
          let data = []
          rep.data.forEach((el)=>{
            if (el.iduser == id) data.push(el);
          })
          setWebinaires(data)
        }
      }
      getWebinaire();
    },[])
    return(
        <div className="container mx-auto p-5">
    <div className="bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Titre</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Description</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Date et Heure</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          { webinaires.map(webinaire =>(
          <tr>
            <td className="px-4 py-3">{webinaire.titre}</td>
            <td className="px-4 py-3">{webinaire.description}</td>
            <td className="px-4 py-3">de {webinaire.heuredebut} à {webinaire.heurefin}</td>
            <td className="px-4 py-3">
              <NavLink to={"/webinaire/details/"+webinaire._id}><span className="text-blue-500 hover:text-blue-600">Afficher</span></NavLink>
              <NavLink to={"/webinaire/membres/"+webinaire._id}><span className="text-red-500 hover:text-red-600 ml-2">Supprimer</span></NavLink>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      {webinaires.length == 0 && <p className='font-bold text-gray-500 text-center py-5'>Vous n'avez aucun webinaire enregistrer</p>}

    </div>
  </div>
    );
}

export function WebinaireGrid(){
  const [webinaires , setWebinaires] = useState([]);
    useEffect(()=>{
      const getWebinaire = async ()=>{
        let rep = await fetch(config.apiUrl+"/getWebinaires").then(rep => rep.json())
        console.log(rep)
        if(rep.statut == "success"){
          setWebinaires(rep.data)
        }
      }
      getWebinaire();
    },[])
  return (
      <div className="bg-gray-100 font-sans">
          <div className="container mx-auto py-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
              {webinaires.map(webinaire => (
                <NavLink to={"/webinaire/details/"+webinaire._id}>
                  <a href="#" className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img src={config.apiUrl+"/files/"+webinaire.imagebanniere} alt={webinaire.titre} className="w-full h-48 object-cover"/>
                    <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{webinaire.titre}</h2>
                    <p className="text-gray-600">
                        {webinaire.description}
                    </p>
                    </div>
                  </a>
                </NavLink>
              ))}
              
              </div>
          </div>
      </div>
  );
}

export function WebinaireMembres(){
  let {id} = useParams()
  const [webinaire , setWebinaire] = useState({
    titre:"",
    membres:[]
  });
    useEffect(()=>{
      const getWebinaire = async ()=>{
        let rep = await fetch(config.apiUrl+"/getWebinaires").then(rep => rep.json())
        console.log(rep)
        if(rep.statut == "success"){
          console.log(rep.data)
          rep.data.forEach(element => {
            if(element._id == id) setWebinaire({titre:element.titre , membres:element.membres})
          });
        }
      }
      getWebinaire();
    },[])
  return(
    <div className="container mx-auto p-5">
    <h1 className="text-3xl font-bold mb-6">Participants a {webinaire.titre}</h1>
    <div className="bg-white shadow-md rounded-lg overflow-x-auto mb-6">
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Nom</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Email</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Rôle</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Statut</th>
            <th className="px-4 py-3 text-left font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
            {
              webinaire.membres.map(membre =>(
                <tr>
                  <td className="px-4 py-3">John Doe</td>
                  <td className="px-4 py-3">john.doe@example.com</td>
                  <td className="px-4 py-3">Développeur senior</td>
                  <td>
                    <p className="px-4 py-3 font-medium text-green-500">Approuvé</p>
                    <p className="px-4 py-3 font-medium text-yellow-500">En attente</p>
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-indigo-500 text-white font-medium px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick="validateAccess('john.doe@example.com', 'approved')">Approuver</button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
              {webinaire.membres.length == 0 && <p className='font-bold text-gray-500 text-center py-5'>Aucun membre enregistrer pour ce webinaire</p>}
    </div>
  </div>
  );
}

export function Webinaire(){
  const [page , setPage] = useState(0)
  return(
    <div>
      <div className="container flex space-x-5 items-center pt-5 px-5 border-b">
          <button onClick={() => setPage(0)} className={`hover:text-gray-400 text-gray-800 border-green-500 ${page===0 ? 'border-b-2' : ''}`} >Mes webinaires</button>
          <button onClick={() => setPage(1)} className={`hover:text-gray-400 text-gray-800 border-green-500 ${page===1 ? 'border-b-2' : ''}`}>Autres Webinaires</button>
          <button onClick={() => setPage(2)} className={`hover:text-gray-400 text-gray-800 border-green-500 ${page===2 ? 'border-b-2' : ''}`}>Ajouter un Webinaire</button>
      </div>
      <div className=''>
          {page ==0 && <WebinaireTable/>}
          {page ==1 && <WebinaireGrid/>}
          {page ==2 && <WebinaireAdd/>}
      </div>
      {/* <Routes>
          <Route path='/webinaire/grid' element={<WebinaireGrid/>} />
          <Route path='/webinaire/add' element={<WebinaireAdd/>} />
          <Route path='/webinaire/table' element={<WebinaireTable/>} />
          <Route path='/webinaire/membres' element={<WebinaireMembres/>} />
      </Routes> */}
    </div>
  );
}
// import { NavLink } from 'react-router-dom';
import './App.css';
import Appcontent from './Component/Appcontent';
import CalenderProfit from './Component/CalenderProfit';
import Menu from './Component/Menu';
import Register from './Component/register';
import Login from './Component/login';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import config from './config';
import VideoConference from './Component/visio';
import HomePage from './Component/home'
import './Css/tailwind.min.css';

function App() {

  const [data , setData] = useState({ connect: false })

  useEffect(() => {
    const fetchUserData = async () => {
      let id = localStorage.getItem("user");
      if (id) {
        try{
          let data = await fetch(config.apiUrl + "/getUser?id="+id).then((rep) => rep.json());
          if (data.statut === "success") {
            setData({ connect: true, ...data.data });
            // console.log(data.data)
          } else {
            switch (data.code) {
              case 1:
                console.log("compte d'utilisateur absent");
                setData({ connect: false });
                break;
              default:
                console.log(data.msg);
                break;
            }
          }
        }catch(err){
          console.error(err)
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/visio' element={<VideoConference/>} />
        <Route path='*' element={
          <div>
            {!data.connect && <Login/>}
            {data.connect &&
              <div className="App">
                <Menu data={data} />
                <Appcontent data={data} />
                <CalenderProfit data={data} />
              </div>
            }
          </div>
        } />
    </Routes>

  );
}

export default App;

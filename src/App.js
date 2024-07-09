// import { NavLink } from 'react-router-dom';
import './App.css';
import Appcontent from './Component/Appcontent';
import CalenderProfit from './Component/CalenderProfit';
import Menu from './Component/Menu';


function App() {
  return (
    <div className="App">
      <Menu />
      <Appcontent />
      <CalenderProfit />
    </div>
  );
}

export default App;

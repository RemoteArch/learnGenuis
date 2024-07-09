
import '../Css/Membres.css'
import memberlist from '../Images/memberlist.png';
export default function () {
    return (
        <div className="App-membre">
            <div className='center-member'>
                <img src={memberlist}/>
                <p>Aucun membre de formation</p>
            </div>
        </div>
    );
};

import '../Css/CalenderProfit.css';
import bel from '../Images/bel.png'
import mail from '../Images/mail.png'
import profit from '../Images/profit.png'
import dotverti from '../Images/dotverti.png'
import arrowleft from '../Images/arrowleft.png'
import arrowrigth from '../Images/arrowrigth.png'
import { useState ,useEffect } from 'react';
import config from '../config';

export default function CalenderProfit({data}) {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear());
    const [notifs , setNotif] = useState(Array(0).fill({nom:"hello" , desc:"un nouveau poste a 19h30"}));
    
    useEffect(()=>{
        const fetchNotify = async ()=>{
            let rep = await fetch(config.apiUrl+"/getNotification").then(rep=>rep.json())
            if(rep.statut == "success"){
                setNotif(rep.data)
            }
        }
        fetchNotify();
      },[])

    const daysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getMonthName = (month) => {
        const monthNames = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
        return monthNames[month];
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handlePrevYear = () => {
        setCurrentYear(currentYear - 1);
    };

    const handleNextYear = () => {
        setCurrentYear(currentYear + 1);
    };

    const renderCalendar = () => {
        const currentMonth = selectedDate.getMonth();
        const daysInCurrentMonth = daysInMonth(currentYear, currentMonth);
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

        const calendarDays = [];

        // Ajouter les jours du mois précédent
        for (let i = 0; i < firstDayOfMonth; i++) {
            const prevMonthDate = new Date(currentYear, currentMonth, 1 - firstDayOfMonth + i);
            calendarDays.push(
                <div
                    key={`prev-${i}`}
                    className="calendar-day prev-month"
                    onClick={() => handleDateClick(prevMonthDate)}
                >
                    {prevMonthDate.getDate()}
                </div>
            );
        }

        // Ajouter les jours du mois courant
        for (let i = 1; i <= daysInCurrentMonth; i++) {
            const currentDate = new Date(currentYear, currentMonth, i);
            const isSelected = currentDate.toDateString() === selectedDate.toDateString();
            calendarDays.push(
                <div
                    key={`current-${i}`}
                    className={`calendar-day ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleDateClick(currentDate)}
                >
                    {i}
                </div>
            );
        }

        // Ajouter les jours du mois suivant
        const remainingDays = 42 - calendarDays.length; // 42 = 6 semaines * 7 jours
        for (let i = 1; i <= remainingDays; i++) {
            const nextMonthDate = new Date(currentYear, currentMonth + 1, i);
            calendarDays.push(
                <div
                    key={`next-${i}`}
                    className="calendar-day next-month"
                    onClick={() => handleDateClick(nextMonthDate)}
                >
                    {i}
                </div>
            );
        }

        return calendarDays;
    };

    return (
        <div className='App-Calenderprofit'>
            <div className='header-calendar'>
                <span><img src={bel} /><i></i></span>
                <span><img src={mail} /><i></i></span>
                <div>{data.name} <span><img src={profit} /></span></div>
            </div>
            <div className='overflow-calendar'>
                <div className='center-calendar'>
                    <div className='calendar'>
                        <div className="calendar-header">
                            <button onClick={handlePrevYear}><img src={arrowleft}/></button>
                            <span>{currentYear}</span>
                            <button onClick={handleNextYear}><img src={arrowrigth}/></button>
                        </div>
                        <div className="calendar-body">
                            <div className="calendar-weekdays">
                                <div>Dim</div>
                                <div>Lun</div>
                                <div>Mar</div>
                                <div>Mer</div>
                                <div>Jeu</div>
                                <div>Ven</div>
                                <div>Sam</div>
                            </div>
                            <div className="calendar-days">{renderCalendar()}</div>
                        </div>
                       
                    </div>
                </div>
                <div className='footer-calendar'>
                    <div className='txt-entete'>
                        <p>Poste & notification</p>
                        <span onClick={()=>setNotif(Array())}>Tout effacer</span>
                    </div>

                    <div className='notifs-items'>
                        {
                            notifs.map((notif) =>(
                                <div className='notif-item'>
                                    <span><img src={profit} /></span>
                                    <div>
                                        <p>{notif.nom}</p>
                                        <p>{notif.desc}</p>
                                    </div>
                                    <span><img src={dotverti} /></span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
    ;
}
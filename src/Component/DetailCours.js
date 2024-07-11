

import { NavLink, Route, Routes } from 'react-router-dom';
import arrowback from '../Images/arrowback.png';
import bl from '../Images/bl.mp4';
import infosorange from '../Images/infosorange.png';
import '../Css/DetailCours.css';
import { useState } from 'react';

const Apercu = () => {
    return (
        <div>
            <video controls style={{ width: '80%', marginTop: '3rem', marginBottom: '1rem' }}>
                <source style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '450px',
                    display: 'block',
                }}
                    src={bl} type="video/mp4" />
            </video>
            <div>
                <p style={{ lineHeight: '2rem' }}>
                    <strong>Le protocole TCP/IP</strong> (<strong>Transmission Control Protocol/Internet Protocol</strong>) est la base des réseaux
                    <br />
                    informatiques
                    modernes, notamment d'Internet. Développé dans les années 1970 par l'Agence de Projets de Recherche Avancée (<strong>ARPA</strong>) du Département de la Défense américain, TCP/IP est devenu le standard de facto pour la communication entre réseaux hétérogènes.
                    <br /><br />
                    Le modèle TCP/IP est composé de quatre couches distinctes :
                    <br /><br />
                    <strong> La couche physique :</strong> elle gère la transmission des bits bruts sur le réseau physique (<strong>câbles, ondes radio, fibres optiques, etc.</strong>).
                    <br /><br />
                    <strong> La couche liaison de données :</strong> elle s'occupe de l'adressage local et de la détection/correction d'erreurs au niveau du lien de communication.
                    <br /><br />
                    <strong> La couche réseau :</strong> c'est le cœur du protocole TCP/IP. Elle gère l'adressage logique (<strong>adresses IP</strong>) et le routage des paquets entre différents réseaux. La couche réseau la plus connue est l'Internet Protocol (<strong>IP</strong>).
                    <br /><br />
                    <strong>La couche transport :</strong> elle assure un transport fiable et ordonné des données entre applications. Les principaux protocoles de cette couche sont le Transmission Control Protocol (<strong>TCP</strong>) et le User Datagram Protocol (<strong>UDP</strong>).
                    <br /><br />
                    Le modèle TCP/IP se distingue par son <strong>architecture ouverte et décentralisée</strong>, permettant une interopérabilité et une évolutivité extrêmement élevées. Chaque couche communique avec la couche immédiatement supérieure et inférieure, selon un ensemble de règles bien définies.
                    <br /><br />
                    L'adoption généralisée de TCP/IP a permis l'essor d'Internet, en permettant à tout type d'appareil (<strong>ordinateurs, smartphones, objets connectés, etc.</strong>) de communiquer de manière standardisée. Aujourd'hui, TCP/IP reste la base de la plupart des réseaux locaux et étendus, assurant une connectivité transparente entre utilisateurs et applications. </p>
            </div>
            <div className='prerequis-av-chapter'>
                <h1>Prérequis :</h1>
                <p> Vous êtes débutant en réseaux informatiques ? Ce cours s'adresse à vous ! Je vous conseille toutefois de suivre le cours Faites vos premiers pas dans le monde de l'électronique numérique pour vous familiariser avec le <strong>code binaire.</strong>
                    <br />
                    <br />
                    <strong>Outil nécessaire :</strong> L'outil de simulation<strong> Cisco Packet Tracer</strong>
                </p>
                <img src={infosorange} />
            </div>
            <div className='div-link-av-coursid'>
                <NavLink className='link-av-coursid' to='/Formations/detail cours/coursID'>Commencer le cours</NavLink>
            </div>
        </div>
    );
};
export default function DetailCours() {
    const [showElement, setshowElement] = useState(0);
    const show = (index) => {
        setshowElement(index)
    }
    return (
        <div className='App-detailcours'>
            <div className='entete-detailcours'>
                <NavLink to='/Formations'><img src={arrowback} />Tous les cours</NavLink>
                <p className='txt-cat'>Developpement</p>
                <h1>Concevez votre systeme TCP/IP</h1>
                <div className='blc-progress'>
                    <div className='blc-possession'>
                        <p>Progression</p>
                        <div className='blc-fa'>
                            <div className='div'>
                                <div className='fa-div'></div>
                            </div>
                            <p>6%</p>
                        </div>
                    </div>
                    <div className='blc-module'>
                        <p>Nombres de Modules</p>
                        <div className='blc-fa'>
                            <div className='div'>
                                <div className='fa-div'></div>
                            </div>
                            <p>3/6</p>
                        </div>
                    </div>
                </div>
                <NavLink to='/Formations/detail cours/coursID'>Commencer le cours</NavLink>
            </div>
            <div className='link-page-cours'>
                <ul>
                    <li><span onClick={() => show(0)} className={showElement === 0 ? "link-page" : undefined}>Apercu</span></li>
                    <li><span onClick={() => show(1)} className={showElement === 1 ? "link-page" : undefined}>Table de matiere</span></li>
                    <li><span onClick={() => show(2)} className={showElement === 2 ? "link-page" : undefined}>Formateurs</span></li>
                </ul>
            </div>
            <div className='page-cours'>
                {showElement === 0 && <Apercu />}
                {showElement === 1 && 's'}
                {showElement === 2 && '8'}
            </div>


        </div>
    );
};
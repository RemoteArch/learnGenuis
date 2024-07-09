
import { NavLink } from 'react-router-dom';
import '../Css/CoursID.css';
import arrowback from '../Images/arrowback.png';
import whitestar from '../Images/whitestar.png';
import bl from '../Images/bl.mp4';
import imgback from '../Images/imgback.jpg';
import liste from '../Images/liste.png';
import infos from '../Images/infos.png';
import win from '../Images/win.png';
import beginhome from '../Images/beginhome.png';
import arrowrigth from '../Images/arrowrigth.png';
import { useState } from 'react';


export default function CoursID() {
    const [isHovered, setIsHovered] = useState(false);
    const [showchapitreItems, setShowchapitreItems] = useState(0);
    const showclickchapter = (index) => {
        setShowchapitreItems(index);
    }
    return (
        <div className="App-coursid">
            <div className='back-link-detailcours'>
                <NavLink to='/Formations/detail cours'><img src={arrowback} />Concevez votre systeme TCP/IP</NavLink>
                <div className='show-elmt-dashboard'>
                    <div>
                        <img src={liste} />
                    </div>
                </div>
            </div>
            <div className='lbl-dashbord-link'><p>Installation de l'environnement</p></div>
            <div className='dashbord-link'>
                <NavLink><img src={beginhome} /></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink></NavLink>
                <NavLink><img src={win} /></NavLink>
            </div>
            <div className='blc-coursid'>
                <h1>Decouvrez l'organisation du reseau</h1>
                <div className='center-coursid' onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} style={{ opacity: isHovered ? 1 : 0.9, }}>
                    {/* <video className='entete-video-coursid' controls={isHovered} poster={imgback}>
                        <source style={{ width: '100%', height: '100%' }} src={bl} type="video/mp4" />
                    </video> */}
                </div>
                <div className='fa-center-coursid'>
                    <p>Le streaming, les mails, le cloud. Je parie que vous avez déjà utilisé au moins un de ces services. D’après vous quel est leur point commun ? La réponse: Internet, tout simplement. <strong>Internet est un immense réseau</strong> qui relie des milliards de machines.

                        <br /> <br />  Dans ce cours, vous allez apprendre à <strong>créer votre propre réseau informatique </strong>et à utiliser l'outil de simulation <strong>Cisco Packet Tracer</strong>. Vous découvrirez également les <strong>modèles OSI et TCP/IP</strong>, qui vous permettront de prendre du recul sur votre pratique.<br />  <br />

                        Si vous voulez comprendre les rouages des réseaux informatiques et d'Internet, n’hésitez plus et rejoignez-moi dans ce cours !</p>
                </div>
                <div className='infos-msg-object'>
                    <p>Objectifs pédagogiques :</p>
                    <p>

                        À l’issue de ce cours, vous serez capable de :
                        <ul>
                            <li>Créer l'architecture physique de votre réseau ;</li>
                            <li>Configurer votre réseau pour assurer la communication ;</li>
                            <li>Optimiser votre réseau en ajoutant des services.</li>
                        </ul>
                    </p>
                    <img src={infos} />
                </div>
                <div className='chapters-cours'>
                    <div className='fa-chapter-cours'>
                        <h1 onClick={() => showclickchapter(0)}> Appréhendez la notion de réseau<img src={arrowrigth} /></h1>
                        {showchapitreItems === 0 &&
                            <p>

                                Tous les jours, vous naviguez sur Internet, vous recevez et envoyez des mails et, éventuellement, vous vous connectez à votre réseau social préféré. Vous utilisez Internet au quotidien, mais vous êtes-vous déjà demandé comment tout cela fonctionnait ?
                                <br />
                                <br />
                                Quand vous consultez vos mails par exemple, vous envoyez une requête, c’est-à-dire un message, à une machine qui stocke vos mails et ceux d’autres usagers.
                                <br />
                                <br />
                                Cette machine est souvent située à plusieurs centaines de kilomètres de chez vous, parfois même des milliers.
                                <br />
                                <br />
                                Avant d’arriver à destination, votre message va traverser des dizaines de câbles et équipements, être converti, amplifié, chiffré, atténué. Une véritable épopée.

                                L’ensemble de ces étapes est possible grâce au réseau qui permet d’interconnecter une multitude de machines entre elles.
                                <br />
                                <br />
                                Les réseaux ont donc pour but de permettre la transmission d’informations. À l’époque des tout premiers ordinateurs, le seul moyen de transmission était la disquette, qui était transportée d’un ordinateur à un autre : assez peu pratique... :/
                                <br />
                                <br />
                                Depuis, nous avons à disposition un réseau mondial appelé Internet. Ce réseau est composé de millions de réseaux plus petits, et c’est précisément ces derniers qui vont nous intéresser pour créer notre premier réseau.
                                <br /><br />
                                Il existe différents types de réseaux informatiques :
                                <br /><br />
                                <strong>Les LAN (Local Area Network)</strong>
                                <br /><br />
                                Les LAN sont des réseaux à échelle locale, tels que les réseaux domestiques de votre domicile, ou les réseaux à l’échelle d’une entreprise.
                                <br /><br />
                                <strong>Les MAN (Metropolitan Area Network)</strong>
                                <br /><br />
                                Les MAN sont déployés à l’échelle d’une ville. Il peut s’agir, par exemple, de réseaux universitaires qui connectent différentes facultés d’une même ville. Ils sont eux-mêmes constitués de LAN qui, ensemble, forment un MAN.
                                <br /><br />
                                <strong>Les WAN (Wide Area Network)</strong>
                                <br />
                                <br />
                                Les WAN sont des réseaux à échelle mondiale, dont le plus connu est Internet. Ce dernier est lui-même composé de MAN et de LAN.
                            </p>
                        }
                    </div>
                    <div className='fa-chapter-cours'>
                        <h1 onClick={() => showclickchapter(1)}>Découvrez votre première mission<img src={arrowrigth} /></h1>
                        {showchapitreItems === 1 &&
                            <p>Maintenant que vous connaissez les différents éléments qui constituent un réseau, l’heure est venue de vous présenter votre première mission !
                                <br /><br />
                                Vous venez d’arriver au sein d’une <strong>ESN</strong> (entreprise de services du numérique) spécialisée dans la conception de réseaux. Votre manager vous demande d’intervenir pour <strong>Tinos</strong>, une toute nouvelle auto-école.
                                <br /><br />
                                Pour le moment, l’entreprise est constituée d’une seule personne : le dirigeant, M. Falman.
                                <br /><br />
                                Votre mission est de connecter son PC à un serveur de stockage situé dans les locaux de l’entreprise : une pièce de 20 m² prêtée par la collectivité pour soutenir le lancement de l’activité.
                                <br /><br />
                                Le dirigeant souhaite avant tout avoir un réseau sécurisé. Il a beaucoup insisté sur ce point.
                                <br /><br />
                                Pour mener à bien cette première mission, vous décidez de réaliser en premier lieu le schéma de ce réseau. Votre manager vous propose d’utiliser un<strong> outil de simulation.</strong>
                            </p>
                        }
                    </div>
                    <div className='link-chapter-suiv'>
                        <span>Passer au chapitre suivant</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
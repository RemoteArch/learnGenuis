import '../Css/AddContenueForm.css';
import React, { useState } from 'react';
import file from '../Images/file.png'
import addmod from '../Images/addmod.png'
import folder from '../Images/folder.png'
import arrowleft from '../Images/arrowleft.png'
import delmod from '../Images/delmod.png'
import editmod from '../Images/editmod.png'
import upload from '../upload';
import config from '../config';

const AddContenueForm = ({data}) => {
    const [modules, setModules] = useState([]);
    const [showAddModuleModal, setShowAddModuleModal] = useState(false);
    const [newModuleTitle, setNewModuleTitle] = useState('');
    const [showAddPageModal, setShowAddPageModal] = useState(false);
    const [newPageTitle, setNewPageTitle] = useState('');
    const [selectedModule, setSelectedModule] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [newModuleDescription, setNewModuleDescription] = useState('');

    const [videomodule , setvideomodule] = useState()

    const [editedDifficulty, setEditedDifficulty] = useState(itemToEdit?.difficulty || 1);
    const [editedDuration, setEditedDuration] = useState(itemToEdit?.duration || 1);

    const [showpage, setShowpage] = useState(false);


    const [newModuleDifficulty, setNewModuleDifficulty] = useState('');
    const [newModuleDuration, setNewModuleDuration] = useState('');

    const handleshowpage = () => {
        setShowpage(!showpage);
    }
    const [numModules, setNumModules] = useState(0);


    const handleAddModule = async () => {
        if (newModuleTitle.trim() !== '') {
            setModules([...modules, { description: newModuleDescription, duree: newModuleDuration, difficulte: newModuleDifficulty, title: newModuleTitle, pages: [] }]);
            setNumModules(numModules + 1);
            let file = document.getElementById("moduleVideo").files[0]
            if (file == undefined) return
            let filename = Date.now()+"."+file.name.split(".").pop()
            let rep = await upload(file , config.apiUrl+"/upload?filename="+filename)
            let dat = {idcour:data.id, video:rep.file ,decs: newModuleDescription, duree: newModuleDuration, difficulte: newModuleDifficulty, titre: newModuleTitle, chapitres: [] }
            console.log(dat)
            rep = await fetch(config.apiUrl+"/addModule" , {method:"POST" , body:JSON.stringify(dat)}).then(rep => rep.json())
            console.log(rep)
            localStorage.setItem("idMod", rep.data)
            setShowAddModuleModal(false);

        }
    };
    const [numpage, setNumpage] = useState(0);

    const handleAddPage = (module) => {
        setSelectedModule(module);
        setShowAddPageModal(true);
        setNumpage(numpage + 1);
    };

    const confirmAddPage = async () => {
        let titre = document.getElementById("addPageTitle").value
        if (titre.trim() !== '') {
            const updatedModules = modules.map((m) =>
                m.id === selectedModule.id
                    ? { ...m, pages: [...m.pages, { title: newPageTitle, id: Date.now() }] }
                    : m
            );
            setModules(updatedModules);
            let idMod = localStorage.getItem("idMod")
            let filevideo = document.getElementById("addPageFileVideo").files[0]
            let fileimg = document.getElementById("addPageFileImg").files[0]
            let text = document.getElementById("addPagedesc").value
            console.log(filevideo,fileimg)
            let data = { title: titre, desc:text , module:idMod , video:"" , img:""}
            if (filevideo != undefined){
                let filename = Date.now()+"."+filevideo.name.split(".").pop()
                let rep = await upload(filevideo , config.apiUrl+"/upload?filename="+filename);
                data.video = rep.file
            } 
            if (fileimg != undefined){
                let filename = Date.now()+"."+fileimg.name.split(".").pop()
                let rep = await upload(fileimg , config.apiUrl+"/upload?filename="+filename);
                data.img = rep.file
            }
            console.log(data);
            setNewPageTitle('');
            let rep = await fetch(config.apiUrl+"/addModule?action=updatechap" , {method:"POST" , body:data}).then(rep => rep.json())
            setShowAddPageModal(false);
        }
    };

    const cancelAddPage = () => {
        setShowAddPageModal(false);
    };

    const handleDeleteItem = (item) => {
        setItemToDelete(item);
        setShowDeleteModal(true);
    };

    const confirmDeleteItem = () => {
        if (itemToDelete.pages) {
            // Deleting a module
            setModules(modules.filter((m) => m.id !== itemToDelete.id));
        } else {
            // Deleting a page
            const updatedModules = modules.map((m) =>
                m.id === itemToDelete.moduleId
                    ? { ...m, pages: m.pages.filter((p) => p.id !== itemToDelete.id) }
                    : m
            );
            setModules(updatedModules);
        }
        setShowDeleteModal(false);
    };

    const cancelDeleteItem = () => {
        setShowDeleteModal(false);
    };

    const handleEditItem = (item) => {
        setItemToEdit(item);
        setEditedTitle(item.title);
        setEditedDifficulty(item.difficulte)
        setEditedDuration(item.duree)
        setNewModuleDescription(item.description)
        setShowEditModal(true);
        console.log(editedTitle);
        console.log(editedDuration);
        console.log(editedDifficulty);
    };

    const confirmEditItem = () => {
        if (itemToEdit.pages) {
            // Editing a module
            const updatedModules = modules.map((m) =>
                m.id === itemToEdit.id ? { ...m, title: editedTitle } : m
            );
            setModules(updatedModules);
        } else {
            // Editing a page
            const updatedModules = modules.map((m) =>
                m.id === itemToEdit.moduleId
                    ? {
                        ...m,
                        pages: m.pages.map((p) =>
                            p.id === itemToEdit.id ? { ...p, title: editedTitle } : p
                        )
                    }
                    : m
            );
            setModules(updatedModules);
        }
        setShowEditModal(false);
    };

    const cancelEditItem = () => {
        setShowEditModal(false);
    };

    return (
        <div>
            <div className='div-add-mod'>
                <div>
                    <p>{numModules} module</p>
                    <p>{numpage} Page</p>
                    <p>0 Membre</p>
                </div>
                <button className='btn-add-mod' onClick={() => setShowAddModuleModal(true)} ><img src={addmod} /> Ajouter un module</button>
            </div>

            {showAddModuleModal && (
                <div className="add-module-modal">
                    <div className="modal-content">
                        <div className='entete-mod'>
                            <h2>Ajouter un module de formation</h2>
                        </div>
                        <div className='label'><label>Nom du module</label></div>
                        <input
                            type="text"
                            value={newModuleTitle}
                            onChange={(e) => setNewModuleTitle(e.target.value)}
                            placeholder="Titre du module"
                        />
                        <div className='label'>
                            <label>difficulte</label>
                            <p>Marquer ici la Difficulté de ce module pour vos membres</p>
                        </div>
                        <input
                            type="text"
                            value={newModuleDifficulty}
                            onChange={(e) => setNewModuleDifficulty(e.target.value)}
                            placeholder="Difficulté"
                        />
                        <div className='label'>
                            <label>Durée</label>
                            <p>Cella renseigne vos membres de la duree de la formation</p>
                        </div>
                        <input
                            type="number"
                            value={newModuleDuration}
                            onChange={(e) => setNewModuleDuration(e.target.value)}
                            placeholder="Durée (en heures)"
                            min={1}
                        />
                        <div className='label'>
                            <label>Selectionner une video d'entrer qui presentera le contenue generale du module</label></div>
                        <input
                            type="file"
                            id="moduleVideo"
                        />
                        <div className='label'>
                            <label>Description</label>
                            <p>Si renseignée, la description est affichée sur la page d'accueil de la formation et sur la page "Sommaire".</p>
                        </div>
                        <textarea
                            value={newModuleDescription}
                            onChange={(e) => setNewModuleDescription(e.target.value)}
                            placeholder="Description du module"
                        ></textarea>
                        <div className='btn-act'>

                            <button onClick={handleAddModule}>Ajouter</button>
                            <button onClick={() => setShowAddModuleModal(false)}>Annuler</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="module-list">
                {modules.map((module) => (
                    <div key={module.id} className="module-card">
                        <section >
                            <div className="module-info">
                                <img className='deroul-page' onClick={handleshowpage} src={arrowleft} alt="Module Icon" />
                                <img src={folder} alt="Module Icon" />
                                <div className='name-mod'>
                                    <span>{module.title}</span>
                                    <p>- {numpage} Pages</p>
                                </div>
                            </div>
                            <div className="module-actions">
                                <button onClick={() => handleAddPage(module)}><img src={addmod} /></button>
                                <button onClick={() => handleEditItem(module)}><img src={editmod} /></button>
                                <button onClick={() => handleDeleteItem(module)}><img src={delmod} /></button>
                            </div>
                        </section>
                        {showpage && (<div className="page-list">
                            {module.pages.map((page) => (
                                <div key={page.id} className="page-card">
                                    <div className="page-info">
                                        <img src={file} alt="Page Icon" />
                                        <div className='name-fil'>
                                            <span>{page.title}</span>
                                            <p>0 membres</p>
                                        </div>
                                    </div>
                                    <div className="page-actions">
                                        <button onClick={() => handleEditItem(page)}><img src={editmod} /></button>
                                        <button onClick={() => handleDeleteItem({ ...page, moduleId: module.id })}>
                                            <img src={delmod} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>)}
                    </div>
                ))}
            </div>

            {showAddPageModal && (
                <div>
                    <div className="add-page-modal">
                        <div className="modal-content">
                            <div className='entete-mod'>
                                <h2>Ajouter une nouvelle page</h2>
                            </div>
                            <div className='label'><label>Nom de la page</label></div>
                            <input
                                type="text"
                                id="addPageTitle"
                                placeholder="Titre du module"
                            />
                            <div className='label'>
                                <label>difficulte</label>
                                <p>Marquer ici la Difficulté de ce module pour vos membres</p>
                            </div>
                            <input
                                type="number"
                                id="addPageniveau"
                                placeholder="Difficulté (1-5)"
                                min={1}
                                max={5}
                            />
                            <div className='label'>
                                <label>Durée</label>
                                <p>Cella renseigne vos membres de la duree de la formation</p>
                            </div>
                            <input
                                type="number"
                                id="addPageduree"
                                value={newModuleDuration}
                                onChange={(e) => setNewModuleDuration(e.target.value)}
                                placeholder="Durée (en heures)"
                                min={1}
                            />
                            <div className='label'>
                                <label>Video</label>
                                
                                <p>Selectionner une video d'entrer qui presentera le contenue generale du module (.mp4)</p>
                            </div>
                            <input
                                id="addPageFileVideo"
                                type="file"
                            />
                            {/* nnevelpapp */}
                            <div className='label'>
                                <label>Description</label>
                                <p>Si renseignée, la description est affichée sur la page d'accueil de la formation et sur la page "Sommaire".</p>
                            </div>
                            <textarea
                                id="addPagedesc"
                                placeholder="Description du module"
                            ></textarea>
                            <div className='label'>
                                <label>Image(s)</label>
                                <p>Selectionner une suite d'images a integrer a vos pages, et serons structurer selon vos categories (.jpeg, .gif, .jpg)</p>
                            </div>
                            <input
                                id="addPageFileImg"
                                type="file"
                            />
                            <div className='btn-act'>
                                <button onClick={confirmAddPage}>Ajouter</button>
                                <button onClick={cancelAddPage}>Annuler</button>
                            </div>
                        </div>
                    </div>




                </div>


            )}

            {showDeleteModal && (
                <div className="delete-modal">
                    <div className="delete-modal-content">
                        <h2>Supprimer "{itemToDelete?.title}"?</h2>
                        <div className="delete-modal-actions">
                            <button className="cancel-button" onClick={cancelDeleteItem}>
                                Annuler
                            </button>
                            <button className="confirm-button" onClick={confirmDeleteItem}>
                                Confirmer
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showEditModal && (


                <div>
                    <div className="edit-modal">
                        <div className="edit-modal-content modal-content">
                            <div className='entete-mod'>
                            <h2>Modifier "{itemToEdit?.title}"</h2>
                            </div>
                            <div className='label'><label>Nouveau nom du module</label></div>
                            <input
                                type="text"
                                value={editedTitle}
                                onChange={(e) => setEditedTitle(e.target.value)}
                                placeholder="Titre du module"
                            />
                            <div className='label'>
                                <label>Renseigner la difficulte</label>
                                <p>Vous pouvez modifier la difficulter a tout moment</p>
                            </div>
                            <input
                                type="number"
                                value={editedDifficulty}
                                onChange={(e) => setEditedDifficulty(e.target.value)}
                                placeholder="Difficulté (1-5)"
                                min={1}
                            />
                            <div className='label'>
                                <label>Durée</label>
                                <p>Cella renseigne vos membres de la duree de la formation</p>
                            </div>
                            <input
                                type="number"
                                value={editedDuration}
                                onChange={(e) => setEditedDuration(e.target.value)}
                                placeholder="Durée (en heures)"
                                min={1}
                            />
                            <div className='label'>
                                <label>Video</label>
                                <p>Selectionner une video d'entrer qui presentera le contenue generale du module (.mp4)</p>
                            </div>
                            <input
                                type="file"
                            />
                            {/* nnevelpapp */}
                            <div className='label'>
                                <label>Description</label>
                                <p>Si renseignée, la description est affichée sur la page d'accueil de la formation et sur la page "Sommaire".</p>
                            </div>
                            <textarea
                                value={newModuleDescription}
                                onChange={(e) => setNewModuleDescription(e.target.value)}
                                placeholder="Description du module"
                            ></textarea>
                            <div className='label'>
                                <label>Image(s)</label>
                                <p>selectionner la nouvelle image  (.jpeg, .gif, .jpg)</p>
                            </div>
                            <input
                                type="file"
                            />
                            <div className='btn-act'>

                                <button onClick={cancelEditItem}>Modifier</button>
                                <button onClick={confirmEditItem}>Annuler</button>
                            </div>
                        </div>
                    </div>




                </div>



            )}
        </div>
    );
};

export default AddContenueForm;
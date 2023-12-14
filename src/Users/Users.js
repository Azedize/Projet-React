import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import { Alert } from 'react-bootstrap';

export default function Users() {
    const dispatch = useDispatch()
    const Users = useSelector(data => data.Users);
    const Reservation = useSelector(data => data.Reservation);
    const [id, setId] = useState("");
    const [name, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [Function, setFunction] = useState("");

    const handleDelete = (id) => {
        const u = Users.find(el => el.id === id);
        if (u.email === localStorage.getItem('email') ){
            Swal.fire({
                icon: "warning",
                title: "Cet Compte De Toi n'est Pas Autoriser De Suprimer ...",

            });
        }else{
            dispatch({ type: "Delete_User", payload: id })

        }
    }
    const handleEnregistrer = () => {
        if (!(name === "" || email === "" || !Function) ) {
            dispatch({ type: "Add_User", payload: { id: uuidv4(), nom: name, email: email, function: Function}})
            handleClear()
        }else{
            Swal.fire({
                icon: "error",
                title: "Les champs Tous Required...",

            });
        }
}
    const handleRemplirForm = (id) => {
        const user = Users.find((u) => u.id === id)
        setId(id)
        setNom(user.nom)
        setEmail(user.email)
        setFunction(user.function)
    }
    const handleClear = () => {
        setNom("")
        setEmail("")
        setFunction("")
    }
    const handleModifier = () => {
        dispatch({ type: "Update_User", payload: { id: id, nom: name, email: email, function: Function } })
        handleClear()
        setId("")
    }

    const handleRadioChange = (event) => {
        setFunction(event.target.value);
    };
    return (
        <div style={{ padding: "20px" }}>
            <div className="parent">
                <div className="register">
                    <div className='form' >
                        <label htmlFor="Nom">Nom</label>
                        <input
                            className='input'
                            id="Nom"
                            type="text"
                            placeholder="Nom..."
                            value={name}
                            onChange={(e) => setNom(e.target.value)}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            className='input'

                            id="email"
                            type="email"
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div >
                            <input
                                className='radio'
                                type="radio"
                                value="Admin"
                                name="fun"
                                onChange={handleRadioChange}
                                checked={Function === 'Admin'}
                            />
                            Admin <br />
                            <input
                                className='radio'
                                type="radio"
                                value="Client"
                                name="fun"
                                onChange={handleRadioChange}
                                checked={Function === 'Client'}
                            />
                            Client
                        </div>

                        <div style={{ textAlign: "center" }}>
                            {id ? <button onClick={() => handleModifier()}>Modifier</button>
                                : <button onClick={() => handleEnregistrer()}>Enregister</button>}
                            <button onClick={() => handleClear()}>Clear</button>
                        </div>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Function</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {Users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.nom}</td>
                            <td>{user.email}</td>
                            <td>{user.function}</td>
                            <td>

                                <FontAwesomeIcon icon={faPenToSquare} style={{ color: '#74afb9', marginRight: '5px', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleRemplirForm(user.id)} />
                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleDelete(user.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {Reservation.length > 0 ?
            <table style={{marginTop:'20px'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>title</th>
                        <th>avis</th>
                        <th>prix</th>
                        <th>nom</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {Reservation.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.title}</td>
                            <td>{user.avis}</td>
                            <td>{user.prix}$</td>
                            <td>{user.nom}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            :
                <Alert key="warning" variant="warning" className='m-3'>
            Le Tableau De Reservation n'est Pas Afficher Car N'est Pas Des Reservation
            </Alert>}
        </div>
    );
}

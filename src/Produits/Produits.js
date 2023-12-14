import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

export default function Users() {
    const dispatch = useDispatch()
    const P1 = useSelector(data => data.Campagne);
    const P2 = useSelector(data => data.Villes_emblematiques);
    const P3 = useSelector(data => data.Ville);
    const P4 = useSelector(data => data.Desert);

    const handleDelete = (id, cat) => {
        if (cat === "Campagne") {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });

                    dispatch({ type: "DEL_PRODUCT_COMPAGNE", payload: id });
                }
            });
        } else if (cat === "Villes_emblematiques") {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });

                    dispatch({ type: "DEL_PRODUCT_Villes_emblematiques", payload: id });
                }
            });
        } else if (cat === "Ville") {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });

                    dispatch({ type: "DEL_PRODUCT_Ville", payload: id });
                }
            });
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });

                    dispatch({ type: "DEL_PRODUCT_Desert", payload: id });
                }
            });
        }
    };




    return (
        <table style={{overflow:'auto',marginTop:'20px'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title Produit</th>
                        <th>Avis</th>
                        <th>Lieu</th>
                        <th>Loyer</th>
                        <th>Loyer</th>
                        <th>Forme</th>
                        <th>Date</th>
                        <th>Prix</th>
                    </tr>
                </thead>

                <tbody>
                {
                    P1.length > 0 ? (
                        <>
                            <tr>
                                <td colSpan={9}>Campagne</td>
                            </tr>
                            {P1.map((P, index) => (
                                <tr key={P.id}>
                                    <td>{index + 1}</td>
                                    <td>{P.title}</td>
                                    <td>{P.avis}</td>
                                    <td>{P.lieu}</td>
                                    <td>{P.loyer}</td>
                                    <td>
                                        Voyageurs: {P.forme.voyageurs}, Chambres: {P.forme.chambres}, lits: {P.forme.lits}, Salles De Bain: {P.forme.chambres['salles de bain']}, Toilette: {P.forme.toilette}
                                    </td>
                                    <td>{P.lieu}</td>
                                    <td>{P.lieu}</td>
                                    <td>
                                        <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleDelete(P.id, "Campagne")} />
                                    </td>
                                </tr>
                            ))}
                        </>
                    ) : (
                        <>
                        <tr>
                                <td colSpan={9}>Campagne</td>
                        </tr>
                        <tr>
                            <td colSpan={9}>No Produits Dans cet Categories </td>
                        </tr>
                        </>
                    )
                }

                {
                    P2.length > 0 ? (
                        <>
                
                    <tr><td colSpan={9}>Villes emblematiques </td></tr>
                    {P2.map((P, index) => (
                        <tr key={P.id}>
                            <td>{index + 1}</td>
                            <td>{P.title}</td>
                            <td>{P.avis}</td>
                            <td>{P.lieu}</td>
                            <td>{P.loyer}</td>
                            <td>Voyageurs : {P.forme.voyageurs} , Chambres : {P.forme.chambres} , lits : {P.forme.lits} , Salles De Bain : {P.forme.chambres['salles de bain']} , Toilette : {P.forme.toilette}  </td>
                            <td>{P.lieu}</td>
                            <td>{P.lieu}</td>
                            <td>

                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleDelete(P.id,'Villes_emblematiques')} />
                            </td>
                        </tr>
                    ))}
                        </>
                    ) : (
                        <>
                            <tr>
                                    <td colSpan={9}>Villes emblematiques</td>
                            </tr>
                            <tr>
                                <td colSpan={9}>No Produits Dans cet Categories </td>
                            </tr>
                        </>
                    )
                }

                {
                    P3.length > 0 ? (
                        <>

                    <tr><td colSpan={9}>Ville </td></tr>
                    {P3.map((P, index) => (
                        <tr key={P.id}>
                            <td>{index + 1}</td>
                            <td>{P.title}</td>
                            <td>{P.avis}</td>
                            <td>{P.lieu}</td>
                            <td>{P.loyer}</td>
                            <td>Voyageurs : {P.forme.voyageurs} , Chambres : {P.forme.chambres} , lits : {P.forme.lits} , Salles De Bain : {P.forme.chambres['salles de bain']} , Toilette : {P.forme.toilette}  </td>
                            <td>{P.lieu}</td>
                            <td>{P.lieu}</td>
                            <td>

                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleDelete(P.id,'Ville')} />
                            </td>
                        </tr>
                    ))}
                    </>
                            ) : (
                            <>
                                <tr>
                                    <td colSpan={9}>Ville</td>
                                </tr>
                                <tr>
                                    <td colSpan={9}>No Produits Dans cet Categories </td>
                                </tr>
                            </>
                            )
                }
                {
                    P3.length > 0 ? (
                        <>
                    <tr><td colSpan={9}>Desert </td></tr>
                    {P4.map((P, index) => (
                        <tr key={P.id}>
                            <td>{index + 1}</td>
                            <td>{P.title}</td>
                            <td>{P.avis}</td>
                            <td>{P.lieu}</td>
                            <td>{P.loyer}</td>
                            <td>Voyageurs : {P.forme.voyageurs} , Chambres : {P.forme.chambres} , lits : {P.forme.lits} , Salles De Bain : {P.forme.chambres['salles de bain']} , Toilette : {P.forme.toilette}  </td>
                            <td>{P.lieu}</td>
                            <td>{P.lieu}</td>
                            <td>

                                <FontAwesomeIcon icon={faTrash} style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={() => handleDelete(P.id,'Desert')} />
                            </td>
                        </tr>
                    ))}
                        </>
                    ) : (
                        <>
                            <tr>
                                    <td colSpan={9}>Desert</td>
                            </tr>
                            <tr>
                                <td colSpan={9}>No Produits Dans cet Categories </td>
                            </tr>
                        </>
                    )
                }
                </tbody>
            </table>
    );
}

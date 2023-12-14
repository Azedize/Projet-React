import { useSelector, useDispatch } from 'react-redux';
import Slider from './Slider_image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMapMarkerAlt, faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import {  Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Buttonscroll from '../Button/Buttonscroll'
import Swal from 'sweetalert2';
import Fouter from '../Fouter/Fouter';
import ButtonUsers from '../../ButtonPagePersonnel/ButtonUsers';
export default function Card(props) {
    const cards = useSelector(state => state);
    const Favs = useSelector(state => state.Favoris);
    const AddCard = useSelector(state => state.AddCart);
    const dispatch=useDispatch()

    const [filters, setFilters] = useState({
        search1: '',
        search2: '',
        search3: '',
        search4: '',  
    });

    const handleFilterChange = (event, filterName) => {
        setFilters({
            ...filters,
            [filterName]: event.target.value,
        });
    };

    const filterFunction = (card) => (
        card.title.toLowerCase().includes(filters.search1.toLowerCase()) &&
        String(card.avis).toLowerCase().includes(filters.search2.toLowerCase()) &&
        card.lieu.toLowerCase().includes(filters.search3.toLowerCase()) &&
        (filters.search4 === '' || Number(card.prix) === Number(filters.search4))
    );


    const filteredCards = filters.search1 || filters.search2 || filters.search3 || filters.search4
        ? cards[props.Categorie].filter(filterFunction)
        : cards[props.Categorie];
    


    const handleClick = (id, cat) => {
        if (!(Favs.find(el => el.id === id))) {
            const produit = cards[cat].find(el => el.id === id);
            dispatch({
                type: 'ADD_FAV',
                payload: {
                    id: produit.id,
                    title: produit.title,
                    image: produit.images[0],
                    prix: produit.prix,
                },
            });
        } else {
            dispatch({
                type: 'DEL_FAV',
                payload: id,
            });
        }
    };

    const handleClickAddCart = (id, cat) => {
        if (!(AddCard.find(el => el.id === id))) {
            const produit = cards[cat].find(el => el.id === id);
            dispatch({
                type: 'ADD_CART',
                payload: {
                    id: produit.id,
                    title:produit.title,
                    date: produit.date,
                    image: produit.images[0],
                    prix: produit.prix,
                    loyer: produit.loyer,
                },
                
            });
            Swal.fire({
                position: "top-end",
                iconColor: "#00fffc",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Deja Ajouter Dans La Card!",
            });
        }
    };


    const renderCard = (card, index) => (
        
        <div className="cardf" key={card.id}>
            <Slider
                img1={card.images[0]}
                img2={card.images[1]}
                img3={card.images[2]}
                img4={card.images[3]}
                img5={card.images[4]}
            />
            <Nav.Link as={Link} to={`/${props.Categorie}/${card.id}`} activeClassName="custom-active-link">

            <div className="card-body-c">
                <h5 className="card-title-card">{card.title}</h5>
                <p className="card-text-Card">
                        <span>Avis:</span> 
                        <span>{card.avis} <FontAwesomeIcon icon={faStar} className='iconCard' /></span>
                </p>
                    <p className="card-text-Card-y"><span > {card.avis > 3.5 ? 'Professionnel' : 'Particulier'}</span> </p>

                    <p className="card-text-Price"><span>Price:</span>   <span>{card.prix}$<span className='nuit'>par nuit</span></span></p>
                    <p className="card-text-Card-l"><span>Lieu:</span><span ><FontAwesomeIcon className='position'  icon={faMapMarkerAlt} />{card.lieu}</span> </p>
            </div>
                </Nav.Link>
            <div class="bubbly-button-div">
                <button class="bubbly-button" onClick={() => handleClickAddCart(card.id, props.Categorie)} >Add To Card <FontAwesomeIcon icon={faShoppingCart} /></button>
            </div>
            <FontAwesomeIcon
                icon={faHeart}
                className={`coeur ${Favs.find(el => el.id === card.id)? 'red' : 'white'}-heart`}
                style={{ width: '25px', height: '25px' }}
                onClick={() => handleClick(card.id, props.Categorie)}
            />
        </div>
    );

    return (
        <div>
            <ButtonUsers /> 
            <Buttonscroll />
            <div className="Slider">
                <Nav.Link as={Link} to="/Ville" className="S_Iteam">
                    <div>
                        <img
                            className="i181yxiv dir dir-ltr"
                            src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
                            alt=""
                        />
                    </div>
                    <span>Tendance </span>
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/Villes_emblematiques"
                    className="S_Iteam nav-link font-weight-bold"
                >
                    <div>
                        <img
                            className="i181yxiv dir dir-ltr"
                            src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg"
                            alt=""
                        />
                    </div>
                    <span>Villes emblématiques</span>
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/Campagne"
                    className="S_Iteam nav-link font-weight-bold"
                >
                    <div>
                        <img
                            className="i181yxiv dir dir-ltr"
                            src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                            alt=""
                        />
                    </div>
                    <span>Compagne</span>
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to="/Desert"
                    className="S_Iteam nav-link font-weight-bold"
                >
                    <div>
                        <img
                            className="i181yxiv dir dir-ltr"
                            src="https://a0.muscache.com/pictures/a6dd2bae-5fd0-4b28-b123-206783b5de1d.jpg"
                            alt=""
                        />
                    </div>
                    <span>Desert</span>
                </Nav.Link>
            </div>

            
            <div >
                <form className="formSearch">
                    <input
                        type="search"
                        placeholder="Search Title"
                        className="inputSearch"
                        onChange={(e) => handleFilterChange(e, 'search1')}
                    />
                    <input
                        type="search"
                        placeholder="Search Avis"
                        className="inputSearch"
                        onChange={(e) => handleFilterChange(e, 'search2')}
                    />
                    <input
                        type="search"
                        placeholder="Search Lieu"
                        className="inputSearch"
                        onChange={(e) => handleFilterChange(e, 'search3')}
                    />
                    <input
                        type="search"
                        placeholder="Search Prix"
                        className="inputSearch"
                        onChange={(e) => handleFilterChange(e, 'search4')}
                    />
                </form>            
                </div>
            <div className='contenairee'>
                <ButtonUsers/>
                {filteredCards.map(renderCard)}

            </div>
            <Fouter />

        </div>
    );
}

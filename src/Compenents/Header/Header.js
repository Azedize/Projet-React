import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as dateFns from 'date-fns';

import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FaUserCircle } from 'react-icons/fa';

function CollapsibleExample(props) {

    const [theme, setTheme]=useState("dark");

    const [fopen, setfopen] = useState(false);
    const [fopenCard, setfopenard] = useState(false);
    const openFav=()=>{
        if (localFav.length === 0) {
                Swal.fire({
                    title: 'No Favorite Products',
                    text: 'You have no favorite products yet.',
                    icon: 'info',
                });
                return;
            }
        setfopen(true)
    }
    const closeFav=()=>{
        setfopen(false)
    }
    const openCard=()=>{
        if (localCard.length === 0) {
                Swal.fire({
                    title: 'No Card Products',
                    text: 'You have no Cards products yet.',
                    icon: 'info',
                });
                return;
            }
        setfopenard(true)
    }
    const closeCard=()=>{
        setfopenard(false)
    }

    const dispatch = useDispatch();
    const Fav = useSelector((state) => state.Favoris);
    const AddCard = useSelector((state) => state.AddCart);




    const Nom = localStorage.getItem('name') || null;
    const Email = localStorage.getItem('email');
    const user = useSelector((state) => state.Users);
    const u = user.find((el) => el.email === Email);
    const uu = u ? <><FaUserCircle className="text-light font-weight-bold text-light mb-1  " style={{ fontSize: '24px', marginRight: '5px' }} />{u.nom}</> : '';


    const [localFav, setLocalFav] = useState(Fav);
    const [localCard, setAddCard] = useState(AddCard);

    useEffect(() => {
        setLocalFav(Fav);
    }, [Fav]);

    useEffect(() => {
        setAddCard(AddCard);
    }, [AddCard]);

    const handleClick1 = (id) => {
        const updatedFav = localFav.filter((el) => el.id !== id);
        console.log('After Deletion - localFav:', updatedFav);

        dispatch({
            type: 'DEL_FAV',
            payload: id,
        });
    };
    const handleClickSupCard = (id) => {
        const updatedFav = localCard.filter((el) => el.id !== id);

        dispatch({
            type: 'DEL_CART',
            payload: id,
        });
        setAddCard(updatedFav);

    };


    const handleLogOut = () => {
        localStorage.clear();
        window.location.reload();
    };
    const element = document.documentElement;

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                break;
            case "light":
                element.classList.remove("dark");
                break;
            default:
                break;
        }
    }, [theme, element.classList]); 

    


    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };


    let total = 0
    return (
        <>
            {props.num === '122' ? <div className="BuyNow" onClick={openCard}>
            <FontAwesomeIcon icon={faShoppingCart} className='shopicon' />
        </div>: ''}

            <Offcanvas show={fopen} onHide={closeFav} placement='end'>
            <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Favoris</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
                {
                        localFav.map((el) =>

                                <div className="cardFav" key={el.id}>
                                    <div
                                        style={{ backgroundImage: `url(${el.image})`, height: '150px' }}
                                        className="slider-image"
                                    ></div>
                                    <div className="card-body">
                                    <h5 className="card-title-card">{el.title.slice(0, 17)}...</h5>
                                        <p className="card-text-Price">{el.prix}$</p>
                                </div> 
                                <div className='ic'><AiFillCloseCircle className='iconSup' onClick={() => handleClick1(el.id)} /></div>
                                </div>
                        )
                }
            </Offcanvas.Body>
        </Offcanvas>
            <Offcanvas show={fopenCard} onHide={closeCard} >
            <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cards</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
                {
                        localCard.map((el) =>
                        <>
                        <div className='ProductAdd'>
                            <div className='cardDivimg'>
                                <img src={el.image} alt="card"  />

                            </div>
                            <div>
                                <h4 className='card-title-card'>{el.title.slice(0, 32)}...</h4>
                                    <div className="card-text-date">
                                        <div className='card-text-date-d'>
                                            <span>Debut </span>
                                            <div>{el.date[0] ? el.date[0].toLocaleDateString('en-GB') : 'Date non définie'}</div>
                                        </div>
                                    <div className='card-text-date-d'>
                                        <span >Fin</span>
                                        <div>{el.date[1] ? el.date[1].toLocaleDateString('en-GB') : 'Date non définie'}</div>
                                    </div>
                                </div>
                                <div >
                                    <p className="card-text-Price"><span>Price Total:</span>   <span>{(dateFns.differenceInDays(el.date[1], el.date[0])) * el.prix}$<span className='nuit'></span></span></p>
                                    <p className="card-text-Card-l" style={{margin:'10px auto'}}><span>Loyer:</span>{el.loyer} </p>
                                </div>
                                <div className='ic'><AiFillCloseCircle className='iconSupSup' onClick={() => handleClickSupCard(el.id)} /></div>

                            </div>


                        </div>
                    </>
                        )
                }

                    <div className='total_final'>
                        {localCard.map((el) => {
                            total += dateFns.differenceInDays(el.date[1], el.date[0]) * el.prix;
                            return null;
                        })}
                        {total ?
                            <div className="card-text-Card" style={{ backgroundColor: 'rgb(13, 24, 45)', color: 'white', padding: '10px', margin: '0' }}>
                                <span>Total:</span>
                                <span>{total}$</span>
                            </div> : ''
                        }
                    </div>

            </Offcanvas.Body>
        </Offcanvas>
            <Navbar collapseOnSelect expand="lg" className="navbar  sticky-top mb-0  " style={{ backgroundColor:'#10cab7'}}>
                <Container className="p-2">
                    <button
                        className={`btnbtn ${theme === "light" ? "active" : ""}`}
                        onClick={() => handleThemeChange(theme === "light" ? "dark" : "light")}
                    >
                        <span className="fs-3">
                            <ion-icon name={theme === "light" ? "moon" : "sunny"}></ion-icon>
                        </span>
                    </button>
                    <Link to="/" className="font-weight-bold text-decoration-none">
                        <Navbar.Brand className=" text-light font-weight-bold text-decoration-none" style={{ fontSize: '1.5rem' }}>AS-Home</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link className="text-light mt-2 ">
                                {Nom ? (
                                    <>

                                        <FaUserCircle className="text-light font-weight-bold text-light   " style={{ fontSize: '24px', marginRight: '5px' }} /> {Nom}
                                    </>
                                ) : (
                                    <>
                                        {uu}
                                    </>
                                )}
                            </Nav.Link>
                            <div className="d-flex align-items-center">
                                {localStorage.getItem('email') ? (
                                    <div
                                        style={{ textAlign: 'center' }}
                                        className="register-nav   font-weight-bold text-decoration-none "                                        onClick={handleLogOut}
                                    >
                                        Log Out
                                    </div>
                                ) : (
                                    <>
                                        <Link
                                            to="/register"
                                                style={{ textAlign: 'center' }}
                                                className="register-nav   font-weight-bold text-decoration-none "
                                        >
                                            Register
                                        </Link>
                                        <Link
                                            to="/Login"
                                                style={{ textAlign: 'center' }}
                                                className="register-nav  mx-3 font-weight-bold text-decoration-none ml-2"
                                        >
                                            Login
                                        </Link>
                                    </>
                                )}
                            </div>
                            {props.num === '122' ? 
                                <Nav.Link className="text-light font-weight-bold text-light mt-1 " >
                                    <FavoriteIcon onClick={openFav} style={{ fontSize: '2rem' }} />
                                </Nav.Link>
                            : ''}
                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CollapsibleExample;
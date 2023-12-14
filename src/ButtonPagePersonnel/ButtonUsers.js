import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function ButtonUsers() {

    const EmailForButtonPersonnel = localStorage.getItem('email') || null;
    const userForButtonPersonnel = useSelector((state) => state.Users?.find(el => el.email === EmailForButtonPersonnel));
    return (
        <>
            {
                (EmailForButtonPersonnel && userForButtonPersonnel.function === "Admin") ?
                <>
                        <Link to="/User">
                            <div className="BuyNow-U" >
                                <ion-icon name="people"></ion-icon>
                            </div>
                        </Link>
                        <Link to="/Produit">
                            <div className="BuyNow-P" >
                                <ion-icon name="pricetags"></ion-icon>
                            </div>
                        </Link>
                </> 
                : ''

            }

 

        </>

    )
}

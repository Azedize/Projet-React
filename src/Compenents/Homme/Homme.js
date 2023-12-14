import { faSketch } from '@fortawesome/free-brands-svg-icons'
import { faGem, faGlobeAsia, faMagic, faPalette, faPencilRuler, faVectorSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Fouter from '../Fouter/Fouter'
import { Link } from 'react-router-dom'

export default function Homme() {
    return (
        <div>
            <div className="landing">
                <div className="intro-text">
                    <h1 style={{textTransform:'uppercase',fontFamily:'italic'}}>Bienvenu</h1>
                    <p>Bienvenue sur AS-Home votre source locale pour trouver la maison de vos rêves</p>
                    <Link to={'/Ville'}>
                        <button className='btnbtnbtn'>store</button>

                    </Link>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <div className="feat">
                        <FontAwesomeIcon icon={faMagic} size="3x" className='icona' style={{ color: '#10cab7' }} />
                        <h3>Services aux acheteurs</h3>
                        <p>Que vous soyez un premier acheteur ou un investisseur chevronné, notre équipe est là pour vous guider tout au long du processus d'achat</p>
                    </div>
                    <div className="feat">
                        <FontAwesomeIcon icon={faGem} size="3x" className='icona' style={{ color: '#10cab7' }} />
                        <h3>Services aux vendeurs</h3>
                        <p>Si vous envisagez de mettre votre maison sur le marché, faites confiance à notre expertise pour vous aider à obtenir le meilleur prix dans les délais les plus courts</p>
                    </div>
                    <div className="feat">
                        <FontAwesomeIcon icon={faGlobeAsia} size="3x" className='icona' style={{ color: '#10cab7' }} />
                        <h3>Témoignages clients</h3>
                        <p>Lisez ce que nos clients satisfaits ont à dire sur leur expérience avec AS-Home
                            Leurs succès sont la meilleure démonstration de notre engagement envers un service exceptionnel</p>
                    </div>
                </div>
            </div>
            <div className="services" id="services">
                <div className="container">
                    <h2 className="special-heading">Services</h2>

                    <div className="services-content">
                        <div className="col">
                            <div className="srv">
                                <FontAwesomeIcon icon={faPalette} size="2x" className='icona' />
                                <div className="text">
                                    <h3>Services aux acheteurs</h3>
                                    <p>
                                        Que vous soyez un premier acheteur ou un investisseur chevronné, notre équipe est là pour vous guider tout au long du processus d'achat.
                                        Nous vous aidons à trouver la propriété qui correspond à vos besoins,
                                        à négocier le meilleur prix et à naviguer sans effort dans les formalités administratives.
                                    </p>
                                </div>
                            </div>
                            <div className="srv">
                                <FontAwesomeIcon icon={faSketch} size="2x" className='icona' />
                                <div className="text">
                                    <h3>Services aux acheteurs</h3>
                                    <p>
                                        Que vous soyez un premier acheteur ou un investisseur chevronné, notre équipe est là pour vous guider tout au long du processus d'achat.
                                        Nous vous aidons à trouver la propriété qui correspond à vos besoins,
                                        à négocier le meilleur prix et à naviguer sans effort dans les formalités administratives

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="srv">
                                <FontAwesomeIcon icon={faVectorSquare} size="2x" className='icona' />
                                <div className="text">
                                    <h3>Communauté locale</h3>
                                    <p>
                                        Découvrez ce qui rend notre communauté unique. Explorez les quartiers, les écoles, les parcs et les commodités locales.
                                        Nous sommes fiers de partager des informations détaillées sur la vie dans tout les regions
                                        y compris les événements communautaires, les festivals et les points d'intérêt locaux
                                    </p>
                                </div>
                            </div>
                            <div className="srv">
                                <FontAwesomeIcon icon={faPencilRuler} size="2x" className='icona' />
                                <div className="text">
                                    <h3>Témoignages clients</h3>
                                    <p>
                                        Lisez ce que nos clients satisfaits ont à dire sur leur expérience avec AS-Home
                                        Leurs succès sont la meilleure démonstration de notre engagement envers un service exceptionnel.
                                        Nous sommes ravis d'avoir pu contribuer à la réalisation de leurs rêves immobiliers,


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="image image-column">
                                <img src="services.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="portfolio" id="portfolio">
                <div className="container">
                    <h2 className="special-heading">Portfolio</h2>
                    <p> votre source locale pour trouver la maison de vos rêves</p>
                    <div className="portfolio-content">
                        <div className="card">
                            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-731745238778315909/original/3f5abcae-551e-4807-88b7-af72a1faf8e1.jpeg?im_w=960" alt="" />
                            <div className="info">
                                <h3>Project Here</h3>
                                <p>Que vous recherchiez une maison familiale confortable</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://a0.muscache.com/im/pictures/miso/Hosting-855265289472667062/original/99f4d83b-7de8-467a-be43-4a5ddd184b24.jpeg?im_w=960" alt="" />
                            <div className="info">
                                <h3>Project Here</h3>
                                <p>un appartement moderne en centre-ville ou une charmante</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src="https://a0.muscache.com/im/pictures/465db8ba-bc14-4b9a-b985-cc1f53be2134.jpg?im_w=960" alt="" />
                            <div className="info">
                                <h3>Project Here</h3>
                                <p>une charmante propriété à la campagne vous trouverez tout cela et plus encore ici</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="container">
                    <h2 className="special-heading">About</h2>

                    <div className="about-content">
                        <div className="image">
                            <img src="about.jpg" alt="" />
                        </div>
                        <div className="text">
                            <p>
                                Prêt à commencer votre voyage immobilier? Contactez-nous dès aujourd'hui pour planifier une consultation gratuite.
                                Que vous ayez des questions sur le marché immobilier local, que vous souhaitiez discuter de la vente de votre propriété ou que vous recherchiez la maison parfaite,
                                nous sommes là pour vous aider.
                            </p>
                            <hr />
                            <p>
                                N'oubliez pas d'ajuster ces textes en fonction de votre style de communication,
                                de votre mission d'entreprise et des spécificités de votre marché local.






                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Fouter />

        </div>
    )
}
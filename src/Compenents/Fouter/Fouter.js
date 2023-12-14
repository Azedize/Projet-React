import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faHome as fasHome } from '@fortawesome/free-solid-svg-icons';

export default function Fouter() {
    return (
            <div class="footer">
                <div class="container">
                    <FontAwesomeIcon icon={faFontAwesome} className='img' size="2x" style={{ color: 'yourColor' }} />
                    <p>We Are Social</p>
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebookF} className="fab fa-fw ss" />
                        <FontAwesomeIcon icon={faTwitter} className="fab fa-fw ss" />
                        <FontAwesomeIcon icon={fasHome} className="fas fa-fw ss" />
                        <FontAwesomeIcon icon={faLinkedin} className="fab fa-fw ss" />
                    </div>
                    <p class="copyright">&copy; 2024 <span>Kasper</span> All Right Reserved</p>
                </div>
            </div>
    )
}

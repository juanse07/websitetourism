import React from 'react';
import { Button } from '../Button';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join Us, subscribe newsletter
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at anytime
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                        type='eMail'
                        name='eMail'
                        placeholder='Your eMail'
                        className='footer-input'
                        />
                        <Button buttonStyle='btn-outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
            <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
<h2>About us</h2> 
<Link to='/'> Our web site </Link>
<Link to='/'> Schedule now </Link>
</div>

</div>

            </div>
            
        </div>
    )
}

export default Footer

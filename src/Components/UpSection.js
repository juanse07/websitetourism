import React from 'react';
import '../App.css';
import { Button } from './Button';
import './UpSection.css'

function UpSection() {
   
    return (
        <div className= 'up-container'>
             {/* <video src='videos/rain2.mp4' autoPlay loop muted playsinline/> */}
             <video src='videos/Bokeh Lights (1).mp4' autoPlay loop muted/>
           <h1>Explore Denver at your own Pace</h1>
            <p>Best Tours around</p>
          
           
            <div className='up-btns'>
                <Button className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--medium'>
                    <p>Fast-Appoinment</p>
                  

                </Button>
                
                <Button className='up-btns'
                buttonStyle='btn--primary'
                buttonSize='btn--medium'
                >
                    Explore servcices<i className='far fa-play-circle'/>

                </Button>


            </div>   
        </div>
    );
}

export default UpSection

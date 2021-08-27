import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='Cards'>
            <h1>Check Out this Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/kachina.jpg'
                        text='Restaurants'
                        label='Kachina Cantina'
                        path='/Services'/>
                        <CardItem
                        src='images/mountains.jpg'
                        text='explorando las rocky mts'
                        label='Rocky Mountains'
                        path='/Services'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/denver.jpg'
                        text='24 hrs asleep'
                        label='Big City'
                        path='/Services'/>
                        <CardItem
                        src='images/mexfood.jpg'
                        text='Best Food'
                        label='Destinos de Playa'
                        path='/Services'/>
                         <CardItem
                        src='images/denver_tooeys.jpg'
                        text='Bars'
                        label='Bars'
                        path='/Services'/>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Cards

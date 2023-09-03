import React from 'react'
import '../../Styles/styles.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='divNavBar'>
            <ul className='ulNavBar'>
                <Link to={'/'}><li className='liNavBar'>Inicio</li></Link>
                <Link to={'/servicios'}><li className='liNavBar'>Servicios</li></Link>
                <Link to={'/construccion'}><li className='liNavBar'>Construcción</li></Link>
            </ul>
        </div>
    )
}

export default NavBar

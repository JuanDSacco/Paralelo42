import React from 'react'
import '../../Styles/styles.scss'

const Footer = () => {

    return (
        <>
            <div className='divFooterContainer'>
                <h2>Contacto</h2>
                <div className='divContacto'>
                    <ul className='ulContacto'>
                        <li className='liContacto'>Ubicación: Fonrouge 1940</li>
                        <li className='liContacto'>Tel: 4622-5949</li>
                        <li className='liContacto'>Email: juandsacco@gmail.com</li>
                        <li className='liContacto'>Horarios: Lunes a Viernes - 9hs a 17hs</li>
                    </ul>
                </div>
                <div className='divRedes'>
                    <ul className='ulRedes'>
                        <li className='liRedes'>Fb</li>
                        <li className='liRedes'>Ig</li>
                        <li className='liRedes'>Tw</li>
                        <li className='liRedes'>Wpp</li>
                    </ul>
                </div>
            </div>
            <div className='divCopyright'>
                <h4>2023 - Desarrollado por Juan Sacco @juandsacco@gmail.com</h4>
            </div>
        </>
    )
}

export default Footer

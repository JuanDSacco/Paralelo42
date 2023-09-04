import React from 'react'
import '../../Styles/styles.scss'

const Footer = () => {

    return (
        <>
            <div className='divFooterContainer'>
                <h2 className='h2Contacto'>Contacto</h2>
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
                        <li className='liRedes'><i class="fa-brands fa-facebook"></i></li>
                        <li className='liRedes'><i class="fa-brands fa-instagram"></i></li>
                        <li className='liRedes'><i class="fa-brands fa-twitter"></i></li>
                        <li className='liRedes'><i class="fa-brands fa-whatsapp"></i></li>
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

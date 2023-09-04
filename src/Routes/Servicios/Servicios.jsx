import React from 'react'
import '../../Styles/styles.scss'
import FilaServicios from '../../Components/FilaServicios/FilaServicios'
import ImagenServicio1 from '../../assets/ImgServicios/sectserv1.jpeg'
import ImagenServicio2 from '../../assets/ImgServicios/sectserv2.jpeg'
import ImagenServicio3 from '../../assets/ImgServicios/sectserv3.jpeg'



const Servicios = () => {
    return (
        <div className='divServiciosContainer'>
            <h1 className='h2Servicios'>Servicios</h1>
            <FilaServicios servicioEj={'1'} imgServicios={ImagenServicio1}/>
            <FilaServicios servicioEj={'2'} imgServicios={ImagenServicio2}/>
            <FilaServicios servicioEj={'3'} imgServicios={ImagenServicio3}/>
        </div>
    )
}

export default Servicios

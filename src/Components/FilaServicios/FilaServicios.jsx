import React from 'react'
import '../../Styles/styles.scss'




const FilaServicios = ({servicioEj,imgServicios}) => {
    return (
        <div className='divFilaServContainer'>
            <div className='divPFilaServicios'>
                <h3>Servicio Ejemplo {servicioEj}</h3>
                <p className='pFilaServ'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facere atque sunt consectetur vero nobis optio eveniet voluptatem reprehenderit corrupti harum impedit, odit voluptatibus excepturi? Illo impedit fugit et laudantium error, repellat sed quas, modi explicabo, voluptatibus iure soluta saepe. Reiciendis in at cum harum. Fugiat sit obcaecati minus quibusdam praesentium officia a porro esse eaque molestiae voluptatum, quos ea.</p>
            </div>
            <div className='divImgFilaServicios'>
                <img className='imgFilaServicios' src={imgServicios} alt="Ejemplo de servicios" />
            </div>
        </div>
    )
}

export default FilaServicios

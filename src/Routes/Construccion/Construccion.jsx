import React from 'react'
import '../../Styles/styles.scss'
import FilaConstruccion from '../../Components/FilaConstruccion/FilaConstruccion'

const Construccion = () => {
    return (
        <div className='divConstContainer'>
            <div className='divH1Const'>
                <h1 className='h1Const'>Construcción</h1>
            </div>
            <div className='divFilaConst'>
                <FilaConstruccion numeroConst={'1'}/>
                <FilaConstruccion numeroConst={'2'}/>
                <FilaConstruccion numeroConst={'3'}/>
            </div>
        </div>
    )
}

export default Construccion

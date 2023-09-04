import React from 'react'
import '../../Styles/styles.scss'
import Img1 from '../../assets/ImgCarousel/img1p42.png'
import Img2 from '../../assets/ImgCarousel/img2p42.png'
import Img3 from '../../assets/ImgCarousel/img3p42.png'

const Carousel = () => {

    return (
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div id='divCarousel' class="carousel-inner">
                    <div class="carousel-item active">
                    <img id='imgCarousel' src={Img1} class="d-block w-100" alt="Imagen "/>
                    </div>
                    <div class="carousel-item">
                    <img id='imgCarousel' src={Img2} class="d-block w-100" alt="Imagen "/>
                    </div>
                    <div class="carousel-item">
                    <img id='imgCarousel' src={Img3} class="d-block w-100" alt="Imagen "/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default Carousel

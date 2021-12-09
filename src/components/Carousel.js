import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imageCa1 from '../img/pic_front.jpg'
import imageCa2 from '../img/pic_front2.jpg'

function Promote() {
    return (
        <>
            <Carousel
                showThumbs={false} infiniteLoop={true}
                className="md:w-8/12 w-full "
                autoPlay={true}
                interval={4000}
            >
                <div>
                    <img src={imageCa1} alt="" className="rounded-lg" />

                </div>
                <div>
                    <img src={imageCa2} alt="" className="rounded-lg" />

                </div>
                {/* <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div> */}
            </Carousel>
        </>
    );
}

export default Promote
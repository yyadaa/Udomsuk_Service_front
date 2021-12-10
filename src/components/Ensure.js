import React from 'react';
import Figure from 'react-bootstrap/Figure'
import Image1 from '../img/ensure/khumpai.png'
import Image2 from '../img/ensure/acane.png'
import Image3 from '../img/ensure/asia.png'
import Image4 from '../img/ensure/muangthai.png'
import Image5 from '../img/ensure/navakij.png'
import Image6 from '../img/ensure/diphaya.png'
import Image7 from '../img/ensure/thai.png'
import Image8 from '../img/ensure/axa.png'
import Image9 from '../img/ensure/misui.jpeg'
import Image10 from '../img/ensure/mittare.jpeg'

function Ensure() {
    return (
        <Figure>
            <Figure.Caption className="text-2xl md:text-4xl md:flex justify-center p-5 rounded-md bg-bluebg mt-10 mx-10 text-white item-center text-center shadow-md">
                ประกันในเครือ
            </Figure.Caption>
            <div className="flex w-full flex-warp flex-col justify-center items-center">
                <div className="flex md:justify-center flex-col md:flex-row my-10 w-full md:w-3/5 flex-wrap items-center">
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="khumpai"
                        src={Image1}
                        className="m-2"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="acane"
                        src={Image2}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="asia"
                        src={Image3}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={Image4}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={Image5}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={Image6}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={Image7}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={Image8}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={Image9}
                        className="m-2 rounded-lg shadow-md"
                    />
                    <Figure.Image
                        rounded={20}
                        width={200}
                        height={200}
                        alt="171x180"
                        src={Image10}
                        className="m-2 rounded-lg shadow-md"
                    />
                </div>
            </div>
        </Figure>
    )
}

export default Ensure
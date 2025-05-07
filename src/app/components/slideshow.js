'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "./slideshow.css";

// https://www.geeksforgeeks.org/how-to-add-image-carousel-in-next-js/

export const Slideshow = () => {
    return (
        <div>
            {/* <h2>My Slideshow</h2> */}
            <Carousel className="slides">
                <div>
                    <img src="/Images/20230829_111351new.jpg" alt="Cantor Building" width='100' height='100'/>
                    {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                    <img src="/Images/Cantor atrium 3.jpg" alt="Atrium" width={100} height={100}/>
                    {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                    <img src="/Images/IMG_0170new.jpeg" alt="Paintings" width={100} height={100}/>
                    {/* <p className="legend">Image 3</p> */}
                </div>
            </Carousel>
        </div>
    );
};


export default Slideshow
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Images from '../shared/constant/constantData';


const CarouselComp = () => {
    return (
        <div>
            <Carousel slide={false}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={Images.Inst1} height="480px" border="4px groove" width="100%" />
        <Carousel.Caption>
          <h3>Welcome to AUSTT</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={Images.Inst2} height="480px" border="4px groove" width="100%" />
        <Carousel.Caption>
          <h3>Ranked No. 1</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={Images.Inst3} height="480px" border="4px groove" width="100%" />
        <Carousel.Caption>
          <h3>Sustainable Infrastructure</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default CarouselComp

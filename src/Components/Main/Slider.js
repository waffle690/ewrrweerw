import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
function UncontrolledExample() {
  return (
    <div className='mainSlider'>
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/Carusel.png"
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/Carusel.png"
          alt="Second slide"
        />

        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./img/Carusel.png"
          alt="Third slide"
        />

        <Carousel.Caption>
            
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


export default UncontrolledExample;
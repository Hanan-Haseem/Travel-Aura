import React from 'react'
import '../styles/home.css'
import {Container, Row,Col} from 'reactstrap';

import heroImg from '../assets/images/H2.jpg';
import heroImg02 from '../assets/images/H4.jpg';
import heroImg03 from '../assets/images/H1.jpg';
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/about3.png'

import Subtitle from './../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-item-center">
              <Subtitle subtitle={'Journey With Travel Aura'}/>
              <img src={worldImg} alt=""/>
            </div>
            <h1>Travel Unlocks Doors, Creates Lasting <span className="highlight">Memories</span></h1>
            <p>Embark on unforgettable journeys with Travel Aura. Explore vibrant cities, serene beaches, and natural wonders. Our tailored solutions ensure every moment is cherished. Let us guide you to create lasting memories. Start your adventure today and discover the world with Travel Aura.</p>

          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt=""/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <img src={heroImg02} alt=""/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg03} alt=""/>
          </div>
        </Col>

        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/*======= Hero Section Start =======*/}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">What we Serve</h5>
          <h2 className="services__title">We offer our Best services</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
  {/*======= Hero Section Ends =======*/}

  {/*======= Featured Section Starts =======*/}
  <section>
    <Container>
      <Row>
        <Col lg='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our Featured Tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>

  {/*======= Featured Section Ends =======*/}
  {/*======= Experience Section Starts =======*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'}/>

            <h2>
              With all our experience <br /> we will serve you
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse hic possimus ipsa soluta! Distinctio cupiditate, eligendi placeat harum qui sequi amet enim incidunt ex
            </p>
          </div>

          <div className="counter__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>15k+</span>
              <h6>Successfull Trips</h6>
            </div>
            <div className="counter__box">
              <span>3k+</span>
              <h6>Regular Clients</h6>
            </div>
            <div className="counter__box">
              <span>10</span>
              <h6>Years Experience</h6>
            </div>

          </div>
        </Col>
        <Col lg="6">
          <div className="experience__img">
            <img src={experienceImg} alt=""/>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/*======= Experience Section Ends =======*/}

  {/*======= Gallery Section Starts =======*/}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className="gallery__title">Visit Our Customer Tour Gallery</h2>
        </Col>
        <Col lg='12'>
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>
  {/*======= Gallery Section Ends =======*/}
  {/*======= Testimonial Section Starts =======*/}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
        <Subtitle subtitle={'Fans Love'}/>
        <h2 className="testimonial__title">What our Fans says about us</h2>
        </Col>
        <Col lg='12'>
          <Testimonials/>
        </Col>
      </Row>
    </Container>
    </section>
  {/*======= Testimonial Section Ends =======*/}
  <Newsletter/>
  </>
}

export default Home
import React from 'react' 
import './newsletter.css'

import {Container, Row, Col} from 'reactstrap' 
import subscription from '../assets/images/subs.png'

const Newsletter = () => {

    return ( 
        <section className="newsletter">
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className='newsletter__content'>
                            <h2>Subscribe Now to get useful travelling information</h2>
                            <div className='newsletter__input'>
                                <input type='email' placeholder='Enter Your Email'/>
                                <button className='btn newsletter__btn'>Subscribe</button>
                            </div>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam incidunt, ullam similique, ipsam et earum velit possimus iure debitis rerum.</p>
                        </div>

                    </Col>
                    <Col lg='6'>
                        <div className='newsletter__img'>
                            <img src={subscription} alt=''/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Newsletter;
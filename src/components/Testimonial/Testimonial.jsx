import React from 'react';
import Slider from 'react-slick' 
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testimonials = () => {

    const settings ={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
           {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots:true,
            },
           },
           {
            breakpoint: 576,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            },
           },
        ]
    }
    return (
        <Slider {...settings}>
            <div className='testimonial py-4 px-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam at ipsum eum, necessitatibus, eos rem excepturi veritatis similique qui tempora iste corporis quidem? Voluptatibus quos impedit blanditiis nulla accusantium?
                </p> 
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Serah James</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div> 

            <div className='testimonial py-4 px-3'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veniam at ipsum eum, necessitatibus, eos rem excepturi veritatis similique qui tempora iste corporis quidem? Voluptatibus quos impedit blanditiis nulla accusantium?
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Shuba Jesmin</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis asperiores rem natus consequatur libero, temporibus impedit sequi sapiente eveniet qui nesciunt, cumque, omnis officiis neque cupiditate quaerat in ducimus?
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Albert Shephan</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

            <div className='testimonial py-4 px-3'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, nostrum voluptatibus iusto inventore ratione aliquid veniam ex. Commodi in officia dolorem ad reiciendis perferendis, exercitationem numquam impedit nulla, quod aliquam.
                </p>
                <div className='d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className='w-25 h-25 rounded-2' alt='' />
                    <div>
                        <h6 className='mb-0 mt-3'>Shuba Jesmin</h6>
                        <p>Customer</p>
                    </div>
                </div>
            </div>

        </Slider> 
    )
};

export default Testimonials;
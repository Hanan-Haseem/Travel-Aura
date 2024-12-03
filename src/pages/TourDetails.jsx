import React, {useState,useRef} from 'react'
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours'
import calculateAvgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from "../shared/Newsletter";

const TourDetails = () => {
    const {id} = useParams()
    const reviewMsgRef = useRef('');
    const [tourRating, setTourRating] = useState(null);

    const tour = tourData.find(tour=> tour.id === id)
    const { photo, title, desc, price,address, review, city, distance, maxGroupSize } = tour

    // Assuming 'review' is an array of review objects
    const { totalRating, avgRating } = calculateAvgRating(review);

   const options = { day: "numeric", month: "long", year: "numeric" };

    const submitHandler = e => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;

        alert(`${reviewText},${tourRating}`);
        // Logic to submit the review goes here
    }

    return (
    <>
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className="tour__content">
                                <img src={photo} alt="" />
                                < div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                       <span className="tour_rating d-flex align-items-center gap-1">
                                            <i
                                                className="ri-star-s-fill"
                                                style={{ color: "var(--secondary-color)" }}
                                            ></i>
                                            {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? "Not rated" : <span>({review?.length})</span>}
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-fill"></i> {address}
                                        </span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span>
                                            <i className="ri-map-pin-2-line"></i> {city}
                                        </span>
                                        <span>
                                            <i className="ri-money-dollar-circle-line"></i> ${price} /per person
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-time-line"></i> {distance} k/m
                                        </span>
                                        <span>
                                            <i className="ri-group-line"></i> {maxGroupSize} people
                                        </span>
                                        </div>
                                        <p><h5>Description</h5>
                                        <p>{desc}</p></p>
                                        
                                    
                                    <div className="tour_reviews mt-4">
                                        <h4>Reviews ({review?.length} reviews)</h4>
                                        <Form onSubmit={submitHandler}>
                                            <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                                {[...Array(5)].map((_, index) => (
                                                    <span key={index} onClick={() => setTourRating(index + 1)}>
                                                        {index + 1} <i className="ri-star-s-fill"></i>
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="review__input">
                                                <input
                                                    type="text"
                                                    ref={reviewMsgRef}
                                                    placeholder="Share your thoughts"
                                                    required
                                                />
                                                <button className="btn primary__btn text-white" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </Form>
                                        <ListGroup className="user__reviews">
                                            {review?.map((reviewItem, index) => (
                                                <div className="review__item" key={index}>
                                                    <img src={avatar} alt="" />
                                                    <div className="w-100">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div>
                                                                <h5>{reviewItem.name}</h5>
                                                                <p>{new Date(reviewItem.date).toLocaleDateString("en-US", options)}</p>
                                                            </div>
                                                            <span className="d-flex align-items-center">
                                                                {[...Array(5)].map((_, index) => (
                                                                    <span key={index}>
                                                                        <i className={`ri-star-s-fill ${index < reviewItem.rating ? 'active' : ''}`}></i>
                                                                    </span>
                                                                ))}
                                                            </span>
                                                        </div>
                                                        <h6>{reviewItem.comment}</h6>
                                                    </div>
                                                </div>
                                            ))}
                                        </ListGroup>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <Booking tour={tour} avgRating={avgRating} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter />
                                    
        </>
    );
};

export default TourDetails;

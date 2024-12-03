import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from "reactstrap"

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData =[
   {
     imgUrl:weatherImg,
     title:"Calculate Weather",
     desc: "Experience Real-Time Weather Insights: Gain accurate forecasts and prepare for your adventures with confidence. Whether you're exploring urban landscapes or venturing into the great outdoors, our weather calculations provide crucial information to enhance your travel experience."
   },
   {
    imgUrl:guideImg,
    title:"Best Tour Guide",
    desc: "Embark on unforgettable journeys with our top-rated tour guides. With a wealth of knowledge and passion for exploration, they'll lead you through captivating destinations. Let our expert guides transform your travels into extraordinary adventures filled with memories to last a lifetime." },
  {
    imgUrl:customizationImg,
    title:"Customization",
    desc: "Indulge in personalized journeys with our customization options. Crafting unique itineraries, we empower you to design your dream adventure. Our dedicated team ensures every detail reflects your preferences, creating an unforgettable travel experience tailored precisely to your desires and aspirations."
  },

]

const ServiceList = () => {
  return <>
  {
  servicesData.map((item, index)=>(
    <Col lg="3" key={index}>
        <ServiceCard item={item} />
    </Col>
  ))}
  </>
}

export default ServiceList
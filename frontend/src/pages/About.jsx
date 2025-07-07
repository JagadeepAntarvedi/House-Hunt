import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>HouseHunt is your trusted companion in the journey of finding a rental home that fits your lifestyle and budget. Whether you're looking for a cozy apartment, a spacious family house, or a modern studio, HouseHunt brings verified rental listings right to your fingertips.</p>
              <p>We connect tenants and landlords seamlessly, ensuring a smooth, transparent, and secure renting experience. With detailed property information, location-based search, and admin-approved listings, HouseHunt ensures you make confident decisions about where you live next.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission is to simplify the home rental experience by connecting people with reliable, verified rental properties through a secure and user-friendly platform.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Smart Search Filters:</b>
            <p className=' text-gray-600'>Easily find rentals that match your needs by location, budget, property type, and more.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Reliable Support:</b>
            <p className=' text-gray-600'>Our team is always ready to help with any questions, issues, or feedback, ensuring your satisfaction is our top priority.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Clean & User-Friendly Design:</b>
            <p className=' text-gray-600'>A seamless, mobile-friendly interface for a stress-free browsing experience.</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About

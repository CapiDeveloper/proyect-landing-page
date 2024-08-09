"use client"

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import style from './SwiperReviews.module.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { CardReview } from '../card-review/CardReview';


const testimonials = [
    {
        body: 'BigBrothersCT provided outstanding service! My house feels brand new.',
        name: 'Alberto P.',
        handle: '2024-07-15',
        imageUrl: '/cliente-10.jpg',
    },
    {
        body: 'I am always impressed by the attention to detail and care from BigBrothersCT.',
        name: 'Cintia M.',
        handle: '2024-08-05',
        imageUrl: '/cliente-11.jpg',
    },
    {
        body: 'The best cleaning service in Connecticut! Highly recommended.',
        name: 'Chris B.',
        handle: '2024-08-20',
        imageUrl: '/cliente-12.jpg',
    },
]

export const SwiperReviews = () => {
    return (
        <>
            <Swiper modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                onNavigationNext

                className={style.mySwiper}>
                {
                    testimonials?.map((item, index) => (
                        <SwiperSlide key={index}><CardReview testimonial={item} /></SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

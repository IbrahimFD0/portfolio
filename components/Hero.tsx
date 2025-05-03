"use server";
import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials'
import Image from 'next/image';

const Hero = () => {
    const testimonials = [
        {
            quote:
                "ENSAM alumni currently working as a Process Engineer at NEOTISS",
            name: "Youssef",
            designation: "Mechanical engineer",
            src: "/images/youssef.jpg",
            link: "/youssef",
        },
        {
            quote:
                "Final year computer science and cybersecurity student at Cy Tech. Looking for an end of studies intership of 6 months.",
            name: "Ibrahim",
            designation: "Computer Science Student and FullStack Developer",
            src: "/images/ibrahim2.png",
            link:"/ibrahim",
        },

        {
            quote:
                "Currently preparing for the entrance exams of the most presigious engineering schools.",
            name: "Ismael",
            designation: "College student at Lycée Carnot MPII - MPI*",
            src: "/images/ismael.jpg",
            link: "/ismael"
        },
    ];
    return (
        <div className='mt-15'>
            <AnimatedTestimonials testimonials={testimonials}/>

        </div>
    )
}

export default Hero
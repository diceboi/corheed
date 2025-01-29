'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const slides = [
    { number: 'Gyökerek' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Folytonosság' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Változás' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Megújulás' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Tradíció' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Új korszak' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Új kihívások' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Tapasztalatátadás' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
    { number: 'Innováció' },
    { number: <Image src="/leaf.svg" width={15} height={15} alt="Leaf Icon" className="opacity-80"/> },
];

const Carousel = () => {
    // State to control animation duration
    const [duration, setDuration] = useState(30); // Default duration for desktop

    // Effect to adjust duration based on screen size
    useEffect(() => {
        const handleResize = () => {
            // Check if the viewport is mobile-sized
            if (window.matchMedia('(max-width: 768px)').matches) {
                setDuration(5); // Shorter duration for mobile
            } else {
                setDuration(30); // Default duration for larger screens
            }
        };

        // Initial check
        handleResize();

        // Add resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                transition={{
                    ease: 'linear',
                    duration: duration, // Use dynamic duration
                    repeat: Infinity,
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex justify-center flex-shrink-0 px-4 items-center" style={{ minWidth: `${100 / slides.length}%` }}>
                        <p className='lg:text-3xl text-xl italic text-[--green] font-light'>{slide.number}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Carousel;

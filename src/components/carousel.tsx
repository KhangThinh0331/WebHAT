"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import banner1 from "@/src/assets/images/banner1.jpg";
import banner2 from "@/src/assets/images/banner2.jpg";

const slides = [
    {
        id: 1,
        image: banner1,
        title: "SUẤT ĂN CÔNG NGHIỆP",
        description: "Giải pháp suất ăn chất lượng cho doanh nghiệp",
    },
    {
        id: 2,
        image: banner2,
        title: "DỊCH VỤ CATERING",
        description: "Phục vụ tiệc chuyên nghiệp và đẳng cấp",
    },
];

export default function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // auto slide
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[520px] overflow-hidden">

            <AnimatePresence mode="wait">

                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <motion.div
                        initial={{ scale: 1.15, y: 40 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 6, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[index].image}
                            alt="banner"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center">

                        <div className="px-16 text-white max-w-xl">

                            <motion.h2
                                initial={{ x: -80, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl font-bold mb-4">
                                {slides[index].title}
                            </motion.h2>

                            <motion.p
                                initial={{ x: -80, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="text-lg mb-6 max-w-lg">
                                {slides[index].description}
                            </motion.p>

                            <button className="absolute bg-red-600 px-6 py-3 z-20 rounded-md hover:bg-red-700 transition">
                                TÌM HIỂU THÊM
                            </button>

                        </div>
                    </div>
                </motion.div>

            </AnimatePresence>

            {/* Prev */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white w-10 h-10 rounded-full hover:bg-black/70 transition"
            >
                ‹
            </button>

            {/* Next */}
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white w-10 h-10 rounded-full hover:bg-black/70 transition"
            >
                ›
            </button>

            {/* dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">

                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full ${index === i ? "bg-white" : "bg-white/40"
                            }`}
                    />
                ))}

            </div>

        </div>
    );
}
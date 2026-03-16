"use client";

import { useEffect, useState } from "react";
import { GiMeal } from "react-icons/gi";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

export default function Capacity() {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-[#2f5d3a] mb-14">
                    NĂNG LỰC CUNG CẤP
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Box 1 */}
                    <div className="bg-[#f8fdf8] rounded-2xl p-10 text-center 
                    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                    transition duration-300">

                        <GiMeal className="text-[#2f5d3a] text-7xl mx-auto mb-6" />

                        <div className="text-4xl font-bold text-[#2f5d3a] mb-2">
                            <Counter end={2000} suffix="+" />
                        </div>

                        <div className="text-[#2f5d3a] text-lg">
                            SUẤT ĂN / NGÀY
                        </div>

                    </div>

                    {/* Box 2 */}
                    <div className="bg-[#f8fdf8] rounded-2xl p-10 text-center 
                    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                    transition duration-300">

                        <FaCalendarAlt className="text-[#2f5d3a] text-7xl mx-auto mb-6" />

                        <div className="text-4xl font-bold text-[#2f5d3a] mb-2">
                            <Counter end={10} suffix="+ NĂM" />
                        </div>

                        <div className="text-[#2f5d3a] text-lg">
                            KINH NGHIỆM
                        </div>

                    </div>

                    {/* Box 3 */}
                    <div className="bg-[#f8fdf8] rounded-2xl p-10 text-center 
                    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03]
                    transition duration-300">

                        <FaBuilding className="text-[#2f5d3a] text-7xl mx-auto mb-6" />

                        <div className="text-4xl font-bold text-[#2f5d3a] mb-2">
                            <Counter end={50} suffix="+" />
                        </div>

                        <div className="text-[#2f5d3a] text-lg">
                            KHÁCH HÀNG
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
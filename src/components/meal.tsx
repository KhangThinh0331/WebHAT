"use client";

import Image from "next/image";

import meal1 from "@/src/assets/images/meal1.jpg";
import meal2 from "@/src/assets/images/meal2.jpg";
import meal3 from "@/src/assets/images/meal3.jpg";
import meal4 from "@/src/assets/images/meal4.jpg";
import meal5 from "@/src/assets/images/meal5.jpg";
import meal6 from "@/src/assets/images/meal6.jpg";

const meals = [
    { title: "CƠM SUẤT A", image: meal1 },
    { title: "CƠM SUẤT B", image: meal2 },
    { title: "CƠM SUẤT C", image: meal3 },
    { title: "CƠM SUẤT D", image: meal4 },
    { title: "CƠM SUẤT E", image: meal5 },
    { title: "CƠM SUẤT F", image: meal6 },
];

export default function Meals() {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-[#2f5d3a] mb-16">
                    MÓN ĂN NỔI BẬT
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {meals.map((meal, index) => (

                        <div
                            key={index}
                            className="bg-[#f8fdf8] rounded-2xl overflow-hidden
              hover:shadow-xl hover:-translate-y-2 transition duration-300 group"
                        >
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2f5d3a] transition"></div>

                            {/* Image */}
                            <div className="relative h-[200px] overflow-hidden">

                                <Image
                                    src={meal.image}
                                    alt={meal.title}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-[#2f5d3a]/0 group-hover:bg-[#2f5d3a]/40 transition"></div>

                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">

                                <h3 className="text-xl font-bold text-[#2f5d3a] mb-2">
                                    {meal.title}
                                </h3>

                                <p className="text-gray-600 mb-4">
                                    650 CALO / KHAY
                                </p>

                                <div className="overflow-hidden h-10">

                                    <button
                                        className="translate-y-10 group-hover:translate-y-0
                      transition duration-300 bg-[#2f5d3a] text-white
                      px-5 py-2 rounded-md hover:bg-[#24472c]"
                                    >
                                        XEM CHI TIẾT
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* View all button */}
                <div className="text-center mt-14">

                    <button className="
          border-2 border-[#2f5d3a]
          text-[#2f5d3a]
          px-8 py-3
          rounded-md
          font-semibold
          hover:bg-[#2f5d3a]
          hover:text-white
          transition
          ">

                        XEM TOÀN BỘ MENU

                    </button>

                </div>

            </div>

        </section>
    );
}
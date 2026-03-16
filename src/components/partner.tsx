"use client";

import Image from "next/image";

import logo1 from "@/src/assets/images/bidv.jpg";
import logo2 from "@/src/assets/images/vinamilk.png";
import logo3 from "@/src/assets/images/petrolimex.jpg";
import logo4 from "@/src/assets/images/vietcombank.webp";
import logo5 from "@/src/assets/images/nestle.png";
import logo6 from "@/src/assets/images/mercedes.webp";
import logo7 from "@/src/assets/images/samsung.webp";
import logo8 from "@/src/assets/images/honda.webp";
import centerLogo from "@/src/assets/images/logo.jpg";

const partners = [
    logo1, logo2, logo3, logo4,
    logo5, logo6, logo7, logo8
];

export default function Partners() {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center text-[#2f5d3a] mb-20">
                    KHÁCH HÀNG ĐỐI TÁC
                </h2>

                <div className="flex justify-center">

                    <div className="orbit">

                        {/* CENTER LOGO */}
                        <div className="center-logo">
                            <Image
                                src={centerLogo}
                                alt="company"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </div>

                        {partners.map((logo, i) => (
                            <div
                                key={i}
                                className="orbit-item"
                                style={{ transform: `rotate(${i * 45}deg) translate(200px)` }}
                            >
                                <div className="logo">
                                    <Image
                                        src={logo}
                                        alt="partner"
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}
"use client";

import Image from "next/image";
import introBanner1 from "@/src/assets/images/banner1.jpg";
import introBanner2 from "@/src/assets/images/banner2.jpg";
import haccp from "@/src/assets/images/haccp-removebg-preview.png";
import iso from "@/src/assets/images/iso-removebg-preview.png";
import vsattp from "@/src/assets/images/vsattp-removebg-preview.png";

export function CompanyIntroOne() {
    return (
        <section className="relative w-full h-[420px] overflow-hidden bg-white">

            {/* Background image */}
            <Image
                src={introBanner1}
                alt="Giới thiệu công ty"
                fill
                className="object-cover"
                priority
            />

            <div className="
        absolute inset-0
        bg-gradient-to-l
        from-white via-white/100 to-transparent
      "></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto h-full flex items-center justify-end px-6">

                <div className="max-w-xl">

                    <h2 className="text-4xl font-bold mb-5 text-[#2f5d3a]">
                        GIỚI THIỆU CÔNG TY
                    </h2>

                    <p className="text-lg mb-6 leading-relaxed text-gray-600">
                        Chúng tôi là đơn vị chuyên cung cấp suất ăn công nghiệp
                        với hơn 10 năm kinh nghiệm, phục vụ hàng nghìn suất ăn
                        mỗi ngày cho các doanh nghiệp, nhà máy và tổ chức.
                        Với đội ngũ chuyên nghiệp và quy trình kiểm soát
                        chất lượng nghiêm ngặt, chúng tôi cam kết mang đến
                        những bữa ăn an toàn, dinh dưỡng và chất lượng.
                    </p>

                    <button className="bg-[#2f5d3a] hover:bg-[#24472c] px-6 py-3 rounded-md font-semibold transition text-white">
                        TÌM HIỂU THÊM
                    </button>

                </div>

            </div>

        </section>
    );
}

export function CompanyIntroTwo() {
    return (
        <section className="relative w-full h-[420px] overflow-hidden bg-white">

            {/* Background image */}
            <Image
                src={introBanner2}
                alt="An toàn thực phẩm"
                fill
                className="object-cover"
                priority
            />

            {/* Gradient fade sang trắng */}
            <div className="
        absolute inset-0
        bg-gradient-to-l
        from-white via-white/100 to-transparent
      "></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto h-full flex items-center justify-end px-6">

                <div className="max-w-xl text-gray-800 text-right">

                    <h2 className="text-4xl font-bold mb-5 text-[#2f5d3a] text-center">
                        AN TOÀN THỰC PHẨM
                    </h2>

                    {/* Certificates */}
                    <div className="flex justify-end gap-8 mb-6">

                        <Image
                            src={haccp}
                            alt="HACCP"
                            width={120}
                            height={120}
                            className="cert transition duration-300 hover:scale-110 hover:drop-shadow-lg"
                        />

                        <Image
                            src={iso}
                            alt="ISO 22000"
                            width={120}
                            height={120}
                            className="cert transition duration-300 hover:scale-110 hover:drop-shadow-lg"
                        />

                        <Image
                            src={vsattp}
                            alt="VSATTP"
                            width={200}
                            height={120}
                            className="cert transition duration-300 hover:scale-110 hover:drop-shadow-lg"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export function CompanyIntroThree() {
    return (
        <section className="relative w-full h-[420px] overflow-hidden">

            {/* Background image */}
            <Image
                src={introBanner1}
                alt="Giới thiệu công ty"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">

                <div className="max-w-xl text-white">

                    <h2 className="text-4xl font-bold mb-5">
                        ĐĂNG KÝ TƯ VẤN SUẤT ĂN
                    </h2>

                    <p className="text-lg mb-6 leading-relaxed">
                        Liên hệ với chúng tôi để được tư vấn và báo giá dịch vụ cung cấp suất ăn công nghiệp
                    </p>

                    <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition">
                        LIÊN HỆ NGAY
                    </button>

                </div>

            </div>

        </section>
    );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaFacebook,
    FaYoutube,
} from "react-icons/fa";
import haccp from "@/src/assets/images/haccp-removebg-preview.png";
import iso from "@/src/assets/images/iso-removebg-preview.png";
import vsattp from "@/src/assets/images/vsattp.jpg";

export default function Footer() {

    return (
        <footer className="bg-black text-white mt-5">

            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

                {/* Thông tin */}
                <div>
                    <h3 className="text-lg font-semibold text-[#6B8E23] mb-5">
                        THÔNG TIN
                    </h3>

                    <div className="space-y-3 text-sm">

                        <div className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-[#9BBB59] mt-1" />
                            <span>178/4 KP Tân Thắng, P. Tân Bình, TP. Dĩ An, Bình Dương</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaPhone className="text-[#9BBB59]" />
                            <span>HOTLINE:</span>
                            <a
                                href="tel:0978 062 268"
                                className="text-red-600 font-bold text-base"
                            >
                                0978 062 268
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-[#9BBB59]" />
                            <span>contact@hoanganhtu.com</span>
                        </div>

                    </div>
                </div>

                {/* Giới thiệu */}
                <div>
                    <h3 className="text-lg font-semibold text-[#6B8E23] mb-5">
                        GIỚI THIỆU
                    </h3>

                    <div className="space-y-3 text-sm">

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Về chúng tôi
                        </Link>

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Hồ sơ năng lực
                        </Link>

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Tin tức
                        </Link>

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Liên hệ
                        </Link>

                    </div>
                </div>

                {/* Dịch vụ */}
                <div>
                    <h3 className="text-lg font-semibold text-[#6B8E23] mb-5">
                        DỊCH VỤ
                    </h3>

                    <div className="space-y-3 text-sm">

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Suất ăn công nghiệp
                        </Link>

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Bếp ăn tại chỗ
                        </Link>

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Catering
                        </Link>

                        <Link href="#" className="flex items-center gap-2 hover:text-[#9BBB59]">
                            <span className="text-[#9BBB59]">{">"}</span>
                            Tư vấn giải pháp bếp
                        </Link>

                    </div>
                </div>

                {/* Chứng nhận */}
                <div>
                    <h3 className="text-lg font-semibold text-[#6B8E23] mb-5">
                        CHỨNG NHẬN
                    </h3>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-white p-1 rounded-full shadow-sm">
                            <Image
                                src={haccp}
                                alt="HACCP"
                                className="h-12 w-auto object-contain" // h-12 giúp cao đồng nhất
                            />
                        </div>
                        <div className="bg-white p-1 rounded-full shadow-sm">
                            <Image
                                src={iso}
                                alt="ISO"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        <div className="bg-white p-1 shadow-sm">
                            <Image
                                src={vsattp}
                                alt="VSATTP"
                                className="h-12 w-auto object-contain" // h-12 ép cao bằng 2 cái kia
                            />
                        </div>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4">

                        <a
                            href="#"
                            className="bg-[#556B2F] p-2 rounded-full text-white hover:scale-110 transition"
                        >
                            <FaFacebook />
                        </a>

                        <a
                            href="#"
                            className="bg-red-600 p-2 rounded-full text-white hover:scale-110 transition"
                        >
                            <FaYoutube />
                        </a>

                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
                COPYRIGHT © <span className="font-bold text-base">HOÀNG ANH TÚ</span> - ALL RIGHTS RESERVED
            </div>

        </footer>
    );
}
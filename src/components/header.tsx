"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { usePathname } from "next/navigation";
import logo from "@/src/assets/images/logo.jpg";

export default function Header() {

    const pathname = usePathname();

    const menuClass = (path: string) =>
        `relative pb-1 transition
     after:absolute after:left-0 after:bottom-0 after:h-[2px]
     after:bg-red-600 after:transition-all after:duration-300
     ${(pathname ?? "") === path
            ? "after:w-full text-red-600"
            : "after:w-0 hover:after:w-full"
        }`;

    const serviceActive = pathname?.startsWith("/dich-vu");

    const dropdownItem = (path: string) =>
        `block px-5 py-3 transition
     ${(pathname ?? "") === path
            ? "bg-red-50 text-red-600 font-semibold"
            : "hover:bg-gray-100"
        }`;

    return (
        <header className="w-full bg-white shadow-sm relative z-50 sticky top-0">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/">
                    <Image src={logo} alt="Logo" height={80} />
                </Link>

                {/* Menu */}
                <nav className="hidden md:flex gap-14 text-black font-medium">

                    <Link href="/" className={menuClass("/")}>
                        TRANG CHỦ
                    </Link>

                    <Link href="/gioi-thieu" className={menuClass("/gioi-thieu")}>
                        GIỚI THIỆU
                    </Link>

                    {/* Dropdown dịch vụ */}
                    <div className="relative group">

                        <div
                            className={`relative pb-1
                after:absolute after:left-0 after:bottom-0 after:h-[2px]
                after:bg-red-600 after:transition-all after:duration-300
                ${serviceActive
                                    ? "after:w-full text-red-600"
                                    : "after:w-0 hover:after:w-full"
                                }`}
                        >
                            DỊCH VỤ
                        </div>

                        <div
                            className="
              absolute left-0 top-full w-64
              bg-white shadow-lg rounded-md z-50
              opacity-0 invisible translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all duration-200
              "
                        >

                            <Link
                                href="/dich-vu/suat-an-cong-nghiep"
                                className={dropdownItem("/dich-vu/suat-an-cong-nghiep")}
                            >
                                Suất ăn công nghiệp
                            </Link>

                            <Link
                                href="/dich-vu/bep-an-tai-cho"
                                className={dropdownItem("/dich-vu/bep-an-tai-cho")}
                            >
                                Bếp ăn tại chỗ
                            </Link>

                            <Link
                                href="/dich-vu/catering"
                                className={dropdownItem("/dich-vu/catering")}
                            >
                                Catering
                            </Link>

                            <Link
                                href="/dich-vu/tu-van-giai-phap-bep"
                                className={dropdownItem("/dich-vu/tu-van-giai-phap-bep")}
                            >
                                Tư vấn giải pháp bếp
                            </Link>

                        </div>

                    </div>

                    <Link href="/du-an" className={menuClass("/du-an")}>
                        DỰ ÁN
                    </Link>

                    <Link href="/tin-tuc" className={menuClass("/tin-tuc")}>
                        TIN TỨC
                    </Link>

                    <Link href="/ho-so-nang-luc" className={menuClass("/ho-so-nang-luc")}>
                        HỒ SƠ NĂNG LỰC
                    </Link>

                </nav>

                {/* Right */}
                <div className="flex items-center gap-5">

                    <div className="flex items-center gap-2 text-[#2f5d3a] font-semibold">
                        <FaPhone />
                        <span>0901 234 567</span>
                    </div>

                    <Link
                        href="/lien-he"
                        className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
                    >
                        LIÊN HỆ
                    </Link>

                </div>

            </div>
        </header>
    );
}
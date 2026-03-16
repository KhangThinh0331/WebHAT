"use client";

import { motion } from "framer-motion";
import { FaLeaf, FaFire, FaBox, FaTruck } from "react-icons/fa";

const steps = [
    { number: "01", title: "NGUYÊN LIỆU", icon: FaLeaf, desc: "Nguyên liệu tươi sạch được tuyển chọn kỹ lưỡng." },
    { number: "02", title: "CHẾ BIẾN", icon: FaFire, desc: "Chế biến theo quy trình khép kín đảm bảo vệ sinh." },
    { number: "03", title: "ĐÓNG GÓI", icon: FaBox, desc: "Đóng gói giữ nhiệt và bảo toàn chất lượng món ăn." },
    { number: "04", title: "VẬN CHUYỂN", icon: FaTruck, desc: "Giao hàng nhanh chóng bằng hệ thống chuyên dụng." },
];

export default function Process() {
    return (
        <section className="py-28 bg-gradient-to-b from-[#f3faf3] to-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-bold text-center text-[#2f5d3a] mb-24">
                    QUY TRÌNH CHẾ BIẾN
                </h2>

                <div className="relative">

                    {/* wave timeline */}
                    <svg
                        className="absolute top-20 left-0 w-full hidden md:block"
                        height="120"
                        viewBox="0 0 1200 120"
                    >
                        <path
                            d="M0 60 Q300 0 600 60 T1200 60"
                            fill="none"
                            stroke="#cfe9cf"
                            strokeWidth="4"
                            className="wave-path"
                        />
                    </svg>

                    {/* progress line */}
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.5, // Chỉnh thời gian chạy tổng thể
                            delay: 0.2,    // Chạy sau khi card đầu tiên bắt đầu hiện
                            ease: "easeInOut"
                        }}
                        className="absolute top-20 left-0 h-[4px] bg-[#2f5d3a] progress-line"
                    />

                    <div className="grid md:grid-cols-4 gap-12 relative">

                        {steps.map((step, index) => {

                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100, // Độ cứng
                                        damping: 20,    // Độ cản (giảm độ nảy)
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative text-center group"
                                >

                                    {/* glass card */}
                                    <div className="glass backdrop-blur-lg bg-white/40 border border-white/50 rounded-2xl p-8 shadow-xl transition glow-card">

                                        {/* step number */}
                                        <div className="
                    absolute
                    -top-4
                    left-1/2
                    -translate-x-1/2
                    bg-[#2f5d3a]
                    text-white
                    text-sm
                    font-bold
                    px-3 py-1
                    rounded-full
                    shadow-lg
                    ">
                                            {step.number}
                                        </div>

                                        {/* icon circle */}
                                        <div className="
                    w-20 h-20
                    mx-auto
                    rounded-full
                    flex items-center justify-center
                    bg-gradient-to-br from-green-100 to-green-200
                    mb-6
                    transition
                    group-hover:scale-110
                    animate-iconPulse
                    ">

                                            <Icon className="text-[#2f5d3a] text-3xl group-hover:rotate-12 transition" />

                                        </div>

                                        <h3 className="text-lg font-bold text-[#2f5d3a] mb-3">
                                            {step.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm">
                                            {step.desc}
                                        </p>

                                    </div>

                                </motion.div>
                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}
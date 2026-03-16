"use client";

import Image from "next/image";
import { FaUtensils, FaKitchenSet, FaChampagneGlasses } from "react-icons/fa6";

import service1 from "@/src/assets/images/suatan.jpg";
import service2 from "@/src/assets/images/bepantaicho.jpg";
import service3 from "@/src/assets/images/catering.jpg";

const services = [
  {
    title: "SUẤT ĂN CÔNG NGHIỆP",
    desc: "Cung cấp suất ăn công nghiệp chất lượng cao cho nhà máy, xí nghiệp với thực đơn đa dạng và đảm bảo vệ sinh an toàn thực phẩm.",
    image: service1,
    icon: FaUtensils,
  },
  {
    title: "BẾP ĂN TẠI CHỖ",
    desc: "Dịch vụ vận hành bếp ăn trực tiếp tại doanh nghiệp, tối ưu chi phí và đảm bảo quy trình chế biến chuyên nghiệp.",
    image: service2,
    icon: FaKitchenSet,
  },
  {
    title: "CATERING",
    desc: "Phục vụ tiệc, sự kiện, hội nghị với thực đơn phong phú, dịch vụ chuyên nghiệp và đội ngũ phục vụ tận tâm.",
    image: service3,
    icon: FaChampagneGlasses,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#2f5d3a] mb-14">
          DỊCH VỤ
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative bg-[#f8fdf8] rounded-2xl overflow-hidden
                transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2f5d3a] transition"></div>

                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#2f5d3a]/0 group-hover:bg-[#2f5d3a]/40 transition"></div>

                </div>

                {/* Icon */}
                <div className="relative flex justify-center">

                  <div
                    className="absolute -top-8 bg-white rounded-full p-4 shadow-lg
                    transition duration-300 group-hover:rotate-12"
                  >
                    <Icon className="text-[#2f5d3a] text-3xl" />
                  </div>

                </div>

                {/* Content */}
                <div className="p-8 pt-12 text-center">

                  <h3 className="text-xl font-bold text-[#2f5d3a] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {service.desc}
                  </p>

                  {/* Slide-up button */}
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
            );
          })}

        </div>

      </div>
    </section>
  );
}
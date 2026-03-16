"use client";

import Image from "next/image";

import project1 from "@/src/assets/images/project1.jpg";
import project2 from "@/src/assets/images/project2.jpg";
import project3 from "@/src/assets/images/project3.jpg";

const projects = [
  {
    title: "NHÀ MÁY XYZ",
    desc: "Dịch vụ cung cấp suất ăn công nghiệp quy mô lớn...",
    image: project1,
  },
  {
    title: "KHU CÔNG NGHIỆP ABC",
    desc: "Xây dựng và vận hành bếp ăn tại chỗ doanh nghiệp...",
    image: project2,
  },
  {
    title: "CUNG CẤP SUẤT ĂN XYZ",
    desc: "Dịch vụ catering sự kiện...",
    image: project3,
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#2f5d3a] mb-14">
          DỰ ÁN ĐÃ THỰC HIỆN
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => {
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
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#2f5d3a]/0 group-hover:bg-[#2f5d3a]/40 transition"></div>

                </div>

                {/* Content */}
                <div className="p-8 flex flex-col h-[calc(100%-200px)]">

                  <h3 className="text-xl font-bold text-[#2f5d3a] mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {project.desc}
                  </p>

                  {/* Slide-up button */}
                  <div className="overflow-hidden h-10 mt-auto">

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
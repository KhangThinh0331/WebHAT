"use client";

import Image from "next/image";

import news1 from "@/src/assets/images/news1.jpg";
import news2 from "@/src/assets/images/news2.jpg";
import news3 from "@/src/assets/images/news3.jpg";

const news = [
  {
    title: "Suất ăn công nghiệp là gì? Hoàng Anh Tú - Đơn vị cung cấp dịch vụ suất ăn công nghiệp uy tín",
    desc: "Suất ăn công nghiệp là loại hình bữa ăn được sản xuất hàng loạt với số lượng lớn nhằm đáp ứng nhu cầu ăn uống cho công nhân viên tại các nhà máy, xí nghiệp, khu công nghiệp, trường học, ...",
    date: "07/10/2024",
    image: news1,
  },
  {
    title: "Cơ hội và thách thức của dịch vụ suất ăn công nghiệp",
    desc: "Có thể nói kinh doanh suất ăn công nghiệp là thị trường phát triển tiềm năng nhưng cũng không ít thách thức.",
    date: "10/07/2024",
    image: news2,
  },
  {
    title: "Những thực phẩm giúp cải thiện trí nhớ không thể thiếu trong suất ăn trường học",
    desc: "Dịch vụ catering sự kiện...Các nghiên cứu đã chỉ ra rằng ăn một số loại thực phẩm có thể giúp hỗ trợ trí nhớ hiệu quả.",
    date: "10/07/2024",
    image: news3,
  },
];

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-[#2f5d3a] mb-14">
          TIN TỨC
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {news.map((news, index) => {
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
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#2f5d3a]/0 group-hover:bg-[#2f5d3a]/40 transition"></div>

                </div>

                {/* Content */}
                <div className="p-8 flex flex-col h-[calc(100%-200px)]">

                  <h3 className="text-xl font-bold text-[#2f5d3a] mb-3">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {news.desc}
                  </p>

                  <p className="text-gray-600 mb-6 font-bold italic">
                    {news.date}
                  </p>

                  {/* Slide-up button */}
                  <div className="overflow-hidden h-10 mt-auto">

                    <button
                      className="translate-y-10 group-hover:translate-y-0
                      transition duration-300 bg-[#2f5d3a] text-white
                      px-5 py-2 rounded-md hover:bg-[#24472c]"
                    >
                      XEM THÊM
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
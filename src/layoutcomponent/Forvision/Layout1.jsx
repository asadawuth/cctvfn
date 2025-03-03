import vision1 from "../../assets/forvision/vision1.png";
import vision2 from "../../assets/forvision/vision2.png";
import vision3 from "../../assets/forvision/vision3.png";
import vision4 from "../../assets/forvision/vision4.png";
import vision5 from "../../assets/forvision/vision5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Layout1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="tw-bg-gray-300 tw-p-8">
      <Slider {...settings}>
        {data.map((d, index) => (
          <div
            key={index}
            className="tw-bg-slate-200 tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-mx-4 tw-transition-all tw-duration-300 tw-transform hover:tw-cursor-pointer"
          >
            <div className="tw-bg-indigo-700 tw-h-96 tw-flex tw-justify-center tw-items-center tw-transition-all tw-duration-300">
              <img
                loading="lazy"
                src={d.img}
                alt={d.title}
                className="tw-w-80 tw-h-80 tw-rounded-full tw-border-4 tw-border-white tw-transition-all tw-duration-300 group-hover:tw-scale-110"
              />
            </div>
            <div className="tw-p-4 tw-text-center">
              <h2 className="tw-text-lg tw-font-semibold tw-text-gray-800 group-hover:tw-text-indigo-500">
                {d.title}
              </h2>
              <p className="tw-text-gray-600 tw-mt-2 tw-mb-4">{d.text}</p>
              <button className="tw-bg-indigo-500 hover:tw-bg-indigo-700 tw-text-white tw-font-medium tw-px-6 tw-py-2 tw-rounded-full tw-transition-all tw-duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

const data = [
  {
    title: "เสา Sos ฉุกเฉิน",
    img: vision1,
    text: "ช่วยให้ประชาชนในพื้นที่ปลอดภัยรวมถึงลดการก่อเหตุต่างๆ",
  },
  {
    title: "ซ่อมแซมบำรุงรักษา",
    img: vision2,
    text: "หน่วยงานสามารถเข้าซ่อมแซมได้ทันที เพื่อให้อุปกรณ์พร้อมบริการตลอด 24 ชม",
  },
  {
    title: "กล้อง CCTV",
    img: vision3,
    text: "ดูสิ่งที่เกิดขึ้นได้ตลอด เพื่อให้อุปกรณ์พร้อมบริการตลอด 24 ชม",
  },
  {
    title: "โปรแกรมจับค่าอุปกรณ์ที่เสีย",
    img: vision4,
    text: "เพื่อให้หน่วยงานดูแลพื้นที่สามารถเห็นอุปกรณ์ต่างๆที่เสียได้ เข้าซ่อมทันที",
  },
  {
    title: "เข้าซ่อมทันที",
    img: vision5,
    text: "เมื่อใช้งานได้จะมีโปรแกรมจับทันทีว่าอุปกรณ์ใช้งาน เพื่อป้องกันการทุจริตพนักงาน",
  },
];

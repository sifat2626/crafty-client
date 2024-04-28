// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination } from "swiper/modules";

const slider = [
  {
    heading: "Artisanal Pottery",
    description:
      "Experience the beauty of handcrafted pottery, made with care and passion by skilled artisans.",
    image_url: "https://i.ibb.co/pXhv7qk/pottery-slider-1.webp",
  },
  {
    heading: "Ceramic Creations",
    description:
      "Explore our collection of exquisite ceramic creations, each piece telling its own unique story.",
    image_url: "https://i.ibb.co/nfjNsgz/pottery-slider-2.webp",

    image_res:
      "https://moca-theme.myshopify.com/cdn/shop/files/slider2-responsive-bg_767x.jpg?v=1614297877",
  },
  {
    heading: "Crafted Clayware",
    description:
      "Discover the artistry of clayware, where tradition meets innovation in every elegant design.",
    image_url: "https://i.ibb.co/bN1hbQQ/pottery-slider-3.webp",
  },
];

function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={{ nextEl: ".btn-next-slide", prevEl: ".btn-prev-slide" }}
      modules={[Pagination, Navigation]}
      className="mySwiper relative group"
    >
      {slider.map((slide, i) => (
        <SwiperSlide
          className={`min-h-[480px] bg-cover  bg-center`}
          style={{ backgroundImage: `url(${slide.image_url})` }}
          key={i}
        >
          <div className="absolute top-1/2">
            <h3>{slide.heading}</h3>
            <p>{slide.description}</p>
          </div>
        </SwiperSlide>
      ))}

      <div className="btn-next-slide absolute z-10 text-3xl top-1/2 -right-12 group-hover:right-4 duration-300 cursor-pointer">
        <IoIosArrowForward />
      </div>
      <div className="btn-prev-slide absolute z-10 text-3xl top-1/2 -left-12 group-hover:left-4 duration-300 cursor-pointer">
        <IoIosArrowBack />
      </div>
    </Swiper>
  );
}

export default Slider;

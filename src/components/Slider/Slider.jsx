// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

const slider = [
  {
    heading: "Crafted Clayware",
    description:
      "Discover the artistry of clayware, where tradition meets innovation in every elegant design.",
    image_url: "https://i.ibb.co/bN1hbQQ/pottery-slider-3.webp",
  },
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
];

function Slider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={{ nextEl: ".btn-next-slide", prevEl: ".btn-prev-slide" }}
      modules={[Pagination, Navigation, EffectFade]}
      effect="fade"
      speed={1000}
      className="mySwiper relative group"
    >
      {slider.map((slide, i) => (
        <SwiperSlide key={i} className="text-black/80">
          <img
            src={slide.image_url}
            alt=""
            className="object-cover object-center h-[420px] w-full "
          />
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-once="true"
            className={`absolute  max-w-xl  ${
              i === 2 ? "lg:left-16 top-32" : "lg:left-1/4 top-24"
            } p-4 text-center`}
          >
            <h3 className="text-6xl mb-4 font-extralight">{slide.heading}</h3>
            <p className="mb-6">{slide.description}</p>
            <Link
              to={"/all-crafts"}
              className="bg-stone-800 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Shop Now
            </Link>
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

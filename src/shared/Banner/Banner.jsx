import Slider from "../../components/Slider/Slider";
import Navbar from "../../shared/Navbar/Navbar";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute z-10 w-full">
        <Navbar type={"home"} />
      </div>
      <Slider />
    </div>
  );
}

export default Banner;

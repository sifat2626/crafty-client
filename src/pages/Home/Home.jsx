import AllCategories from "../../shared/AllCategories/AllCategories";
import Banner from "../../shared/Banner/Banner";
import Chart from "../../shared/Chart/Chart";
import CraftContainer from "../../shared/CraftContainer/CraftContainer";

function Home() {
  return (
    <div>
      <Banner />
      <CraftContainer />
      <AllCategories />
      <Chart />
    </div>
  );
}

export default Home;

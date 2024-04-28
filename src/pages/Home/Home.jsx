import AllCategories from "../../shared/AllCategories/AllCategories";
import Banner from "../../shared/Banner/Banner";
import Chart from "../../shared/Chart/Chart";
import Choose from "../../shared/Choose/Choose";
import CraftContainer from "../../shared/CraftContainer/CraftContainer";

function Home() {
  return (
    <div>
      <Banner />
      <CraftContainer />
      <AllCategories />
      <Chart />
      <Choose />
    </div>
  );
}

export default Home;

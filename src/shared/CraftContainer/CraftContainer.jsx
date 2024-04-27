import { useEffect, useState } from "react";
import CraftCardItem from "../../components/CraftCardItem/CraftCardItem";

function CraftContainer() {
  const [craftItems, setCraftItems] = useState([]);
  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/crafts")
      .then((res) => res.json())
      .then((data) => setCraftItems(data.data.craft))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2 className="text-center"> Explore Our Crafted Collections!</h2>
      <p className="max-w-6xl mx-auto text-center">
        Delve into the World of Artistry: Explore Our Exceptional Craft
        Collections, Each Piece a Testament to Creativity and Quality.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {craftItems.map((item) => (
          <CraftCardItem
            key={item._id}
            id={item._id}
            image={item.image}
            subcategory_name={item.subcategory_name}
            price={item.price}
            rating={item.rating}
            customization={item.customization}
            stockStatus={item.stockStatus}
            short_description={item.short_description}
            item_name={item.item_name}
            type={"home"}
          />
        ))}
      </div>
    </div>
  );
}

export default CraftContainer;

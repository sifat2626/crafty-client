import { useEffect, useState } from "react";
import CraftCardItem from "../../components/CraftCardItem/CraftCardItem";
import { Typewriter } from "react-simple-typewriter";

function CraftContainer() {
  const [loading, setLoading] = useState(true);
  const [craftItems, setCraftItems] = useState([]);
  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/crafts")
      .then((res) => res.json())
      .then((data) => {
        setCraftItems(data.data.craft);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  return (
    <div className="mt-16">
      <h2 className="text-center text-3xl mb-4">
        {" "}
        Explore Our Crafted Collections!
      </h2>
      <p className="max-w-6xl mx-auto text-center mb-4">
        Delve into the World of Artistry: Explore Our Exceptional Craft
        Collections, Each Piece a Testament to Creativity and Quality.
      </p>
      <div className="text-center mb-12 text-xl">
        <h1>
          Crafted with{" "}
          <span style={{ color: "sienna", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["creativity", "passion ", "precision"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {craftItems.slice(0, 6).map((item) => (
          <CraftCardItem
            key={item._id}
            id={item._id}
            image={item.image}
            subcategory_name={item.subcategory_name}
            price={item.price}
            rating={item.rating}
            customization={item.customization}
            stockStatus={item.stock_status}
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

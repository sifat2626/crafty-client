import { useContext, useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import CraftCardItem from "../../components/CraftCardItem/CraftCardItem";

function MyArtList() {
  const [crafts, setCrafts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/crafts/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user_email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setCrafts(data.data.craft));
  }, [user.email]);

  return (
    <div>
      <Navbar />
      <h2>My Art & Craft List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {crafts.map((item) => (
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
            type={"user"}
          />
        ))}
      </div>
    </div>
  );
}

export default MyArtList;

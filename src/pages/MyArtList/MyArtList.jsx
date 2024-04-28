import { useContext, useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import CraftCardItem from "../../components/CraftCardItem/CraftCardItem";
import toast from "react-hot-toast";

function MyArtList() {
  const [crafts, setCrafts] = useState([]);
  const [filteredCrafts, setFilteredCrafts] = useState([]);
  const { user } = useContext(AuthContext);

  const handleCustomization = (e) => {
    const value = e.target.value;
    if (value === "Any") {
      setFilteredCrafts(crafts);
    } else {
      const filteredData = crafts.filter(
        (craft) => craft.customization === value
      );
      setFilteredCrafts(filteredData);
    }
  };

  const handleDelete = (id) => {
    fetch(`https://crafty-red.vercel.app/api/v1/crafts/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const filteredData = crafts.filter((craft) => craft._id !== id);
        setCrafts(filteredData);
        setFilteredCrafts(filteredData); // Update filtered crafts after deletion
        toast.success("Craft Item Deleted");
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/crafts/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ user_email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data.data.craft);
        setFilteredCrafts(data.data.craft); // Initialize filtered crafts with all crafts
      });
  }, [user.email]);

  return (
    <div>
      <Navbar />
      <h2>My Art & Craft List</h2>
      <label className="form-control w-full max-w-xs mx-auto">
        <div className="label">
          <span className="label-text">Customization?</span>
        </div>
        <select
          className="select select-bordered"
          onChange={(e) => handleCustomization(e)}
        >
          <option value="Any">Any</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {filteredCrafts.map((item) => (
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
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default MyArtList;

import { useContext, useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import CraftCardItem from "../../components/CraftCardItem/CraftCardItem";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

function MyArtList() {
  const [crafts, setCrafts] = useState([]);
  const [filteredCrafts, setFilteredCrafts] = useState([]);
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
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
        setLoader(false);
      });
  }, [user.email]);

  if (loader) return <span className="loading loading-dots loading-lg"></span>;
  return (
    <div>
      <Navbar />
      <div className="mt-12">
        <h2 className="text-center text-4xl font-semibold mb-8">
          My Art & Craft List
        </h2>
        {crafts.length > 0 ? (
          <label className="form-control w-full max-w-xs mx-auto mb-8">
            <div className="label">
              <span className="label-text font-medium text-xl">
                Customization?
              </span>
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
        ) : (
          <div className="max-w-md mx-auto">
            <h3 className="text-center bg-red-400 text-white p-2 rounded-lg">
              Sorry, You haven&apos;t created any art or craft item yet!
            </h3>
          </div>
        )}
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
              stockStatus={item.stock_status}
              short_description={item.short_description}
              item_name={item.item_name}
              type={"user"}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyArtList;

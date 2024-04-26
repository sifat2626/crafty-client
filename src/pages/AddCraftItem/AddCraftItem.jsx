import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";

function AddCraftItem() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setData(data.data.categories))
      .catch((error) => console.log(error));
  }, []);
  const categories = data.map((item) => item.subcategory_name);
  console.log(categories);
  return (
    <div>
      <Navbar />
      categories: {categories.length}
      <div className="bg-art mt-8 lg:w-1/2 mx-auto p-4 rounded-xl">
        <form>
          <div className="flex mb-4">
            <label className="w-32 ">Image URL</label>
            <input type="text" className="w-full rounded-sm" />
          </div>
          <div className="flex mb-4">
            <label className="w-32 ">Item Name</label>
            <input type="text" className="w-full rounded-sm" required />
          </div>
          <div className="flex mb-4">
            <label className="w-32 ">Category Name</label>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Who shot first?
              </option>
              <option>{categories[0]}</option>
              <option>Greedo</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCraftItem;

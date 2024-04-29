import { useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

function UpdateCraftItem() {
  const [data, setData] = useState([]);
  const loadedItem = useLoaderData();
  const item = loadedItem.data.craft;
  console.log(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      image: e.target.image.value,
      item_name: e.target.itemName.value,
      subcategory_name: e.target.subcategoryName.value,
      short_description: e.target.description.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
      customization: e.target.customization.value,
      processing_time: e.target.processingTime.value,
      stock_status: e.target.stockStatus.value,
    };

    // Error handling
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `${key.split(/(?=[A-Z])/).join(" ")} is required`; // Convert camelCase to human readable format
      }
    }

    if (Object.keys(errors).length === 0) {
      fetch(`https://crafty-red.vercel.app/api/v1/crafts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.status !== 200) {
            throw new Error("Failed to update craft item");
          }
          return res.json();
        })
        .then(() => {
          toast.success("Updated Item Successfully!");
          // Clear the form after successful submission
          e.target.reset();
        })
        .catch((error) => {
          console.error("Error adding craft item:", error);
          toast.error("Failed to add craft item");
        });
    } else {
      toast.error("Form submission error:", errors);
    }
  };

  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setData(data.data.categories))
      .catch((error) => console.log(error));
  }, []);

  const categories = data.map((item) => item.subcategory_name);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="bg-art-light dark:bg-purple-800 rounded-lg shadow-md p-8 mx-auto lg:w-3/4 xl:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Update Craft Item</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Image URL:</label>
              <input
                type="url"
                name="image"
                defaultValue={item.image}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Item Name:</label>
              <input
                type="text"
                name="itemName"
                defaultValue={item.item_name}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Subcategory Name:</label>
              <select
                name="subcategoryName"
                defaultValue={item.subcategory_name}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              >
                {categories.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1">Short Description:</label>
              <textarea
                name="description"
                defaultValue={item.short_description}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1">Price:</label>
              <input
                type="number"
                name="price"
                defaultValue={item.price}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Rating:</label>
              <input
                type="number"
                name="rating"
                defaultValue={item.rating}
                step="0.1"
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Customization:</label>
              <select
                name="customization"
                defaultValue={item.customization}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">Processing Time:</label>
              <input
                type="text"
                defaultValue={item.processing_time}
                name="processingTime"
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Stock Status:</label>
              <select
                name="stockStatus"
                defaultValue={item.stock_status}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              >
                <option value="">Select</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCraftItem;

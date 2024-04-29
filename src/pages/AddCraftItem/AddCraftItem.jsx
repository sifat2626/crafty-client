import { useContext, useEffect, useState } from "react";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

function AddCraftItem() {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

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
      user_email: e.target.userEmail.value,
      user_name: e.target.userName.value,
    };

    if (!user.email) {
      toast.error("An email is required");
      return;
    }
    // Error handling
    const errors = {};
    for (const key in formData) {
      if (!formData[key]) {
        errors[key] = `${key.split(/(?=[A-Z])/).join(" ")} is required`; // Convert camelCase to human readable format
      }
    }

    if (Object.keys(errors).length === 0) {
      fetch("https://crafty-red.vercel.app/api/v1/crafts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.status !== 201) {
            throw new Error(
              "Use an unique item name & rating should be from 0 to 5"
            );
          }
          return res.json();
        })
        .then(() => {
          toast.success("Added Item Successfully!");
          // Clear the form after successful submission
          e.target.reset();
        })
        .catch((error) => {
          console.error("Error adding craft item:", error);
          toast.error(
            "Use an unique item name & rating should be between 0 to 5"
          );
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
        <div className="bg-art rounded-lg shadow-md p-8 mx-auto lg:w-3/4 xl:w-1/2">
          <h1 className="text-3xl font-bold mb-4">Add Craft Item</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Image URL:</label>
              <input
                type="url"
                name="image"
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Item Name:</label>
              <input
                type="text"
                name="itemName"
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Subcategory Name:</label>
              <select
                name="subcategoryName"
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              >
                <option value="">Select</option>
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
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              ></textarea>
            </div>

            <div>
              <label className="block mb-1">Price:</label>
              <input
                type="number"
                name="price"
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Rating:</label>
              <input
                type="number"
                name="rating"
                step="0.1"
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Customization:</label>
              <select
                name="customization"
                required
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
                type="number"
                name="processingTime"
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              />
            </div>

            <div>
              <label className="block mb-1">Stock Status:</label>
              <select
                name="stockStatus"
                required
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
              >
                <option value="">Select</option>
                <option value="In stock">In stock</option>
                <option value="Made to Order">Made to Order</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">User Email:</label>
              <input
                type="email"
                name="userEmail"
                defaultValue={user.email || "anonymous"}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
                disabled
              />
            </div>

            <div>
              <label className="block mb-1">User Name:</label>
              <input
                type="text"
                name="userName"
                defaultValue={user.displayName}
                className="w-full rounded border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 px-4 py-1"
                disabled
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCraftItem;

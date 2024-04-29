import { Link } from "react-router-dom";
import { FaMoneyBill, FaStar } from "react-icons/fa";

/* eslint-disable react/prop-types */
function CraftCardComponent({
  id,
  image,
  item_name,
  subcategory_name,
  short_description,
  rating,
  price,
  customization,
  stockStatus,
  type,
  handleDelete,
}) {
  return (
    <div className="border-2 rounded-xl p-4">
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="h-72 w-full object-center object-cover rounded-xl hover:scale-[120%] duration-300"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold mb-1">{item_name}</h3>
        <h4 className="text-xl font-medium mb-2">{subcategory_name}</h4>
        <p className="mb-2">{short_description}</p>
        <div className={type === "user" ? "flex gap-8 items-center" : ""}>
          <div className="flex gap-2 items-center">
            <FaStar className="text-yellow-500" />
            <p>{rating}</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaMoneyBill className="text-green-700" />
            <p>{price}</p>
          </div>
        </div>

        <div className="mt-2">
          <p>
            Customization:{" "}
            <span
              className={
                customization === "No" ? "text-red-500" : "text-green-500"
              }
            >
              {customization}
            </span>
          </p>
          <p>
            Stock Status:{" "}
            <span
              className={
                stockStatus === "In Stock"
                  ? "text-green-500"
                  : "text-yellow-500"
              }
            >
              {stockStatus}
            </span>
          </p>
        </div>

        <div className="mt-6 mb-2">
          <Link
            to={`/details/${id}`}
            className="bg-blue-300 px-4 py-2 rounded-lg text-black/60 font-medium"
          >
            View Details
          </Link>
        </div>

        {type === "user" && (
          <div className="mt-8 mb-2 flex gap-6">
            <Link
              to={`/crafts/update/${id}`}
              className="px-4 py-2 bg-stone-300 rounded-lg text-black/60 font-medium"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(id)}
              className="px-4 py-2 rounded-lg bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CraftCardComponent;

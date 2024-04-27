/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function CraftCardItem({
  id,
  image,
  item_name,
  subcategory_name,
  price,
  rating,
  customization,
  stockStatus,
  type,
  handleDelete,
}) {
  return (
    <div className="border-2 rounded-xl p-4">
      <div className="">
        <img
          src={image}
          alt=""
          className="h-72 w-full object-center object-cover rounded-xl"
        />
      </div>
      <div className="">
        <h3>{item_name}</h3>
        <h4>{subcategory_name}</h4>
        <div className="">
          <p>{rating}</p>
          <p>{price}</p>
        </div>
        <div className="">
          <p>{customization}</p>
          <p>{stockStatus}</p>
        </div>
        {type === "home" && (
          <div className="">
            <Link to={`/details/${id}`}>View Details</Link>
          </div>
        )}
        {type === "user" && (
          <div className="">
            <Link to={`/crafts/update/${id}`}>Update</Link>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CraftCardItem;

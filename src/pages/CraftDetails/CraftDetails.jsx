import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

function CraftDetails() {
  const data = useLoaderData();
  const craftItem = data.data.craft;
  const {
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    user_email,
    user_name,
    add_button,
  } = craftItem;
  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 mt-8">
        <div className="col-span-1">
          <img src={image} alt="" className="h-screen w-full object-cover" />
        </div>
        <div className="">
          <h2>{item_name}</h2>
          <h3>{subcategory_name}</h3>
          <p>{short_description}</p>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{customization}</p>
          <p>{processing_time}</p>
          <p>{stock_status}</p>
          <p>{user_email}</p>
          <p>{user_name}</p>
          <p>{add_button}</p>
        </div>
      </div>
    </div>
  );
}

export default CraftDetails;

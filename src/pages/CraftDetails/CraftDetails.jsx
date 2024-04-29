import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import CraftCardComponent from "../../components/CraftCardComponent/CraftCardComponent";

function CraftDetails() {
  const [relatedCrafts, setRelatedCrafts] = useState([]);

  const data = useLoaderData();
  const craftItem = data.data.craft;
  const {
    _id,
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
  } = craftItem;
  useEffect(() => {
    fetch(`https://crafty-red.vercel.app/api/v1/categories/${subcategory_name}`)
      .then((res) => res.json())
      .then((data) => {
        const allRelatedCrafts = data.data.craft;
        const filteredCrafts = allRelatedCrafts.filter(
          (craft) => craft._id !== _id
        );
        setRelatedCrafts(filteredCrafts);
      });
  }, [_id, subcategory_name]);
  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-2 mt-8 gap-8">
        <div className="col-span-1 overflow-hidden rounded-lg">
          <img
            src={image}
            alt=""
            className="h-[420px] w-full object-cover object-center rounded-lg hover:scale-[120%] duration-300"
          />
        </div>
        <div className="col-span-1 p-4 bg-art rounded-lg">
          <h2 className="text-4xl font-medium">{item_name}</h2>
          <h3 className="mt-2 text-2xl">{subcategory_name}</h3>
          <p className="text-lg mt-4">{short_description}</p>
          <p className="mt-2">Price: {price}</p>
          <p className="mt-2">Rating: {rating}</p>
          <p className="mt-2">Customization: {customization}</p>
          <p className="mt-2">Processing Time: {processing_time}</p>
          <p className="mt-2">Stock Status: {stock_status}</p>
          <p className="mt-2">User Email: {user_email}</p>
          <p className="mt-2">User Name: {user_name}</p>
        </div>
      </div>
      <div className=" mt-12">
        <h3 className="text-2xl font-semibold mb-8 bg-art p-4 rounded-lg">
          Related items...
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
          {relatedCrafts.map((item) => (
            <CraftCardComponent
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CraftDetails;

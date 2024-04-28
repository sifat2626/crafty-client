/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CraftCardComponent from "../CraftCardComponent/CraftCardComponent";

function CraftCardItem({
  id,
  image,
  item_name,
  subcategory_name,
  short_description,
  price,
  rating,
  customization,
  stockStatus,
  type,
  handleDelete,
}) {
  if (type === "home")
    return (
      <Link to={`/categories/${subcategory_name}`}>
        <CraftCardComponent
          id={id}
          image={image}
          item_name={item_name}
          subcategory_name={subcategory_name}
          short_description={short_description}
          rating={rating}
          price={price}
          customization={customization}
          stockStatus={stockStatus}
          type={type}
          handleDelete={handleDelete}
        />
      </Link>
    );
  return (
    <CraftCardComponent
      id={id}
      image={image}
      item_name={item_name}
      subcategory_name={subcategory_name}
      short_description={short_description}
      rating={rating}
      price={price}
      customization={customization}
      stockStatus={stockStatus}
      type={type}
      handleDelete={handleDelete}
    />
  );
}

export default CraftCardItem;

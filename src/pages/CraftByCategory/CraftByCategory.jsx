import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import CraftCardItem from "../../components/CraftCardItem/CraftCardItem";
import { useEffect, useState } from "react";

function CraftByCategory() {
  const [categories, setCategories] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        const allCategories = data.data.categories;
        const filteredCategories = allCategories.filter(
          (category) => category.subcategory_name !== name
        );
        setCategories(filteredCategories);
      });
  }, []);
  const data = useLoaderData();
  const crafts = data.data.craft;
  return (
    <div>
      <Navbar />
      <h2>craft by category :{crafts.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4">
        {crafts.map((item) => (
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
          />
        ))}
      </div>
      <div className="">
        <h3>Check Other Categories: </h3>
        <div className="grid grid=cols-1 md:grid-cols-2 gap-4 gap-y-4">
          {categories.map((category) => (
            <Link
              className="bg-art p-4 rounded-xl"
              key={category._id}
              to={`categories/${category.subcategory_name}`}
            >
              {category.subcategory_name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CraftByCategory;

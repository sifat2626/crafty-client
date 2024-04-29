import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllCategories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.categories);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  return (
    <div className="mt-16 mb-16">
      <h2 className="text-3xl text-center font-semibold mb-8">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-4">
        {categories.map((category) => (
          <Link
            className="bg-art-light dark:bg-transparent dark:border-2 p-4 rounded-xl"
            key={category._id}
            to={`/categories/${category.subcategory_name}`}
          >
            <div className="">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt=""
                  className="h-56 w-full rounded-lg hover:scale-125 duration-300 object-cover object-center"
                />
              </div>
              <h3 className="text-2xl font-medium mt-4 text-center">
                {category.subcategory_name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllCategories;

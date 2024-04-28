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
    return;
  }
  return (
    <div className="mt-16 mb-16">
      <h2 className="text-3xl text-center font-semibold mb-8">Categories</h2>
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
  );
}

export default AllCategories;

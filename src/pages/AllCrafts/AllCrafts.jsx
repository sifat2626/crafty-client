import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

function AllCrafts() {
  const data = useLoaderData();
  const items = data.data.craft;
  console.log(items);
  return (
    <div>
      <Navbar />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {items.map((item, i) => (
              <tr key={item._id}>
                <th>{i + 1}</th>
                <td>{item.item_name}</td>
                <td>{item.subcategory_name}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/details/${item._id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllCrafts;

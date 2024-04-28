import { useEffect, useState } from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart() {
  const [categories, setCategories] = useState([]);
  const [numOfResults, setNumOfResults] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://crafty-red.vercel.app/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.data.categories);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const promises = categories.map((category) =>
        fetch(
          `https://crafty-red.vercel.app/api/v1/categories/${category.subcategory_name}`
        )
          .then((res) => res.json())
          .then((data) => data.results)
      );

      const results = await Promise.all(promises);
      setNumOfResults(results);
    };

    if (categories.length > 0) {
      fetchData();
    }
  }, [categories]);

  useEffect(() => {
    const newChartData = categories.map((category, i) => ({
      subcategory_name: category.subcategory_name,
      items: numOfResults[i],
    }));
    setChartData(newChartData);
    setLoading(false);
  }, [categories, numOfResults]);

  if (loading) return;
  return (
    <div
      style={{ width: "100%", height: 300 }}
      className="overflow-hidden -ml-8"
    >
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="subcategory_name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="items" barSize={20} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;

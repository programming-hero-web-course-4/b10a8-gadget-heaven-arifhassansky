import SectionTitle from "../section-title/SectionTitle";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      productName: "Samsung",
      price: 1200,
      rating: 4.8,
    },
    {
      productName: "iPhone",
      price: 1799,
      rating: 4.2,
    },
    {
      productName: "Xiaomi",
      price: 1650,
      rating: 4.7,
    },
    {
      productName: "IdeaPad",
      price: 1300,
      rating: 4.8,
    },
    {
      productName: "MacBook",
      price: 1850,
      rating: 4.5,
    },
    {
      productName: "Ideal Pad",
      price: 1750,
      rating: 4.3,
    },
    {
      productName: "Hoco",
      price: 1150,
      rating: 4.4,
    },
    {
      productName: "Awei",
      price: 1550,
      rating: 4.2,
    },
    {
      productName: "Tripple",
      price: 1249,
      rating: 4.7,
    },
    {
      productName: "Redmi",
      price: 1700,
      rating: 4.7,
    },
    {
      productName: "Msi Pro",
      price: 1400,
      rating: 4.8,
    },
    {
      productName: "vision pro",
      price: 1600,
      rating: 4.6,
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="pt-8 pb-28 bg-primary text-white">
        <SectionTitle
          title="Statistics"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>
      <div className="w-11/12 mx-auto pb-24 ">
        <h2 className="font-bold text-3xl mb-8 mt-12">Statistics</h2>
        <div
          className="bg-white rounded-2xl"
          style={{ width: "100%", height: 400 }}
        >
          <ResponsiveContainer>
            <ComposedChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="productName" />
              <YAxis
                label={{
                  value: " Price ($)",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#EFE1FB"
                stroke="#8884d8"
              />
              <Bar dataKey="price" barSize={32} fill="#9538E2" />
              <Scatter dataKey="rating" fill="#9538E2" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

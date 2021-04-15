import React from "react";
import price1 from "../../../../images/price1.jpg";
import price2 from "../../../../images/price2.jpg";
import price3 from "../../../../images/price3.jpg";
import price4 from "../../../../images/class1.jpg";
import Packages from "../../Packages/Packages";

const packageData = [
  {
    title: "Body Building Training",
    price: 180,
    image: price1,
  },
  {
    title: "Strength Training",
    price: 178,
    image: price2,
  },
  {
    title: "Cardiovascular Equipment",
    price: 197,
    image: price3,
  },
  {
    title: "Others Training",
    price: 199,
    image: price4,
  },
];
const ServicesInfo = () => {
  return (
    <div className="container mt-5 ">
      <h1 className="text-center">Our Packages</h1>
      <div className="row mt-4  ">
        {packageData.map((data) => (
          <Packages data={data} key={data.title} />
        ))}
      </div>
    </div>
  );
};

export default ServicesInfo;

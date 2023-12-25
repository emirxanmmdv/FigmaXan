import React, { useEffect, useState } from "react";
import "./BestSellingProducts.scss";

import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
const BestSellingProducts = () => {
  const [BestSellingData, setBestSellingData] = useState([]);
  useEffect(() => {
    const fetchBestSellingData = async () => {
      try {
        const res = await fetch("http://localhost:5000/BestSelling");
        const jsonBestSellingData = await res.json();
        setBestSellingData(jsonBestSellingData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchBestSellingData();
  }, []);
  return (
    <section className="BestSellingProducts">
      <div className="BestSellingProductsContainer">
        <div className="BestSellingProductsTitle">
          <div className="BestSellingProductsTitleLeft">
            <div className="BestSellingProductsCategories">
              <span></span>
              <p>This Month</p>
            </div>
            <div className="BestSellingProductsThisMonthTitle">
              <h2>Best Selling Products</h2>
            </div>
          </div>
        </div>
        <div className="BestSellingProductsProducts">
          <div className="myBestSellingProducts">
            {BestSellingData &&
              BestSellingData.map((item) => (
                <div className="BestSellingProductsCards">
                  <div
                    className="bgImage"
                    style={{ width: "270px", height: "250px" }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "210px", height: "180px" }}
                    />
                    <button className="BestSellingProductsAddToWishlist">
                      <FaRegHeart />
                    </button>
                    <button className="BestSellingProductsSeeDetails">
                      <IoEyeOutline />
                    </button>
                    <button className="BestSellingProductsAddtoCard">
                      Add to card
                    </button>
                  </div>

                  <div className="BestSellingProductsText">
                    <h4>{item.productName}</h4>
                    <div className="prices">
                      <h2 style={{ color: "#DB4444" }}>${item.newprice}</h2>
                      <del style={{ color: "#cfcfcf" }}>{item.oldprice}</del>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;

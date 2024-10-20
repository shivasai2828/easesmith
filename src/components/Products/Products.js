import React, { useEffect, useState } from "react";
import "./Products.css";
import searchImgPlant from "../../assets/search-img-plant.png";
import { CiSearch } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import productimgTwo from "../../assets/product-img-two.png";
import productimgThree from "../../assets/product-img-three.png";
import Eachproduct from "../EachProduct/Eachproduct";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import Pagination from "../../Pagination";
let productList = [
  {
    id: 1,
    name: "Plant 1",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 2,
    name: "Plant 2",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgTwo,
  },
  {
    id: 3,
    name: "Plant 3",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 4,
    name: "Plant 4",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 5,
    name: "Plant 5",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgTwo,
  },
  {
    id: 6,
    name: "Plant 6",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 7,
    name: "Plant 7",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 8,
    name: "Plant 8",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgTwo,
  },
  {
    id: 9,
    name: "Plant 9",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 10,
    name: "Plant 10",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 11,
    name: "Plant 11",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgTwo,
  },
  {
    id: 12,
    name: "Plant 12",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 13,
    name: "Plant 13",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 14,
    name: "Plant 14",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgTwo,
  },
  {
    id: 15,
    name: "Plant 15",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 16,
    name: "Plant 16",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 17,
    name: "Plant 17",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgTwo,
  },
  {
    id: 18,
    name: "Plant 18",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 19,
    name: "Plant 19",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
  {
    id: 20,
    name: "Plant 20",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgTwo,
  },
  {
    id: 21,
    name: "Plant 21",
    description: "Lorem ipsum dolor sit amet",
    price: 999,
    image: productimgThree,
  },
];

const Products = () => {
  const [listData, setListData] = useState(productList);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  let lastproductIndex = currentPage * productsPerPage;
  let firstProductIndex = lastproductIndex - productsPerPage;
  let currentpost = listData.slice(firstProductIndex, lastproductIndex);

  const filteredProducts = listData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())

  );
  console.log(filteredProducts);
  return (
    <>
      <Navbar />

      <div className="products-bg">
        <div className="search-bar-center-container">
          <div className="searchbar-main-content-box">
            <CiSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search Plant"
              value={searchTerm} // Bind search term to input value
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
            />
            <img
              src={searchImgPlant}
              alt="searchImgPlant"
              className="search-Img-Plant"
            />
          </div>
        </div>
        <div className="products-buttons-container">
          <button className="products-top-btn products-top-btn-1 ">
            Plants
          </button>
          <button className="products-top-btn products-top-btn-2 ">Pots</button>
        </div>
        <p className="products-top-para">
          Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
          necessitatibus enim ut internos accusantium a numquam autem ab rerum
          omnis. Non molestiae ratione et laborum doloribus aut molestiae
          voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae
          est voluptatem eius. Et architecto nihil id labore omnis hic iste
          deleniti et porro aspernatur.
        </p>
        <div className="products-conntainer">
          {currentpost.map((each) => (
            <Eachproduct each={each} key={each.id} />
          ))}
        </div>
        <Pagination
          totalPosts={listData.length}
          productsPerPage={productsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <Footer />
    </>
  );
};

export default Products;

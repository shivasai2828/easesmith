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
    name: "Sunflower",
    description: "A bright and cheerful flower that attracts pollinators.",
    price: 999,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 2,
    name: "Rose",
    description: "A classic flower known for its beauty and fragrance.",
    price: 799,
    image: productimgTwo,
    category: "Plants",
  },
  {
    id: 3,
    name: "Cactus",
    description: "A low-maintenance plant perfect for beginners.",
    price: 499,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 4,
    name: "Fern",
    description: "A lush green plant that thrives in humidity.",
    price: 650,
    image: productimgTwo,
    category: "Plants",
  },
  {
    id: 5,
    name: "Tulip",
    description: "A spring flower that comes in a variety of colors.",
    price: 899,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 6,
    name: "Orchid",
    description: "An exotic flower that adds elegance to any space.",
    price: 1299,
    image: productimgTwo,
    category: "Plants",
  },
  {
    id: 7,
    name: "Bamboo",
    description: "A fast-growing plant that symbolizes luck.",
    price: 750,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 8,
    name: "Lavender",
    description: "Known for its calming scent and beautiful purple flowers.",
    price: 850,
    image: productimgTwo,
    category: "Plants",
  },
  {
    id: 9,
    name: "Peace Lily",
    description: "A beautiful houseplant that helps purify the air.",
    price: 950,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 10,
    name: "Snake Plant",
    description: "An easy-to-care-for plant that thrives in low light.",
    price: 600,
    image: productimgTwo,
    category: "Plants",
  },
  {
    id: 11,
    name: "Aloe Vera",
    description: "A succulent plant known for its medicinal properties.",
    price: 700,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 12,
    name: "Pothos",
    description: "A hardy plant that grows well in various conditions.",
    price: 450,
    image: productimgTwo,
    category: "Plants",
  },
  {
    id: 13,
    name: "Pot 1",
    description: "A beautiful ceramic pot for your plants.",
    price: 299,
    image: productimgThree,
    category: "Pots",
  },
  {
    id: 14,
    name: "Pot 2",
    description: "A stylish pot with a modern design.",
    price: 350,
    image: productimgTwo,
    category: "Pots",
  },
  {
    id: 15,
    name: "Hanging Pot",
    description: "Perfect for trailing plants and flowers.",
    price: 450,
    image: productimgThree,
    category: "Pots",
  },
  {
    id: 16,
    name: "Terracotta Pot",
    description: "A classic pot made from natural clay.",
    price: 400,
    image: productimgTwo,
    category: "Pots",
  },
  {
    id: 17,
    name: "Decorative Pot",
    description: "A beautifully designed pot to enhance your decor.",
    price: 600,
    image: productimgThree,
    category: "Pots",
  },
  {
    id: 18,
    name: "Wooden Planter",
    description: "A rustic planter that adds charm to any space.",
    price: 800,
    image: productimgTwo,
    category: "Pots",
  },
  {
    id: 19,
    name: "Metal Planter",
    description: "A sleek metal pot for a modern look.",
    price: 750,
    image: productimgThree,
    category: "Pots",
  },
  {
    id: 20,
    name: "Self-Watering Pot",
    description: "Convenient pot with a built-in water reservoir.",
    price: 900,
    image: productimgTwo,
    category: "Pots",
  },
  {
    id: 21,
    name: "Succulent Assortment",
    description: "A collection of small succulents in a decorative pot.",
    price: 1200,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 22,
    name: "Herb Garden Kit",
    description: "Grow your own herbs with this complete kit.",
    price: 1100,
    image: productimgTwo,
    category: "Plants",
  },
  {
    id: 23,
    name: "Mini Bonsai Tree",
    description: "A beautiful miniature tree for home or office.",
    price: 1500,
    image: productimgThree,
    category: "Plants",
  },
  {
    id: 24,
    name: "Gardenia",
    description: "A fragrant flowering plant that blooms beautifully.",
    price: 1300,
    image: productimgTwo,
    category: "Plants",
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

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar.jsx";
import Product from "../components/Product.jsx";
import Card from "../components/Card.jsx";
import "../pages/css/index.css";
import Activity from "../components/Activity";

const ShopPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products`);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setProducts(data);
          setFilteredItems(data);
        } else {
          console.log("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((category) => category !== value)
        : [...prevCategories, value]
    );
  };

  const handleActivityChange = (event) => {
    const value = event.target.value;
    setSelectedActivities((prevActivities) =>
      prevActivities.includes(value)
        ? prevActivities.filter((activity) => activity !== value)
        : [...prevActivities, value]
    );
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const queryParam = encodeURIComponent(query);
        const categoryParams = selectedCategories
          .map((cat) => encodeURIComponent(cat))
          .join(",");
        const activityParams = selectedActivities
          .map((act) => encodeURIComponent(act))
          .join(",");

        const response = await fetch(
          `http://localhost:5000/api/products?query=${queryParam}&categories=${categoryParams}&activity=${activityParams}`
        );

        if (response.ok) {
          const data = await response.json();
          setFilteredItems(data);
        } else {
          console.log("Failed to fetch filtered data.");
        }
      } catch (error) {
        console.log("Filtering error:", error);
      }
    };

    fetchFilteredProducts();
  }, [query, selectedCategories, selectedActivities, apiUrl]);

  return (
    <div>
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      <Activity handleChange={handleActivityChange} />
      <Product
        result={filteredItems.map(({ _id, img, name, price }) => (
          <Card key={_id} img={img} name={name} price={price} />
        ))}
      />
    </div>
  );
};

export default ShopPage;

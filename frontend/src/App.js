import { useState, useEffect } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]); // Başlangıçta boş bir dizi
  const [filteredItems, setFilteredItems] = useState([]);
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);
        
        if (response.ok) {
          const data = await response.json(); 
          console.log(data);
          
          setProducts(data); // API'den gelen veriyi products state'ine kaydediyoruz
          setFilteredItems(data); // Başlangıçta tüm ürünleri filtrelenmiş olarak gösteriyoruz
        } else {
          console.log("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };

    fetchProducts();
  }, [apiUrl]);

  // ----------- Input Filter -----------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((activity) => activity !== value)
        : [...prevCategories, value]
    );
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    const value = event.target.value;
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(value)
        ? prevCategories.filter((activity) => activity !== value)
        : [...prevCategories, value]
    );
  };

  // ----------- Filtering Logic -----------
  useEffect(() => {
    let filteredProducts = products;
   
    // Filtering by search query
    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name && product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Applying selected filters
    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.every(
          (activity) =>
            product.activity === activity ||
            product.colors.includes(activity) ||
            product.brand.toLowerCase().includes(activity.toLowerCase()) ||
            product.price.toString() === activity ||
            (product.name && product.name.toLowerCase().includes(activity.toLowerCase()))
        )
      );
    }

    setFilteredItems(filteredProducts);
  }, [query, selectedCategories, products]);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products
        result={filteredItems.map(
          ({ img, name, price }) => (
            <Card
              key={Math.random()}
              img={img}
              title={name}
              newPrice={price}
            />
          )
        )}
      />
    </>
  );
}

export default App;

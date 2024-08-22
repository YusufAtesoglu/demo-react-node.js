const express = require("express");
const router = express.Router();
const Product = require("../models/Product.js");

// Yeni bir ürün oluşturma (Create)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

// Tüm ürünleri getirme (Read - All)
router.get("/", async (req, res) => {
  try {
    const { query, categories, colors, activity } = req.query;
    let filter = {};

    // Arama sorgusu varsa
    if (query) {
      filter.name = { $regex: query, $options: "i" }; // İsimde arama yap
    }

    // Kategori filtrelemesi
    if (categories) {
      const selectedCategories = categories.split(",");
      const activityFilters = selectedCategories.filter(cat => isNaN(cat)); // NaN olanları seçiyoruz (activity)
      const priceFilters = selectedCategories.filter(cat => !isNaN(cat));  // NaN olmayanları seçiyoruz (price)

      // Activity filtrelemesi için $or koşulu
      if (activityFilters.length > 0) {
        filter.$or = activityFilters.map(activity => ({ activity }));
      }

      // Price filtrelemesi
      if (priceFilters.length > 0) {
        filter.price = { $in: priceFilters };
      }
    }

    // Renk filtrelemesi
    if (colors) {
      const selectedColors = colors.split(",");
      filter.colors = { $in: selectedColors }; // colors array'inde seçili renklerden en az birinin bulunmasını sağlar
    }

    // Activity filtrelemesi
    if (activity) {
      const selectedActivities = activity.split(",");
      filter.activity = { $in: selectedActivities }; // activity array'inde seçili aktivitelerden en az birinin bulunmasını sağlar
    }

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Belirli bir ürünü getirme (Read - Single)
router.get("/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;

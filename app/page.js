"use client";

import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onClick={handleProductClick} />
        ))}
      </div>

      {selectedProduct && (
        <div className=" px-4 md:px-60 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <button className="absolute top-2 right-2 text-xl" onClick={handleCloseModal}>&times;</button>
            <img src={selectedProduct.image} alt={selectedProduct.title} className=" w-full h-64 object-scale-down mb-4 rounded" />
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="text-gray-700 mb-4">${selectedProduct.price}</p>
            <p className="text-gray-600">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

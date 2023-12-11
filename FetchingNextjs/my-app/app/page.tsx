"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import vercel from '../public/vercel.svg';

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Product>({
    product: '',
    price: '',
  });
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Fetch initial products when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch('https://65754e62b2fbb8f6509cf99e.mockapi.io/products', {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        tags: ['products'],
      },
    });

    const updatedProducts: Product[] = await res.json();
    setProducts(updatedProducts);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all input fields are filled
    if (!newProduct.product || !newProduct.price) {
      console.error('Please fill out all fields');
      setFormSubmitted(true);
      return;
    }

    const res = await fetch('https://65754e62b2fbb8f6509cf99e.mockapi.io/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (res.ok) {
      console.log('Product added successfully');
      // If the POST request is successful, fetch the updated list of products
      await fetchProducts();
      // Reset the form fields and formSubmitted state
      setNewProduct({
        product: '',
        price: '',
      });
      setFormSubmitted(false);
    } else {
      console.error('Failed to add product');
    }
  };

  return (
    <div className='my-5 ms-5'>
      <div>
        <Image src={vercel} width={100} height={100} alt='logo' />
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <input
                  type="text"
                  name="product"
                  value={newProduct.product}
                  onChange={handleInputChange}
                />
                {formSubmitted && !newProduct.product && (
                  <p style={{ color: 'red' }}>Please enter a product name</p>
                )}
            </div>
            <div className='mb-3'>
              <input
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
              {formSubmitted && !newProduct.price && (
                <p style={{ color: 'red' }}>Please enter a price</p>
              )}
            </div>
          <button type="submit" className='btn btn-dark'>Add Product</button>
        </form>
      </div>

      <div className="d-flex flex-wrap mt-5">
        {products.map((product) => (
          <div key={product.id} className="p-3 m-2 border rounded shadow-sm">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

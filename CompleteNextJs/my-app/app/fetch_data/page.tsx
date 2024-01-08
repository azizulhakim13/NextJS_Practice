import { revalidateTag } from 'next/cache';
import Link from 'next/link'
import React from 'react'

export interface Product {
    id?: number;
    product: string;
    price: string;
}

export default async function Home() {
    const res = await fetch('https://65754e62b2fbb8f6509cf99e.mockapi.io/newproducts', {
        cache: 'no-cache',
        next: {
            tags: ["newproducts"],
        }
    })

    const newproducts: Product[] = await res.json()

    const addProduct = async (e: FormData) => {
        "use server";
        const product = e.get("product")?.toString();
        const price = e.get("price")?.toString();
        
        if(!product || !price) return

        const newProduct: Product = {
            product,
            price,
        }

        await fetch('https://65754e62b2fbb8f6509cf99e.mockapi.io/newproducts', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidateTag('newproducts')
    }

  return (
    <div className='container py-5'>
        <h1 className='fw-bold mb-4'>Products:</h1>
        <div className='d-inline-flex mb-5 border py-5 px-4'>
            <form action='addProduct'>
                <div className="mb-3">
                    <input name='product' type="text" className="form-control py-2 ps-3" placeholder='Enter Your Product Name..' />
                </div>
                <div className="mb-3">
                    <input name='price' type="text" className="form-control py-2 ps-3" placeholder='Enter Price..' />
                </div>
                <div>
                    <button className="btn btn-primary d-block">Add Product</button>
                </div>
            </form>
        </div>
        <div className='row g-3'>
            {newproducts.map((product) =>(
                <div className='col-md-3' key={product.id}>
                    <div className='p-3 border rounded-3'>
                        <h3>{product.product}</h3>
                        <p>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function Home() {
  const res = await fetch('https://65754e62b2fbb8f6509cf99e.mockapi.io/newproducts', {
    cache: 'no-cache',
  })

  const newproducts: Product[] = await res.json()

  const addProductToDatabase =async (e: FormData) => {
    "use"
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
  }

  return (
    <div className="container py-5">
      <div className="d-inline-flex">
        <form action='addProductToDatabase' className="mb-5">
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

    <div className="d-flex flex-wrap">
      {newproducts.map((product) => (
        <div key={product.id} className="p-3 m-3 border"> 
          <p>{product.product}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
    </div>
  )
}

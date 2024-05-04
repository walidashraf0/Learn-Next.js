import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



export default async function Products() {


  async function getProducts() {
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
      next: {
        revalidate: 100,
      }
    });
    response = await response.json();
    console.log(response);
    return response.data;
  }

  let products = await getProducts();

  console.log(products);




  return <>
  <h1>All Products</h1>
    <div className="container">
      <div className="row">
        {products.map((product) => <div key={product.id} className="col-md-2">
          <div className="product">
            <Link href={`/products/${product.id}`}>
              <Image className='w-100' width={300} height={400} src={product.imageCover} alt={product.title} />
              <h2 className='h6'>{product.title}</h2>
            </Link>
          </div>
        </div>)}
      </div>
    </div>

    {/*<section className='vh-100 bg-success' id='mysection'></section>
  <section className='vh-100 bg-danger' id='sec1'></section>
  <section className='vh-100 bg-danger' id='sec2'></section>
  <section className='vh-100 bg-info' id='sec3'></section>
  <section className='vh-100 bg-danger' id='sec4'></section>
  <section className='vh-100 bg-primary' id='sec6'></section>
  <section className='vh-100 bg-danger' id='sec7'></section>
  <section className='vh-100 bg-danger' id='sec8'></section> */}
  </>
}

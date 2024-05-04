import React from 'react'



export default async function Products() {


  async function getProducts() {
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
    response = await response.json();
    console.log(response);
    return response.data;
  }

  let products = await getProducts();

  console.log(products);




  return <>
  
  <div className="container">
    <div className="row">
    {products.map((product)=> <div key={product._id} className="col-md-2">
        <div className="product">
          <img className='w-100' src={product.imageCover} alt={product.title} />
          <h2 className='h6'>{product.title}</h2>
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

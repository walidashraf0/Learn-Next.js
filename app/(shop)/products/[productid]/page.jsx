import React from 'react'

export default async function ProductDetails({ params }) {
    
    let productId = params.productid;
    async function getProductDetails() {
        let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);
        response = await response.json();
        console.log(response);
        return response.data;
      }
    
      let productDetails = await getProductDetails();

    // console.log(params);
  return <>
      <h1>Product Details</h1>
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                <img src={productDetails.imageCover} alt={productDetails.title} />
            </div>
            <div className="col-md-9">
                <h3>{productDetails.title}</h3>
            </div>
        </div>
      </div>

  </>
}

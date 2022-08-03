import React from 'react'
import { useState, useEffect } from 'react';
import { MDBContainer, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import { Link, useParams } from "react-router-dom";
//import Loader from "./loader";
import image from './image/dress2.jpg'
const SingleProduct = () => {

  const parms = useParams();
  const id = parms.id;
  console.log(id);
  const [items, setItems] = useState({});
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    try {
      //setLoading(false);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const setresponse = await response.json();
      setItems(setresponse);

    } catch (error) {
      //setLoading(true);
      console.log('error');
    }

  }
  return (
    <div>

      <div className='bg-single-product' style={{
        backgroundImage: `url(${image})`
      }}>

      </div>
      <MDBContainer className='my-5'>
        <MDBRow className='row-cols-1 row-cols-md-2 g-4 single-set mt-4'>

          <MDBCol>
            <MDBCard className='text-center position-relative'>

              <div className=''>
                <MDBCardImage
                  src={items.image}
                  alt={items.title}
                  position='top'
                />
              </div>

            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='position-relative'>
              <MDBCardBody>
                <h3>{items.title}</h3>
                <MDBCardText className='text-uppercase rounded-0'>$ {items.price}</MDBCardText>
                <MDBCardText>{items.description}</MDBCardText>
                <div className="group-single__items has-border">
                  <p className="product-single__sku">
                    <span className="label control-label">SKU:</span>
                    <span id="variantSku" className="label-sku">{items.id}</span>
                  </p>


                  <p className="product-single__cat d-flex">
                    <span className="label control-label">Category:</span>
                    <span className="label-cate"> {items.category}</span>
                  </p>
                  <p className="product-single__cat d-flex">
                    <span className="label control-label">Review:</span>
                    <span className="label-cate">
                    
                    </span>
                    <span className="label-cate">
                    
                    </span>
                  </p>

                </div>

                <button type="button" className="btn btn-info text-uppercase rounded-0 text-white px-5 py-2">Add to Cart</button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>



        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default SingleProduct
import React from 'react'
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

const Products = ({ items }) => {
    return (
        <div>

            <MDBRow className='row-cols-1 row-cols-md-4 g-4 products mt-4'>

                {items.map((item) => {

                    const { image, title, description, price, id } = item;
                    return (

                        <MDBCol key={id}>
                            <MDBCard className='text-center position-relative'>
                                <Link to={`/product/${id}`}>
                                    <div className='img-set'>
                                        <MDBCardImage
                                            src={image}
                                            alt={title}
                                            position='top'
                                        />
                                    </div>
                                
                                <MDBCardBody>
                                    <MDBCardTitle>{title}</MDBCardTitle>
                                </MDBCardBody>
                                </Link>
                                <MDBCardBody>
                                    <MDBCardText>
                                        {description}
                                    </MDBCardText>

                                    <MDBBtn className='position-absolute text-uppercase rounded-0 btn-dark price-button'>$ {price}</MDBBtn>
                                    <button type="button" className="btn btn-info text-uppercase rounded-0 text-white px-5 py-2">Add to Cart</button>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    )
                }
                )}


            </MDBRow>

        </div>
    )
}

export default Products
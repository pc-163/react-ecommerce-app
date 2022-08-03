import { useState, useEffect } from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import Slider from "./slider";
import Loader from "./loader";
import Products from "./products.jsx";
import Category from './category.jsx';

function Product() {
    const [items, setItems] = useState([]);
    const [itemCopy, setItemCopy] = useState([]);
    const [loading, setLoading] = useState(true);

    //console.log('1');
    const data = async () => {
        try {
            setLoading(false);
            const response = await fetch("https://fakestoreapi.com/products");
            const setresponse = await response.json();
            setItems(setresponse);
            setItemCopy(setresponse);
            
        } catch (error) {
            setLoading(true);
            console.log('error');
        }

    }
   // console.log('2', itemCopy);
    useEffect(() => {
        data();
        //console.log('3');
    }, []);

    //   useEffect(() => {
    //     console.log('3');  //dependency check

    //   }, [])
    //console.log('4');

    return (
        <>
            <Slider />

            <MDBContainer className='my-5'>
                {/*<h1>{items}</h1>
                <button onClick={() => setItems(items + 1)}>Hello</button>*/ }
                <h1 className='text-center text-uppercase fw-bold'>POPULAR PRODUCTS</h1>
                <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                <Category itemCopy={itemCopy} setItems={setItems}/>

                {loading ?
                   <Loader /> : <Products items={items} /> 
                }
            </MDBContainer>
        </>
    )
}

export default Product
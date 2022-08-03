import React from 'react'
const Category = ({itemCopy, setItems}) => {

    const filterProduct = (category) =>{
        const filter = itemCopy.filter(cuurentData => cuurentData.category === category);
        setItems(filter);
    }

    return (
        <div>
            <div className="btn-group d-flex category mt-5 mb-3">
                <button className="btn btn-dark" onClick={() => filterProduct("men's clothing")}>Men's clothing</button>
                <button className="btn btn-dark" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-dark" onClick={() => filterProduct("electronics")}>Electronics</button>
                <button className="btn btn-dark" onClick={() => filterProduct("women's clothing")}>Women's clothing</button>
            </div>
        </div>
    )
}

export default Category
import React from 'react'
import './EditProduct.css'
import dropDownIcon from "../../img/dropDownIcon.png"

const EditProduct = () => {
    return (

        <div className="product-content">
            <h1> Edit Product</h1>
            <div className="content-main">
                <div className="product-detail content-container ">
                    <span>ID</span>
                    <input type="text" placeholder="product id" />
                </div>

                <div className="product-picture content-container">

                    <div className="img"> </div>
                    <div className="action-btn">
                        <span>Select your product picture</span>
                        <button className="btn">Browse</button>
                    </div>
                </div>

                <div className="product-detail content-container">
                    <span>Product Name</span>
                    <input type="text" placeholder="product name" />
                </div>
                <div className="product-detail select-div content-container">
                    <span>Category</span>
                    <select   >
                        <option value="select category"> select category</option>
                        <option value="Foods"> Foods</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Packages"> Packages</option>
                        <option value="Drinks"> Drinks</option>
                    </select>
                    <img className="dropdown" src={dropDownIcon} alt="" />
                </div>
                <div className="product-detail content-container">
                    <span>Price</span>
                    <input type="text" placeholder="product price"  />
                </div>
                <div className="product-detail content-container">
                    <span>Description</span>
                    <textarea type="text" placeholder="product description..."  />
                </div>
            </div>
            
            <div>
            <button className="btn"> Save</button>
            <button className="btn-cancel"> Cancel</button>
            </div>

        </div>
    )

}

export default EditProduct

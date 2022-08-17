import React, { useState } from 'react'
import { items } from '../../Data'
import "./ItemCard.css"


const ItemCard = ({ category }) => {

    const categoryItems = items.find((item) => item.category === category)
   
    console.log(categoryItems)

    return (
        <div className="items">
            { categoryItems !== undefined ?
              (  categoryItems.catItems.map((item) => (
                    
                        <div className="card-item">
                            <div className="img"></div>
                            <div className="description">
                                <span> {item.name} </span>
                                <span > {item.price}</span>
                            </div>
                        </div>
                )))
                :(
                    <h1>No content</h1>
                )
            }
        </div>

    )
}

export default ItemCard

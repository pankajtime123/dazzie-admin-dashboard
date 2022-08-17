import React from 'react'
import { items } from '../../Data'
import ItemCard from '../ItemCard/ItemCard'
import './AllCategory.css'

const AllCategory = () => {

    return (
        <>
            {items.map((category) => (
                <div className="category ">
                    <span> {category.category} </span>
                    <ItemCard category={category.category} /> 
                </div>
            ))}
        </>
    )
}

export default AllCategory

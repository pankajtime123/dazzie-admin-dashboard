import React,{useState} from 'react'
import AllCategory from '../AllCategory/AllCategory'
import ItemCard from '../ItemCard/ItemCard'
import './Menu.css'



const Menu = () => {

const [link, setLink] = useState("All")

function toggle(category){
    setLink(category)
}

    return (
        
        <div className="content">
            <div className="content-header">
                <div className="search-box content-container">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8075 11H12.0175L11.7375 10.73C12.9375 9.33002 13.5575 7.42001 13.2175 5.39002C12.7475 2.61002 10.4275 0.390015 7.62751 0.0500152C3.39751 -0.469985 -0.16249 3.09002 0.35751 7.32002C0.69751 10.12 2.91751 12.44 5.69751 12.91C7.72751 13.25 9.63751 12.63 11.0375 11.43L11.3075 11.71V12.5L15.5575 16.75C15.9675 17.16 16.6375 17.16 17.0475 16.75C17.4575 16.34 17.4575 15.67 17.0475 15.26L12.8075 11ZM6.80751 11C4.31751 11 2.30751 8.99002 2.30751 6.50002C2.30751 4.01002 4.31751 2.00002 6.80751 2.00002C9.29751 2.00002 11.3075 4.01002 11.3075 6.50002C11.3075 8.99002 9.29751 11 6.80751 11Z" fill="#9A9AB0" />
                    </svg>
                    <input type="text" placeholder="Search here..." />
                </div>
                <div className="category-links">
                    <div className={link=== "All" ? "active" :''} onClick={()=>toggle("All")} >All</div>
                    <div className={link=== "Foods" ? "active" :''} onClick={()=>toggle("Foods")} >Food</div>
                    <div className={link=== "Snacks" ? "active" :''} onClick={()=>toggle("Snacks")} >Snacks</div>
                    <div className={link=== "Packages" ? "active" :''} onClick={()=>toggle("Packages")} >Packages</div>
                    <div className={link=== "Drinks" ? "active" :''} onClick={()=>toggle("Drinks")} >Drinks</div>
                </div>
            </div>
            <div className="content-items content-container">
             {
                 link!== "All" ?(
                  
                    <div className="category ">                
                    <span> {link}  </span>
                     <div className="item">
                        <ItemCard category={link} />
                    </div>
              
                  </div>
                 ) :(
                     <AllCategory  />
                 )
             }
               </div>

       
    </div>
    )
}

export default Menu

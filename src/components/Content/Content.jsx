import React from 'react'
import Menu from '../Menu/Menu'
import './Content.css'
import {Routes,Route} from 'react-router-dom'
import EditProduct from '../EditProduct/EditProduct'
import Empty from '../Empty/Empty'

const Content = () => {
    return (
        <div className="content-area">
            <Routes>
              <Route index element={<Menu/>} />
              <Route path="/editproduct" element={<EditProduct/>} />
              <Route path="/analytics" element={<Empty/>} />
              <Route path="/superviseduser" element={<Empty/>} />
              <Route path="/discount" element={<Empty/>} />
              <Route path="/user" element={<Empty/>} />
              <Route path="/settings" element={<Empty/>} />
              <Route path="*" element={<Empty/>} />
            </Routes>
            </div>
    )
}

export default Content

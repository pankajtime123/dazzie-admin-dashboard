import React from 'react'
import Content from '../../components/Content/Content'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'

import './Admin.css'

const Admin = () => {
    return (
        <div>
            <Navbar />
            <div className="content-area">
                <Sidebar />
                {/* <Routes>
                    <Route path="/" element={<Content />}>
                        <Route index element={<Content/>}/>
                    </Route>
                </Routes> */}
            </div>
        </div>
    )
}

export default Admin

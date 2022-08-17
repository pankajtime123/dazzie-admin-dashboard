import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Admin from './pages/Admin/Admin'

import Content from './components/Content/Content'



function App() {
  return (
    <div className="App">
          <div>
            <Navbar />
            <div className="content-area">
                <Sidebar />
               <Content/>
              
            </div>
        </div>
    </div>
  )
}

export default App

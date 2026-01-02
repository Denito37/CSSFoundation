import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './pages/layout.jsx'
import Home from './pages/home.jsx'
import Foundation from './pages/Foundation.jsx'
import Button from './pages/button.jsx'
import Tab from './pages/tab.jsx'
import Image from './pages/image.jsx'
import Error from './pages/error.jsx'
import Loading from './pages/loading.jsx'
import { ScrollToTop } from './functions/ScrollTT.js'
function App() {
  return (
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='foundation' element={<Foundation />} />
            <Route path='button' element={<Button />} />
            <Route path='tab' element={<Tab />} />
            <Route path='image' element={<Image />} />
            <Route path='error' element={<Error />} />
            <Route path='loading' element={<Loading />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App

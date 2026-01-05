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
import { ThemeProvider } from './components/theme.jsx'
function App() {
  return (
      <ThemeProvider>
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
      </ThemeProvider>
      )
}

/**
  * FEATURE: Add Dark Mode
  * CONTENT: Foundation's page & review Component page content
  * FEATURE: Interactive CSS code
    *Allow users to edit CSS snippet & have it reflect on component
    *limit it to only correspoding component
  * OPTIMIZE: optimize website based on light house recommendations
  * UPDATE: Move to REACT 19 & REACT ROUTER V7
      *Use <Activity> component
  * DEVOPS: Move from Vercel to GH Pages : OPTIONAL
 */

export default App

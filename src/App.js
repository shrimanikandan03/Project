import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './Bar/Layout'
import Home from './Bar/Home'
import About from './Bar/About'
import Contact from './Bar/Contact'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
       </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
// import React from 'react'
// import Counter from './Bar/Counter'
// export default function App() {
//   return (
//     <div><Counter/></div>
//   )
// }
// import React from 'react'
// import Reducer from './Bar/Reducer'

// export default function App() {
//   return (
//     <div><Reducer/></div>
//   )
// }

// import React from 'react'
// import Effect from './Bar/Effects'
// export default function App() {
//   return (
//     <div><Effect/></div>
//   )
// }

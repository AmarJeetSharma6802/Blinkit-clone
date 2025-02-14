import React,{useState} from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home/Home';
import Pharmacy from './Pages/Pharmacy/Pharmacy';
import Digestive from './Pages/disgestive/Disgestive';
import Sanitizers from './Pages/Sanitizer/Sanitizers';
import PatFood from './Pages/PatFood/PatFood';
import BabyItems from './Pages/BabyItems/BabyItems';
import SelectedHomepageItems from './Pages/SelctedProduct/SelectedHomepageItems';
import Vegitable from './Pages/moblieview/Vegitable';
import SelectedPharmacy from './Pages/SelctedProduct/SelectedPharmacy';
import Milk from './Pages/milk/Milk';
import SlectedMilk from './Pages/SelctedProduct/SlectedMilk';
import SelctedVegitable from './Pages/SelctedProduct/SelectedVegitable';
function App() {



  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="pharmacy" element={<Pharmacy/>}/> 
        <Route path="digestive" element={<Digestive/>}/> 
        <Route path="masks-sanitizers" element={<Sanitizers/>}/> 
        <Route path="patFood" element={<PatFood/>}/> 
        <Route path="BabyItems" element={<BabyItems/>}/> 
        <Route path="milk" element={<Milk/>}/> 
        <Route path="vegitable" element={<Vegitable/>}/> 
        <Route path="/slectedHomeImage/:id/:FirstP" element={<SelectedHomepageItems/>}/> 
        <Route path="/slectedPharmacy/:id/:FirstP" element={<SelectedPharmacy/>}/> 
        <Route path="/slectedMilk/:id/:FirstP" element={<SlectedMilk/>}/> 
        <Route path="/selectedVegitable/:id/:FirstP" element={<SelctedVegitable/>}/> 

      </Route>
    )
  ) 
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RouteLayout from './Ui/RouteLayout'
import Home from './Features/Home'
import Program from './Features/Program'
import StaffDetail from './Features/StaffDetail'
import Notice from './Features/Notice'
import Syllabus from './Features/Syllabus'
import AboutUs from './Features/AboutUs'
import Animal from './Features/Animal'
import Plant from './Features/Plant'
import Dit from './Features/Dit'
import AdmissionForm from './Features/AdmissionForm'

const router = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true, element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'program/animal',element:<Animal/>},
    {path:'program/plant',element:<Plant/>},
    {path:'program/Dit',element:<Dit/>},
    {path:'staffdetail', element:<StaffDetail/>},
    {path:'notice', element:<Notice/>},
    {path:'syllabus',element:<Syllabus/>},
    {path:'admissionform',element:<AdmissionForm/>},
    {path:'aboutUs', element:<AboutUs/>}
    
    
   

  ]
}])
const App = () => {
  return (
    <div>
    <RouterProvider router = {router}/>
    </div>
  )
}

export default App

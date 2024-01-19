import React ,{useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import "./App.css"
import Home from './component/Home';
import Navbar from './component/Layout/Navbar';
import Footer from './component/Layout/Footer';
import Login from './component/Layout/Login';
import Register from './component/Layout/Register'
import Tour from './component/Tour/Tour.jsx';
import Subscribe from './component/Subscribe/Subscribe';
import Section from './component/Section/Section';
import Book from './component/Book/Book';
import AboutPage from './component/AboutPage/AboutPage';
import Profile from './component/Profile/Profile.tsx';
const App = () => {
  const [bookingData,setBookingData]=useState({
    id: "01",
    title: "Westminister Bridge",
    city: "London",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    featured: true,
  });
  
  return (
    <>
  <Router>
    <Routes>
    <Route path='/navbar' exact element={<Navbar/>}/>
      <Route path="/" exact element ={<Home bookingData={bookingData} setBookingData={setBookingData}/>}/>
      <Route path='/footer' exact element={<Footer/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/register' exact element={<Register/>}/>
      <Route path='/tour' exact element={<Tour bookingData={bookingData} setBookingData={setBookingData}/>}/>
      <Route path='/subscribe' exact element={<Subscribe/>}/>
      <Route path='/section' exact element={<Section/>}/>
      <Route path='/about' exact element={<AboutPage/>}/>
      <Route path='/profile' exact element={<Profile/>}/>
      <Route path='/book' exact element={<Book bookingData={bookingData} setBookingData={setBookingData}/>}/>
    </Routes>
  </Router>
    </>
  )
}

export default App
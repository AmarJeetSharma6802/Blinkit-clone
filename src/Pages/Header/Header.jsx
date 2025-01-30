import React, { useEffect, useRef, useState } from 'react'
import './Header.css'
import downArrow from '../../assets/downArrow.png'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import rightarrow from '../../assets/right-arrow.png'



function Header() {
const [Loactionactive,setLocationActive] =useState(false)
const [cartActive,setCartActive]= useState(false)



 const locationBtn =()=>{
  setLocationActive(true)
 }
 const close =()=>{
  setLocationActive(false)
 }

 const navigate= useNavigate()

  const messages = [
    "Welcome to my website",
    "I'm glad you're here",
    "Let's get started",
    "You're in the right place",
    "I'm excited to share this with you",

  ]

  const [currentIndex ,setCurrentIndex] =useState(0)
  const [fade ,setFade] =useState(true)

  useEffect(()=>{
    const interval = setInterval(() => {
      setFade(false)

      setTimeout(()=>{
        setCurrentIndex(prevIndex => (prevIndex +1 )% messages.length)
        setFade(true)
      },1000)
    },3000)

    return () => clearInterval(interval);
  },[])

  const logoBtn =()=>{
    navigate('/')
  }
  const addtoCarBtn=()=>{
    setCartActive((prev) => ! prev)
    // console.log("click")
  }

  const closeCart=()=>{
    setCartActive(false)
  }
  
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0); 
  // const totalPrice = cartItems.reduce(
  //   (acc, item) => acc + (item.price * item.quantity), 
  //   0
  // )

  
  return (
    <div>
      <header>
        <div className="login-logo">
        <div className="logo" onClick={logoBtn}><svg width="134" height="32" viewBox="0 0 114 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3342 7.186C16.2619 7.186 17.9832 7.66644 19.4978 8.62732C21.0262 9.57447 22.2242 10.9197 23.0917 12.663C23.9316 14.3377 24.3516 16.3075 24.3516 18.5724C24.3516 20.7687 23.9316 22.7316 23.0917 24.4612C22.2517 26.1908 21.0675 27.5429 19.5391 28.5175C17.9969 29.5058 16.2619 30 14.3342 30C12.9297 30 11.6078 29.7117 10.3685 29.1352C9.12927 28.5587 8.06901 27.7488 7.18775 26.7056V29.4852H0V0H7.18775V10.4598C8.06901 9.41661 9.12927 8.61359 10.3685 8.05079C11.6078 7.47426 12.9297 7.186 14.3342 7.186ZM12.1861 24.0494C13.2051 24.0494 14.1139 23.8161 14.9125 23.3493C15.7112 22.8826 16.3377 22.2306 16.7921 21.3933C17.2465 20.5697 17.4737 19.6294 17.4737 18.5724C17.4737 17.5429 17.2465 16.6095 16.7921 15.7721C16.3377 14.9348 15.7112 14.2828 14.9125 13.8161C14.1139 13.3493 13.2051 13.116 12.1861 13.116C11.2223 13.116 10.3617 13.3493 9.60432 13.8161C8.84699 14.269 8.2549 14.9073 7.82804 15.731C7.40118 16.5683 7.18775 17.5154 7.18775 18.5724C7.18775 19.6294 7.40118 20.5765 7.82804 21.4139C8.2549 22.2375 8.84699 22.8826 9.60432 23.3493C10.3617 23.8161 11.2223 24.0494 12.1861 24.0494Z" fill="#F8CB46"></path><path d="M25.3356 29.4852V0H32.5233V29.4852H25.3356Z" fill="#F8CB46"></path><path d="M34.5607 29.4852V7.68016H41.7071V29.4852H34.5607Z" fill="#F8CB46"></path><path d="M57.2319 7.186C58.7603 7.186 60.1372 7.5429 61.3627 8.25669C62.5882 8.95676 63.5521 9.94509 64.2544 11.2217C64.9291 12.512 65.2664 13.9739 65.2664 15.6074V29.4852H58.4092V17.2135C58.4092 16.4173 58.2508 15.7104 57.9341 15.0927C57.6312 14.4612 57.1974 13.9739 56.6329 13.6307C56.0821 13.2876 55.4349 13.116 54.6914 13.116C53.9891 13.116 53.3419 13.2876 52.7498 13.6307C52.1577 13.9602 51.6965 14.4132 51.366 14.9897C51.0218 15.5388 50.8496 16.1839 50.8496 16.9252L50.8083 29.4852H43.6619V7.68016H50.8083V10.1716C51.483 9.23816 52.3849 8.51064 53.5141 7.98902C54.6432 7.45367 55.8824 7.186 57.2319 7.186Z" fill="#F8CB46"></path><path d="M81.0597 17.2135L89.1769 29.4852H81.0597L76.3091 21.7639L74.1198 24.2965V29.4852H66.932V0H74.1198V16.2869L81.0184 7.68016H89.1356L81.0597 17.2135Z" fill="#F8CB46"></path><path d="M34.5569 0.00232667H41.7267V5.59207H34.5569V0.00232667Z" fill="#F8CB46"></path><path d="M90.3176 29.4198V7.61479H97.464V29.4198H90.3176Z" fill="#54B226"></path><path d="M112.575 23.2634L114 27.855C113.353 28.4727 112.534 28.9737 111.542 29.3581C110.564 29.7424 109.607 29.9346 108.671 29.9346C107.322 29.9346 106.117 29.6395 105.057 29.0492C103.996 28.4452 103.17 27.6079 102.578 26.5372C101.986 25.494 101.69 24.2929 101.69 22.9339V13.3183H98.819V7.61479H101.69V0.00241089H108.547V7.61479H113.071V13.3183H108.547V21.6161C108.547 22.3162 108.733 22.8859 109.105 23.3251C109.477 23.7644 109.952 23.984 110.53 23.984C110.943 23.984 111.329 23.9223 111.687 23.7987C112.045 23.6752 112.341 23.4967 112.575 23.2634Z" fill="#54B226"></path><path d="M90.2609 0.00241089H97.4307V5.59215H90.2609V0.00241089Z" fill="#54B226"></path></svg></div>
        <div className="LoginId">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16 5.33317C10.1089 5.33317 5.33329 10.1088 5.33329 15.9998C5.33329 21.8909 10.1089 26.6665 16 26.6665C21.891 26.6665 26.6666 21.8909 26.6666 15.9998C26.6666 10.1088 21.891 5.33317 16 5.33317ZM2.66663 15.9998C2.66663 8.63604 8.63616 2.6665 16 2.6665C23.3638 2.6665 29.3333 8.63604 29.3333 15.9998C29.3333 23.3636 23.3638 29.3332 16 29.3332C8.63616 29.3332 2.66663 23.3636 2.66663 15.9998Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M16 10.6667C14.5272 10.6667 13.3333 11.8606 13.3333 13.3333C13.3333 14.8061 14.5272 16 16 16C17.4727 16 18.6666 14.8061 18.6666 13.3333C18.6666 11.8606 17.4727 10.6667 16 10.6667ZM10.6666 13.3333C10.6666 10.3878 13.0544 8 16 8C18.9455 8 21.3333 10.3878 21.3333 13.3333C21.3333 16.2789 18.9455 18.6667 16 18.6667C13.0544 18.6667 10.6666 16.2789 10.6666 13.3333Z" fill="black"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.2674 23.2783C10.3653 23.6502 9.8256 24.2056 9.46237 25.1467C9.19724 25.8337 8.42539 26.1757 7.73839 25.9106C7.0514 25.6454 6.70941 24.8736 6.97455 24.1866C7.59355 22.5827 8.65364 21.4714 10.2512 20.8129C11.7534 20.1936 13.6722 20 15.9998 20C18.3392 20 20.2689 20.1812 21.775 20.7938C23.3847 21.4487 24.4443 22.5677 25.0551 24.1993C25.3132 24.8889 24.9634 25.6572 24.2737 25.9154C23.5841 26.1735 22.8157 25.8237 22.5576 25.1341C22.199 24.176 21.666 23.6284 20.7702 23.2639C19.7707 22.8573 18.2817 22.6667 15.9998 22.6667C13.7457 22.6667 12.2649 22.8671 11.2674 23.2783Z" fill="black"></path></svg>
        </div>
        </div>
        <div className="addres">
        <div class="LocationBar">Delivery in 8 minutes</div>
        <div className="loction-arrow" onClick={locationBtn}>
        <div className="location-two">B62, Pocket B, South City I, Sector 30, Gurugram, Haryana 122007, India</div>
        <img src={downArrow} alt="" id='downarrow' />
        </div>
        </div>

        <div className="search">
        <div className='box-fade'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <div className="fade-in">
        <span
          className={`changing-text ${fade ? 'fade-in' : 'fade-out'}`}
        >
          {messages[currentIndex]}
        </span>
        </div>
        </div>
        </div>
        <div className="login-cart">
          <div className="loginBnt">
            <button className='logBtn'>Login</button>
          </div>

           <div className="mycart" onClick={addtoCarBtn}>
            {totalItems > 0 ? (
              <button className="cartBtn showcart">
                <div className="btnspan">
                <span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="mycart-span">
                  {/* {` Items: ${totalItems} | ₹${totalPrice}`} */}
                  {`  ${totalItems} Items`}
                </span>
                </div>
                <div className="view-cart">
            <p>view cart</p>
           <p><i class="fa-solid fa-caret-right"></i></p>
          </div>
              </button>
            ) : (
              <button className="cartBtn">
                <div className="btnspan">
                <span>
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span className="mycart-span">My Cart</span>
                </div>
                <div className="view-cart">
            <p>view cart</p>
            <p><i class="fa-solid fa-caret-right"></i></p>
          </div>
              </button>
              
            )}
          </div>
        </div>
       
      </header>

      <div className={`arrow-overray ${Loactionactive ? "active" :""}`}  >
        <div className={`api-location ${Loactionactive ? "active" :""}`}>
        <div className="change">
          <p className='change-para'>Change Loction</p>
          <p className='slected'>Select Location</p>
        </div>
        <div className="close" onClick={close}>
          <p><i class="fa-solid fa-xmark"></i></p>
        </div>
        <div className="detect-or-serach">
         <div className="detect">
         <p>Detect my location</p>
         </div>
         <div className="or">
          <p>OR</p>
         </div>
         <div className="input">
         <input type="text" placeholder='search'  id='input'/>
         </div>
         <div className="catch-location">
          <p className='crosshairs'><i class="fa-solid fa-location-crosshairs"></i></p>
          <p className='use'>Use current location</p>
         </div>
          
        </div>
      </div>
      </div>

    {cartActive && <Cart closeCart={closeCart}/>}
    </div>
  )
}

export default Header
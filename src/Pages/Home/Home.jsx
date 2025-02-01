import React, { useEffect } from 'react'
import'./home.css'
import HomeCaroucel from './HomeCaroucel'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom'


function Home() {
  const productItems  =[
   {
    id:1,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png",
   },
   {
    id:2,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png",
   },
   {
    id:3,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png",
   },
   {
    id:4,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-4_9.png",
   },
   {
    id:5,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-5_4.png",
   },
   {
    id:6,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png",
   },
   {
    id:7,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png",
   },
   {
    id:8,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-8_4.png",
   },
   {
    id:9,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-9_3.png",
   },
   {
    id:10,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-10.png",
   },
   {
    id:11,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-11.png",
   },
   {
    id:12,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-12.png",
   },
   {
    id:13,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-13.png",
   },
   {
    id:14,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-14.png",
   },
   {
    id:15,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-15.png",
   },
   {
    id:16,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-16.png",
   },
   {
    id:17,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-17.png",
   },
   {
    id:18,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-18.png",
   },
   {
    id:19,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-19.png",
   },
   {
    id:20,
    img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=225/layout-engine/2022-11/Slice-20.png",
   },

  ]
  useEffect(()=>{
    document.title="Everything delivered in minutes"
  },[])

  const navigate = useNavigate()
  

  const Pharmacy = () => {
    navigate('/pharmacy')
  }
  const patFoodBtn = () => {
    navigate('/patFood')
  }
  const BabyItemsBtn = () => {
    navigate('/BabyItems')
  }
  const vegitaleBtn = () => {
    navigate('/vegitable')
  }
  const milkBtn = () => {
    navigate('/milk')
  }

  return (
    <div>
      <Helmet>
        <title>Everything Delivered in Minutes</title>
        <meta name="description" content="Get all your daily essentials delivered to your doorstep in minutes. Fast, reliable, and convenient service." />
        <meta name="keywords" content="delivery, essentials, fast delivery, online shopping, groceries, home delivery" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Blinkit clone" />
        <meta property="og:image" content="hhttps://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ozrgpc6hulbfxyi1zeqd" />
        <meta property="og:title" content="Everything delivered in minutes" />
        <meta property="og:description" content="Get all your daily essentials delivered to your doorstep in minutes. Fast, reliable, and convenient service."/>
        {/* <link rel="canonical" href="https://www.yourwebsite.com/home" /> */}
        <meta property="og:type" content="website" />
        <meta property='tg:title' content='Everything delivered in minutes' />
      </Helmet>

        <div className="short-Width">
            <div className="paneer-img">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="" id='paneer-img' />
               
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/layout-engine/2024-02/android_feed_mweb-1.png" alt="" id='liter-img' />
            </div>

        <div className="three-img">
          <div className="laptop-view">
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg " alt="" onClick={Pharmacy} />
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" onClick={patFoodBtn} />
      <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" onClick={BabyItemsBtn} />
      </div>
      <div className="mobile-view">
       <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/1487_1679466558536.png" alt="" onClick={vegitaleBtn} />
       <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/14_1678949253289.png" alt="" onClick={milkBtn} />
      </div>
        </div>

        <div className="mobile-view-three-img">
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/category/cms_images/icon/1237_1670927167688.png" alt="" />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269009421.png" alt="" id='three-img-moblie' />
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/images/category/cms_images/icon/15_1676610279582.png" alt="" />
        </div>

        <div className="grid">
        {
    productItems.map((item) => {
      return (
        <div key={item.id} className="grid-items"> 
          <a href="">
            <img src={item.img} alt="" />
          </a>
        </div>
      )
    })
  }
         
        </div>

        <HomeCaroucel/>

    </div>
    </div>

  )
}

export default Home
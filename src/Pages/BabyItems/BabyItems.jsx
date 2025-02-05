import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import BabyItemsTwo from "./BabyItemsTwo";
import { Helmet } from "react-helmet";


function BabyItems() {
  const [activeId, setActiveId] = useState(1); 

  useEffect(() => {
    document.title = "Buy Diapers & More Online | Grofers";
  }, []);

  const pharmacyItems = [
    {
      id: 1,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1000_1685686698390.png",
      name: "Diapers & More",
      link: "##",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1001_1643447265532.png",
      name: "Bathing Needs",
      link: "##",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/996_1676379098477.png",
      name: "Baby Wipes",
      link: "##",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1590_1643447293757.png",
      name: "Baby Foods",
      link: "##",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1002_1643447281696.png",
      name: "Skin & Hair Care",
      link: "##",
    },
    {
      id: 6,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/169_1643447211741.png",
      name: "Feeding",
      link: "##",
    },
    {
      id: 7,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/998_1643447239357.png",
      name: "Oral & Nasal Care",
      link: "##",
    },
    {
      id: 8,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/597_1676379033591.png",
      name: "Nursing",
      link: "##",
    },
    {
      id: 9,
      img: "https://cdn.grofers.com/88da2974-1dc0-4e90-b8c3-1d989c9b49c2.png",
      name: "Baby Gifting & Toys",
      link: "##",
    },
    {
      id: 10,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/85_1643447197842.png",
      name: "Hygiene",
      link: "##",
    },
    {
      id: 11,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1967_1643447304766.png",
      name: "Mom Care Needs",
      link: "##",
    },
    {
      id: 12,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1707980337522-11",
      name: "Baby Accessories & Apparel",
      link: "##",
    },
    
  ];

  const navigate = useNavigate();

  const handleLinkClick = (event, item) => {
    if (item.link === "##") {
      event.preventDefault();
      setActiveId(item.id); 
    } else {
      setActiveId(item.id); 
      navigate(item.link); 
    }
  };

  return (
    <div>
<Helmet>

        <title>Buy Diapers & More Online | Grofers</title>
        <meta name="description" content="
        Grofers offers a wide range of baby care products online. Buy diapers, baby food, baby clothes. " />
        <meta name="keywords" content="
        baby care products, buy diapers online, baby food, baby clothes, baby accessories." />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Blinkit clone" />
        <meta property="og:image" content="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ozrgpc6hulbfxyi1zeqd" />
        <meta property="og:title" content="Everything delivered in minutes" />
        <meta property="og:description" content="Get all your daily essentials delivered to your doorstep in minutes. Fast, reliable, and convenient service."/>
        <link rel="canonical" href="https://blinkit-clone-c3b3.onrender.com/BabyItems" />
        <meta property="og:type" content="website" />
        <meta property='tg:title' content='Everything delivered in minutes' />
        
      </Helmet>

      <div className="top-deatils">
        <ul className="top-details-ul">
          <li className="top-details-li">Vegetables & Fruits</li>
          <li className="top-details-li">Dairy & Breakfast</li>
          <li className="top-details-li">Munchies</li>
          <li className="top-details-li">Cold Drinks & Juices</li>
          <li className="top-details-li">Instant & Frozen Food</li>
          <li className="top-details-li">More</li>
        </ul>
      </div>

      <div className="pharmacy">
        <div className="left-width-pharmacy">
          <div className="box-itmes">
            {pharmacyItems.map((item) => (
              <div
                key={item.id}
                className={`product-items-pharmacy  ${
                  activeId === item.id ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, item)}
              >
                <div className="img-pharmacy-2">
                  <img src={item.img} alt={item.name} id="itmes-img-pharmacy-2" />
                </div>
                <p className="left-pharmacy-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-width-pharmacy">
          <div className="buyMarks">
            <p className="buyMarks-para">Buy Diapers & More Online</p>
            <div className="relevance">
              <p>
              <span className="relevance-span">Relevance</span>
                <span className="relevance-i">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
            </div>
          </div>
          <BabyItemsTwo />
        </div>
      </div>
    </div>
  );
}

export default BabyItems;

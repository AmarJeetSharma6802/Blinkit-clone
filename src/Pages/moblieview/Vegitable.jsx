import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import './mobileview.css'
import VegitableTwo from "./VegitableTwo";

function Vegitable() {
  const [activeId, setActiveId] = useState(1); 

  useEffect(() => {
    document.title = "Buy Masks & Sanitizers Online | Pharmacy | MedCareRx";
  }, []);

  const pharmacyItems = [
    {
      id: 1,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702463308432-3",
      name: "Fresh Vegetables",
      link: "##",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702734004998-8",
      name: "Fresh Fruits",
      link: "##",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1712577388325-3",
      name: "Mangoes & Melons",
      link: "##",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1702734004998-3",
      name: "Seasonal",
      link: "##",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/278_1678705041060.png",
      name: "Exotics",
      link: "##",
    },
    {
      id: 6,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/395_1668582176947.png",
      name: "Freshly Cut & Sprouts",
      link: "##",
    },
    {
      id: 7,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/157_1643443974388.png",
      name: "Frozen Veg",
      link: "##",
    },
    {
      id: 8,
      img: "https://cdn.grofers.com/66acfb51-c5fe-4718-a200-61efaf773556.png",
      name: "Leafies & Herbs",
      link: "##",
    },
    {
      id: 9,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/742_1677580428980.png",
      name: "Certified Organic",
      link:"##"
    },
    {
      id: 10,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1452_1617891490134.png",
      name: "Flowers & Leaves",
      link:"##"
    },
    {
      id: 11,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/39_1677581549982.png",
      name: "Hydroponic",
      link:"##"
    },
    {
      id: 12,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1719920085745-3",
      name: "All Fruits & Vegetables",
      link:"##"
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
                className={`product-items-pharmacy mobile ${
                  activeId === item.id ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, item)}
              >
                <div className="img-pharmacy-2">
                  <img src={item.img} alt={item.name} id="itmes-img-pharmacy3" />
                </div>
                <p className="left-pharmacy-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-width-pharmacy">
          <div className="buyMarks">
            <p className="buyMarks-para">Buy Fresh Vegetables Online</p>
            <div className="relevance">
              <p>
                <span className="relevance-span">Relevance</span>
                <span className="relevance-i">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
            </div>
          </div>
          <VegitableTwo />
        </div>
      </div>
    </div>
  );
}

export default Vegitable;

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import PatFoodTwo from "./PatFoodTwo";

function PatFood() {
  const [activeId, setActiveId] = useState(1); 

  useEffect(() => {
    document.title = "Pet Food & Accessories Online: Buy Dog Food & Treats Online at Best Prices in India - Grofers";
  }, []);

  const pharmacyItems = [
    {
      id: 1,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1716287986266-3",
      name: "Accessories & Other Supplies",
      link: "##",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717067945707-3",
      name: "Cat Needs",
      link: "##",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717072632680-3",
      name: "Diverse Pet Food",
      link: "##",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717137798882-3",
      name: "Dog Needs",
      link: "##",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/app/images/category/cms_images/rc-upload-1717146479043-3",
      name: "Pet Grooming",
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
                className={`product-items-pharmacy pat-food  ${
                  activeId === item.id ? "active" : ""
                }`}
                onClick={(e) => handleLinkClick(e, item)}
              >
                <div className="img-pharmacy">
                  <img src={item.img} alt={item.name} id="itmes-img-pharmacy" />
                </div>
                <p className="left-pharmacy-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="right-width-pharmacy">
          <div className="buyMarks">
            <p className="buyMarks-para">Buy Dog Food & Treats Online</p>
            <div className="relevance">
              <p>
              <span className="relevance-span">Relevance</span>
                <span className="relevance-i">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
            </div>
          </div>
          <PatFoodTwo />
        </div>
      </div>
    </div>
  );
}

export default PatFood;

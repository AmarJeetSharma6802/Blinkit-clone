import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import "./Pharmacy.css";
import RightPharmacy from "./RightPharmacy";

function Pharmacy() {
  const [activeId, setActiveId] = useState(1); 

  useEffect(() => {
    document.title = "Buy Masks & Sanitizers Online | Pharmacy | MedCareRx";
  }, []);

  const pharmacyItems = [
    {
      id: 1,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/75_1698664223270.png",
      name: "Cough & Cold",
      link: "/pharmacy",
    },
    {
      id: 2,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1826_1643447577409.png",
      name: "Masks & Sanitizers",
      link: "/masks-sanitizers",
    },
    {
      id: 3,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/298_1697295806885.png",
      name: "Digestive Care",
      link: "/digestive",
    },
    {
      id: 4,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/62_1697295823137.png",
      name: "Healthcare Devices",
      link: "##",
    },
    {
      id: 5,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/741_1697295733939.png",
      name: "Sexual Wellness",
      link: "/pharmacy/sexual-wellness",
    },
    {
      id: 6,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/629_1643447524816.png",
      name: "Adult Diapers",
      link: "/pharmacy/sexual-wellness",
    },
    {
      id: 7,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/308_1681837991970.png",
      name: "Protein & Sports Supplements",
      link: "/pharmacy/protein-sports-supplements",
    },
    {
      id: 8,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/155_1697295835701.png",
      name: "Wound Care And Pain Relief",
      link: "##",
    },
    {
      id: 9,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/960_1689245796579.png",
      name: "Milk Drinks",
      link:"##"
    },
    {
      id: 10,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/1121_1643447561911.png",
      name: "Antiseptic Liquid",
      link:"##"
    },
    {
      id: 11,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/326_1697295842766.png",
      name: "Oral Health & Eye Care",
      link:"##"
    },
    {
      id: 12,
      img: "https://cdn.grofers.com/app/images/category/cms_images/icon/199_1697295848549.png",
      name: "Antiseptic Liquid",
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
                className={`product-items-pharmacy  ${
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
            <p className="buyMarks-para">Buy Cough & Cold Online</p>
            <div className="relevance">
              <p>
                <span className="relevance-span">Relevance</span>
                <span className="relevance-i">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </p>
            </div>
          </div>
          <RightPharmacy />
        </div>
      </div>
    </div>
  );
}

export default Pharmacy;

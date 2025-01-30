import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { addItem } from "../Reducer/cartSlice";

function RightPharmacy() {
  const dispatch = useDispatch();

  const rightPharmacyItems = [
    {
      id: 1,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Wellbeing Nutrition Throat Relief Strips",
      secondP: "1 pack (30 strips)",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/499611a.jpg?ts=1701153266",
      price: "522",
    },
    {
      id: 2,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Vicks Inhaler (Instant Relief)",
      secondP: "0.5 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/111676a.jpg?ts=1690808342",
      price: "69s",
    },
    {
      id: 3,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Honitus Hot Sip Ayurvedic Kaadha",
      secondP: "1 pack (7 x 4 g)",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0cb0c11e-63b9-494a-9217-77a8aaee3ca6.jpg?ts=1722510308",
      price: "76",
      svg: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      parcentage: "9%",
      off: "OFF",
    },
    {
      id: 4,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
      FirstP: "Honitus Cough Syrup",
      secondP: "100 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
      price: "113",
      svg: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      parcentage: "9%",
      off: "OFF",
    },
    {
      id: 5,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Vicks VapoRub Chest rubs & balms",
      secondP: "50 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/f62d94c5-eb26-4880-9556-d0a5efe0cdad.jpg?ts=1729755997",
      price: "180",
    },
    {
      id: 6,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Yogi Kanthika Throat Relief Tablets",
      secondP: "140 Tablets",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495559a.jpg?ts=1687338003",
      price: "90",
    },
    {
      id: 7,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Vicks Cough Tablets - Warming Ginger",
      secondP: "1 pack (25 pieces)",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/78e0ab78-92de-46ac-9174-5a24094a2e37.jpg?ts=1719209405",
      price: "43",
      svg: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      parcentage: "14%",
      off: "OFF",
    },

    {
      id: 8,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Hamdard Sualin Cold & Cough Tablets",
      secondP: "60 Tablets",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/d4e32dd8-b657-4143-be8f-cd9bac71a31b.jpg?ts=1733140392",
      price: "75",
    },
    {
      id: 9,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Vicks Cough Tablets - Cooling Menthol",
      secondP: "1 pack (25 pieces)",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3900aced-e38b-40be-8d20-b9577b7cb0a9.jpg?ts=1719209389",
      price: "43",
      svg: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      parcentage: "14%",
      off: "OFF",
    },
    {
      id: 10,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Vicks VapoRub Steam Pods",
      secondP: "4 capsules",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/534419a.jpg",
      price: "92",
    },
    {
      id: 11,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Himalaya Koflet Cough Syrup",
      secondP: "100 ml ",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/e71aa2b0-689a-4788-bedc-d4d0d1d20d86.jpg?ts=1737370599",
      price: "104",
      svg: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      parcentage: "9%",
      off: "OFF",
    },
    {
      id: 12,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Dabur Sitopaladi Churna",
      secondP: "60 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4b872429-0ddf-4c1c-8116-b0c77420bbff.jpg?ts=1716319759",
      price: "130",
      svg: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      parcentage: "9%",
      off: "OFF",
    },
    {
      id: 13,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Vicks Vaporub Xtra Strong Balm",
      secondP: "25 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/495626a.jpg?ts=1687338004",
      price: "125",
    },
    {
      id: 14,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "100 ml",
      secondP: "50 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/498687a.jpg?ts=1686566077",
      price: "104",
      svg: (
        <svg
          width="29"
          height="28"
          viewBox="0 0 29 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z"
            fill="#538CEE"
          ></path>
        </svg>
      ),
      parcentage: "10%",
      off: "OFF",
    },
    {
      id: 15,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Hamdard Joshina Cough Syrup",
      secondP: "200 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/4811818d-e4e3-418e-9fa3-a35ea5cc0ba0.jpg?ts=1733140432",
      price: "140",
    },
  ];
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      <div className="rightpharmacy-itmes">
        {rightPharmacyItems.map((item, index) => {
          return (
            <div key={index} className="rightpharmacy-item">
              <Link
                to={`/slectedPharmacy/${item.id}/${item.FirstP}`}
                className="rightpharmacy-img"
              >
                <img src={item.img} alt="" id="rightpharmacy-img" />
                <div className="rightpharmacy-watch">
                  <img src={item.watch} alt="" id="rightpharmacy-watch-img" />
                  <p className="min-para">{item.min}</p>
                </div>
                <div className="svg">
                  {item.svg}
                  <div className="percantage relative">
                    <p>{item.parcentage}</p>
                    <p>{item.off}</p>
                  </div>
                </div>
              </Link>
              <p className="pharmacy-para-details">{item.FirstP}</p>
              <p className="second-caroucel-para">{item.secondP}</p>
              <div className="rightpharmacy-price price-add ">
                <p className="price">₹{item.price}</p>
                <button
                  className="add-button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(item);
                  }}
                >
                  ADD
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightPharmacy;

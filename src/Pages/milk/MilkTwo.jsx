import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { addItem } from "../Reducer/cartSlice";

function MilkTwo() {
  const dispatch = useDispatch();

  const rightPharmacyItems = [
    {
      id: 1,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Amul Taaza Toned Fresh Milk",
      secondP: "500 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5ee4441d-9109-48fa-9343-f5ce82b905a6.jpg?ts=1706182143",
      price: "28",
    },
    {
      id: 2,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Amul Gold Full Cream Fresh Milk",
      secondP: "500 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      price: "34",
    },
    {
      id: 3,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Amul Masti Pouch Curd",
      secondP: "400 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
      price: "35",
    },
    {
      id: 4,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
      FirstP: "Honitus Cough Syrup",
      secondP: "100 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562",
      price: "113",
     
    },
    {
      id: 5,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Amul Salted Butter",
      secondP: "100 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
      price: "60",
    },
    {
      id: 6,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Mother Dairy Full Cream Fresh Milk",
      secondP: "500 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8f6bfafc-ad44-422a-8e96-7e2d2994012a.jpg?ts=1707998856",
      price: "34",
    },
    {
      id: 7,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Mother Dairy Full Cream Fresh Milk",
      secondP: "500 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ba929c05-aba2-4838-b674-e2072089022b.jpg?ts=1712325614",
      price: "29",
    },

    {
      id: 8,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Amul Cow Fresh Milk",
      secondP: "500 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/89cb3ef5-0003-4100-bcf4-f97092f30997.jpg?ts=1712325592",
      price: "29",
    },
    {
      id: 9,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Vicks Cough Tablets - Cooling Menthol",
      secondP: "1 l",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6d41a6e4-eb1b-413c-8e20-7b9e892e42f8.jpg?ts=1712325555",
      price: "71",
    
    },
    {
      id: 10,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Mother Dairy Classic Pouch Curd",
      secondP: "400 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/86446a.jpg?ts=1687948913",
      price: "34",
    },
  ]
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
                to={`/slectedMilk/${item.id}/${item.FirstP}`}
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

export default MilkTwo;

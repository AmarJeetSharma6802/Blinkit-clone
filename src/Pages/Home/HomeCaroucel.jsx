import React, { useRef, useState } from "react";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";
import "./home.css";
import HomeCaroucelTwo from "./HomeCaroucelTwo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { addItem } from "../Reducer/cartSlice";

function HomeCaroucel() {
  const itemMember = [
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
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Mother Dairy Toned Milk",
      secondP: "500 ml",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562",
      price: "28",
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
      FirstP: "Harvest Gold - White Bread",
      secondP: "350 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",
      price: "30",
    },
    {
      id: 9,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Amul Homogenised Toned Milk",
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
    {
      id: 11,
      min: "8 min",
      watch:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
      FirstP: "Mother Dairy Classic Cup Curd",
      secondP: "400 g",
      img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/329549a.jpg?ts=1690805806",
      price: "50",
    },
  ];
  const dispatch = useDispatch();
  const carouselRef = useRef(null);

 
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll carousel function
  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 300;

    if (direction === "left") {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update button states when scrolling
  const handleScroll = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // Disable left button when at the start
    setCanScrollLeft(carousel.scrollLeft > 0);

    // Disable right button when at the end
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft);
  };

 
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
};
  return (
    <div>
      <div className="shop-sports">
        <p className="shop-sports-para">Dairy, Bread & Eggs</p>
        <div className="carousel-container-2">
          <button
            className="scroll-button-2 left-2"
            onClick={() => scrollCarousel("left")}
            disabled={!canScrollLeft}
          >
            <img src={leftArrow} alt="" id="left-img" />
          </button>
          <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
            {itemMember.map((item) => (
              <div key={item.id} className="carousel-item-2">
                <Link to={`/slectedHomeImage/${item.id}/${item.FirstP}`}>
                  <img
                    src={item.img}
                    alt={`${item.p} item`}
                    className="carousel-image-2"
                  />
                  <div className="lineheight">
                    <div className="min-clock">
                      <img src={item.watch} alt="" id="watch" />
                      <p className="min-para">{item.min}</p>
                    </div>
                    <div className="details">
                      <p className="fisrt-caroucel-para">{item.FirstP}</p>
                      <p className="second-caroucel-para">{item.secondP}</p>
                    </div>
                    <div className="price-add ">
                      <p className="price">₹{item.price}</p>
                      <button className="add-button" onClick={(e)=>{
                        e.preventDefault();
                        handleAddToCart(item);
                      }}>ADD</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <button
            className="scroll-button-2 right-2"
            onClick={() => scrollCarousel("right")}
            disabled={!canScrollRight}
          >
            <img src={rightArrow} alt="" id="right-img" />
          </button>
        </div>
      </div>
      <HomeCaroucelTwo />
    </div>
  );
}

export default HomeCaroucel;

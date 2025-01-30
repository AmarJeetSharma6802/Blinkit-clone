import React,{useRef,useState} from 'react'
import rightArrow from "../../assets/right-arrow.png"
import leftArrow from "../../assets/left-arrow.png"
import './home.css'
import { useDispatch } from "react-redux"; 
import { addItem } from "../Reducer/cartSlice";

function HomeCaroucelThree() {
    const itemMember =[
        {
            id: 1,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Bisleri Packaged Water",
            secondP:"5 L",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cfeaa68b-2ce1-4c1e-95c5-450bbb9bb281.jpg?ts=1708591243",
            price:"70",
          
        },
        {
            id: 2,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Coca-Cola Soft Drink (750 ml) - Pack of 2",
            secondP:"2 x 750 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/fec89b7b-8a13-477e-b750-7a52e82828a0.jpg?ts=1717747523",
            price:"79",
           
        },
        {
            id: 3,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Thums Up Soft Drink (750 ml)",
            secondP:"750 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/e69c587d-802a-40eb-a40b-a6bc9623526d.jpg?ts=1707312325",
            price:"40",
            
        },
        {
            id: 4,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Bisleri Packaged Water (1 l)",
            secondP:"1 l",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/10b8b01a-8b71-4448-becb-16d4247ef05c.jpg?ts=1707312326",
            price:"161",
           
        },
        {
            id: 5,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Amul Lactose Free Milk",
            secondP:"250 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/600dd9ff-659c-4817-87e7-eec1dea72c63.jpg?ts=1706182144",
            price:"25",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"5%",
            off:"OFF",
        },
        {
            id: 6,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Sprite Lime Flavored Soft Drink 750 ml",
            secondP:"750 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0f87f19e-66da-48cd-8c75-343abf732948.jpg?ts=1707312325",
            price:"40",
        },
        {
            id: 7,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Coca-Cola Diet Coke Soft Drink",
            secondP:"300 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/15288a.jpg?ts=1698840601 ",
            price:"40",
        },
        {
            id: 8,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Kinley Soda Water With Extra Punch",
            secondP:"750 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/122997a.jpg?ts=1688628277",
            price:"20",
        },
        {
            id: 9,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Limca Lemon 'N' Lime Soft Drink 750 ml",
            secondP:"750 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9a7f01e0-e63e-407e-bfc9-449c165f7a1c.jpg?ts=1728051043",
            price:"40",
            
        },
        {
            id: 10,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Ice Cubes by Dras Ice",
            secondP:" kg",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482620a.jpg?ts=1690813234",
            price:"40",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"10%",
            off:"OFF",
        },
        {
            id: 11,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Coca-Cola Zero Sugar Soft Drink",
            secondP:"750 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/484783a.jpg?ts=1688628436",
            price:"38",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"5%",
            off:"OFF",
        },
        {
            id: 12,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Bisleri Packaged Water - Pack of 24",
            secondP:"24 x 250 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/full_screen/pro_19156.jpg?ts=1710346275",
            price:"144",
           
        },
        {
            id: 13,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"7UP Nimbooz with Lemon Juice",
            secondP:" 350 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b330c04e-0e5f-4733-a43f-9351772763d8.jpg?ts=1721201147",
            price:"20",
           
        },
        {
            id: 14,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Mother Dairy Probiotic Unsalted Buttermilk",
            secondP:" 450 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4b2ce8e7-e830-49d4-bab2-2e7aa5f745ca.jpg?ts=1713874287",
            price:"20",
           
        },
        {
            id: 15,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Red Bull Energy Drink (250 ml)",
            secondP:" 250 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/8555d944-41ff-4e1e-95a3-343720e2c743.jpg?ts=1731649650",
            price:"125",
           
        },

    ]
    const carouselRef = useRef(null);
      const dispatch = useDispatch();
    
    
      // State to manage button disabled state
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
                <p className="shop-sports-para">Snacks & Munchies</p>
                <div className="carousel-container-2">
                  <button
                    className="scroll-button-2 left-2"
                    onClick={() => scrollCarousel("left")}
                    disabled={!canScrollLeft}
                  >
                    <img src={leftArrow} alt="" id='left-img'/>
                  </button>
                  <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
                    {itemMember.map((item) => (
                      <div key={item.id} className="carousel-item-2">
                        <a href="#">
                          <img
                            src={item.img}
                            alt={`${item.p} item`}
                            className="carousel-image-2"
                          />

                          <div className="svg">
                           {item.svg}
                          <div className="percantage">
                          <p>{item.parcentage}</p>
                          <p>{item.off}</p>
                          </div>

                          </div>

                          <div className="lineheight">
                          <div className="min-clock">
                            <img src={item.watch} alt="" id='watch' />
                            <p className='min-para'>{item.min}</p>
                          </div>
                          <div className="details">
                          <p className='fisrt-caroucel-para'>{item.FirstP}</p>
                          <p className='second-caroucel-para'>{item.secondP}</p>
                          </div>
                          <div className="price-add ">
                            <p className='price'>₹{item.price}</p>
                            <button className="add-button" onClick={(e)=>{
                        e.preventDefault();
                        handleAddToCart(item);
                      }}>ADD</button>
                          </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                  <button
                    className="scroll-button-2 right-2"
                    onClick={() => scrollCarousel("right")}
                    disabled={!canScrollRight}
                  >
                   <img src={rightArrow} alt="" id='right-img' />
                  </button>
                </div>
              </div>
    </div>
  )
}

export default HomeCaroucelThree
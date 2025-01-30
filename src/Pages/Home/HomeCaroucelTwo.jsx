import React,{useRef,useState} from 'react'
import rightArrow from "../../assets/right-arrow.png"
import leftArrow from "../../assets/left-arrow.png"
import './home.css'
import HomeCaroucelThree from './HomeCaroucelThree'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux"; 
import { addItem } from "../Reducer/cartSlice";


function HomeCaroucelTwo() {
    const itemMember =[
        {
            id: 13,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Foods Baked Coated Peanuts",
            secondP:"50 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/672eb8df-71a6-4fde-a825-8d64aa94d4da.jpg?ts=1736245592",
            price:"69",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"5%",
            off:"OFF",
        },
        {
            id: 14,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Orion Turtle Mexican Lime Corn Chips",
            secondP:"115 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/519582a.jpg?ts=1690830565",
            price:"95",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"5%",
            off:"OFF",
        },
        {
            id: 15,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Cheetos Cheese Flavoured Puffs",
            secondP:"24.8 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ef3c74a4-c809-4799-919d-27f75fba37eb.jpg?ts=1723100801",
            price:"28",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"5%",
            off:"OFF",
        },
        {
            id: 16,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Mother Dairy Toned Milk",
            secondP:"28.3 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802",
            price:"161",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"5%",
            off:"OFF",
        },
        {
            id: 5,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Cheetos Flamin hot Crunchy Puffs",
            secondP:"60 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c23856bf-cdf5-475d-9545-023bff8694d3.jpg?ts=1723100848",
            price:"65",
        },
        {
            id: 6,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Kettle Studio Exotic Spices Potato Chips",
            secondP:"500 ml",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/79f7319a-f048-48db-ab5a-00a6d2911ea3.jpg?ts=1723098575",
            price:"34",
        },
        {
            id: 7,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"DOKi Kerala Fry Buffalo Jerky",
            secondP:"30 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a0f592fe-d783-42e1-b1a4-1efccdc52721.jpg?ts=17231000724",
            price:"199",
        },
        {
            id: 8,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Kettle Studio Cheese Potato Chips",
            secondP:"56 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6807f54d-f711-49ca-9635-514ac9b72d7f.jpg?ts=1724850859",
            price:"47",
        },
        {
            id: 9,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Orion K Snack Kimchi Onion Rings",
            secondP:"70 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c7221d26-16ce-4b85-802a-b4a5aaabae13.jpg",
            price:"54",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"10%",
            off:"OFF",
        },
        {
            id: 10,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Kari kari Salt Pepper Snack",
            secondP:"6 x 18 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a76ce470-9b3c-4507-ae15-683795a86370.jpg?ts=1708414668",
            price:"100",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"16%",
            off:"OFF",
        },
        {
            id: 11,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"DOKi Tokyo Teriyaki Chicken Jerky",
            secondP:"30 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/03e157a6-b601-48ec-b664-e44155bb1808.jpg?ts=1723100068",
            price:"200",
        },
        {
            id: 12,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"DOKi Tokyo Teriyaki Chicken Jerky",
            secondP:"115 g",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/520069a.jpg?ts=1705909692",
            price:"95",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"15%",
            off:"OFF",
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
                        <Link to={`/slectedHomeImage/${item.id}/${item.FirstP}`}>
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
                        </Link>
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
              <HomeCaroucelThree/>
    </div>
  )
}

export default HomeCaroucelTwo
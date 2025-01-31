import React from 'react'
import { useDispatch } from "react-redux"; 
import { addItem } from "../Reducer/cartSlice";

function BabyItemsTwo() {
    const dispatch = useDispatch();
  
    const rightPharmacyItems = [
        {
          id: 1,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"MamyPoko Pants Extra Absorb Diaper (XL, 12-17 kg, 52 pieces)",
          secondP:"1 pack (52 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/804b4556-decd-4578-879a-45cd931ab4c0.jpg?ts=1712163097",
          price:"974",
          
        },
        {
          id: 2,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"MamyPoko Pants Standard Diaper (L, 9-14 kg)",
          secondP:"1 pack (44 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/65a68796-ea24-4a91-8366-37da52be9a48.jpg?ts=1722142631",
          price:"487",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"33%",
          off:"OFF",
         
        },
        {
          id: 3,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Huggies Wonder Diaper (Pants, XL, 12-17 kg)",
          secondP:"1 pack (16 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/47bcf961-9a85-4da3-b615-8a7f03226bf8.jpg?ts=1732264348",
          price:"167",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"16%",
          off:"OFF",
          
        },
        {
          id: 4,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
          FirstP:"MamyPoko Pants Standard Diaper (M, 7-12 kg)",
          secondP:"1 pack (48 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/8d30a830-7d34-4452-a451-2b9d61531d15.jpg?ts=1720377351",
          price:"488",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
        },
        {
          id: 5,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"MamyPoko Pants All Night Absorb Diaper (M, 72 pcs)",
          secondP:"1 pack (72 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/39838a94-1f67-4779-9b52-17e9501efb96.jpg?ts=1734436797",
          price:"691",
        },
        {
            id: 6,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
            FirstP:"Little's Comfy Baby Diaper (Pants, M, 7-12 kg)",
            secondP:"1 pack (32 pieces)",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/cc4e2dcd-a399-4c45-8684-e979cf2213dd.jpg?ts=1719989583",
            price:"279",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"37%",
            off:"OFF",
          },
        {
            id: 7,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
            FirstP:"Little's Comfy Baby Diaper (Pants, M, 7-12 kg)",
            secondP:"1 pack (36 pieces)",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/984631d3-a90a-4a85-8432-38e501934438.jpg?ts=1722142639",
            price:"434",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"27%",
            off:"OFF",
          },
        {
            id: 8,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
            FirstP:"MamyPoko Pants Standard Diaper (S, 4-8 kg)",
            secondP:"1 pack (60 pieces)",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b15fc996-cc64-4caf-879b-fcf97a226df3.jpg?ts=1720377316",
            price:"435",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"27%",
            off:"OFF",
          },
        
        {
            id: 9,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
            FirstP:"MamyPoko Pants All Night Absorb Diaper",
            secondP:"1 pack (66 pieces)",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/28743d7b-c2be-45fb-ae73-5035dd0f2729.jpg?ts=1734679555",
            price:"616",
           
          },
        {
            id: 10,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
            FirstP:"Little's Comfy Baby Diaper (Pants, XL, 12-17 kg)",
            secondP:"1 pack (24 pieces)",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b4c08e41-605c-41d3-99b5-3e2ee4341631.jpg?ts=1719989609",
            price:"285",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"36%",
            off:"OFF",
           
          },
          {
            id: 3,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
            FirstP:"Huggies Wonder Diaper (Pants, XL, 12-17 kg)",
            secondP:"1 pack (16 pieces)",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/47bcf961-9a85-4da3-b615-8a7f03226bf8.jpg?ts=1732264348",
            price:"167",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"16%",
            off:"OFF",
            
          },
        
          {
            id: 10,
            min:"8 min",
            watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
            FirstP:"Little's Comfy Baby Diaper (Pants, XL, 12-17 kg)",
            secondP:"1 pack (24 pieces)",
            img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b4c08e41-605c-41d3-99b5-3e2ee4341631.jpg?ts=1719989609",
            price:"285",
            svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
            parcentage:"36%",
            off:"OFF",
           
          },
        
      
  ]
  const handleAddToCart = (item) => {
      dispatch(addItem(item));
    };
  return (
    <div>
        <div className="rightpharmacy-itmes">
            {
                rightPharmacyItems.map((item, index) => {
                    return(
                        <a key={index} className="rightpharmacy-item">
                            <div className="rightpharmacy-img">
                                <img
                                  src={item.img}
                                  alt=""
                                  id="rightpharmacy-img"/>
                                  <div className="rightpharmacy-watch">
                                      <img
                                      src={item.watch}
                                      alt=""
                                      id="rightpharmacy-watch-img"/>
                                      <p className='min-para'>{item.min}</p>
                                  </div>
                                  <div className="svg">
                           {item.svg}
                          <div className="percantage relative">
                          <p>{item.parcentage}</p>
                          <p>{item.off}</p>
                          </div>

                          </div>
                            </div>
                            <p className='pharmacy-para-details-2'>{item.FirstP}</p>
                            <p className='second-caroucel-para'>{item.secondP}</p>
                            <div className="rightpharmacy-price price-add ">
                                <p className='price'>₹{item.price}</p>
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
                        </a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default BabyItemsTwo
import React from 'react'

function DisgestiveTwo() {
    const rightPharmacyItems = [
        {
          id: 1,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"The Good Bug Gut Cleanse Health ",
          secondP:"1 pack (14 x 70 ml)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1a006a22-9575-46eb-bdbe-22d9a2890ec9.jpg",
          price:"699",
          
        },
        {
          id: 2,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Eno Lemon Antacid",
          secondP:"30 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/797bac22-2454-4781-9723-41d2d34ce6c4.jpg?ts=1707564213",
          price:"57",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"5%",
          off:"OFF",
        },
        {
          id: 3,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Prolyte Orange Liquid ORS",
          secondP:"200 ml",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ab67d71c-30ac-4009-aabf-6a51ab096000.jpg?ts=1717305771",
          price:"31",
         
        },
        {
          id: 4,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Prolyte Nimbu Paani ORS",
          secondP:"200 ml",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/50dcb5b8-ad26-4a28-837a-c61325111efc.jpg?ts=1717305815",
          price:"31",
        
        },
        {
          id: 5,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Pudin Hara Lemon Fizz Antacid",
          secondP:"30 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/106801a.jpg?ts=1703493847",
          price:"30",
          
        },
        {
          id: 6,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Prolyte ORS (Orange)",
          secondP:"21 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/482932a.jpg?ts=1686565287",
          price:"21",
         
        },
        {
          id: 7,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Vicks Cough Tablets - Warming Ginger",
          secondP:"3 x 21.80 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0b3115e7-2c86-47df-a2bd-2e59e175f5ae.jpg?ts=1709994218",
          price:"70",
          
        },
      
        {
          id: 8,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Prolyte Apple Liquid ORS",
          secondP:"200 ml ",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/3c7e80cd-1770-460a-afdb-1582de9399be.jpg?ts=1717305760",
          price:"31",
          
        },
        {
          id: 9,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Pudin Hara Pearls Digestive Tablets",
          secondP:"2 x 10 Tablets",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/483110a.jpg?ts=1687524138",
          price:"69",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"10%",
          off:"OFF",
        },
        {
          id: 10,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Sat Isabgol Psyllium Husk",
          secondP:"90 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1da76b4b-2222-41f2-815a-24d625a5a86f.jpg?ts=1725513566",
          price:"255",
         
        },
       
      
  ]
  return (
    <div>
    <div className="rightpharmacy-itmes">
        {
            rightPharmacyItems.map((item, index) => {
                return(
                    <div key={index} className="rightpharmacy-item">
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
                        <p className='pharmacy-para-details'>{item.FirstP}</p>
                        <p className='second-caroucel-para'>{item.secondP}</p>
                        <div className="rightpharmacy-price price-add ">
                            <p className='price'>₹{item.price}</p>
                            <button className='add-button'>ADD</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
</div>
  )
}

export default DisgestiveTwo
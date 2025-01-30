import React from 'react'

function PatFoodTwo() {
    const rightPharmacyItems = [
        {
          id: 1,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Drools Focus Super Premium Dog Food",
          secondP:"1.2 kg",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/0d99f020-afc0-4be0-ba8f-238255d00289.jpg?ts=1723374769",
          price:"597",
          
        },
        {
          id: 2,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Drools Adult Dog Wet Food ",
          secondP:"5 x 150 g + 150 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/assets/products/sliding_images/jpeg/7ebbee7f-b4bc-42dc-82d9-f2a9c0db1787.jpg?ts=1718259629",
          price:"190",
         
        },
        {
          id: 3,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Real Liver Chunks in Gravy Dog Wet Food ",
          secondP:"150",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/adaddc43-ef95-4b67-918f-581fc77dae1a.jpg?ts=1723375826",
          price:"40",
          
        },
        {
          id: 4,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
          FirstP:"Pedigre Chunks in Gravy flavour",
          secondP:"70 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a8121d6c-671f-417c-a9fb-5e06cb936b29.jpg?ts=1725351715",
          price:"40",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"9%",
          off:"OFF",
        },
        {
          id: 5,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Calcium Bone Dog Supplement - 40 Pcs",
          secondP:"600 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5e78a5d2-530f-42e8-8104-ae32eb56136f.jpg?ts=1708593183",
          price:"428",
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

export default PatFoodTwo
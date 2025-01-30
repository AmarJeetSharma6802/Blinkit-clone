import React from 'react'

function SanitizersTwo() {
    const rightPharmacyItems = [
        {
          id: 1,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Dettol Original Instant Hand Sanitizer ",
          secondP:"50 ml",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/31342263-d2f7-457f-b775-d00a9106fba7.jpg?ts=1726207888",
          price:"34",
          
        },
        {
          id: 2,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Dettol Original Alcohol Based Hand Sanitizer",
          secondP:"200 ml",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/products/sliding_image/68342a.jpg?ts=1681470730",
          price:"95",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"5%",
          off:"OFF",
        },
        {
          id: 3,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Control D N95 Mask (White)",
          secondP:"1 pieces",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9f62fc41-e229-4f38-8473-d82a1902969b.jpg",
          price:"40",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"20%",
          off:"OFF",
        },
        {
          id: 4,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Control D N95 Mask (5 pcs, White)",
          secondP:"1 pack (5 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/dc4b3243-6c75-4c7c-866d-908c5ce34b4f.jpg?ts=1728284718",
          price:"170",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"32%",
          off:"OFF",
        },
        {
          id: 5,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Foods Baked Coated Peanuts",
          secondP:"1 pack (50 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/5bca0a86-b939-4672-92fd-c5e0431fb0fb.jpg",
          price:"242",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"51%",
          off:"OFF",
        },
        {
          id: 6,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Hicks 5 in 1 Filteration N95 Mask (White)",
          secondP:"1 unit",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/fcb70da7-162b-4dd8-8a87-3b86fef5d902.jpg",
          price:"50",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"43%",
          off:"OFF",
         
        },
        {
          id: 7,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Safe-X Delivering Best Disposable Surgical ",
          secondP:"1 pack (100 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/da/cms-assets/cms/product/90d75d5d-89b8-401e-be34-919c889aeadd.jpg?ts=1737354483",
          price:"399",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"33%",
          off:"OFF",
        },
      
        {
          id: 8,
          min:"30 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"The Best Disposable Bouffant Caps (White)",
          secondP:"1 pack (25 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/dbfee216-4762-4be4-9a56-cf3fa75de645.jpg?ts=1735901319",
          price:"299",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"66%",
          off:"OFF",
        },
        {
          id: 9,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Filixtrue Disposable Surgical 3 Ply Mask",
          secondP:"1 pack (100 pieces)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/02eec309-b274-4d8a-b7a4-f4435a7cf174.jpg",
          price:"388",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"60%",
          off:"OFF",
        },
        {
          id: 10,
          min:"30 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Foods Baked Coated Peanuts",
          secondP:"50 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/images/products/sliding_image/479305a.jpg?ts=1690814404",
          price:"467s",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"37%",
          off:"OFF",
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

export default SanitizersTwo
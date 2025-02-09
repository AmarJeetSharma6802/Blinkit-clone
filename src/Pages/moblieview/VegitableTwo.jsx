import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"; 
import { addItem } from "../Reducer/cartSlice";

function VegitableTwo() {
   const dispatch = useDispatch();
    const rightPharmacyItems = [
        {
          id: 1,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Onion (Pyaz)",
          secondP:"0.95  - 1.05 kg",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249",
          price:"47",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
        },
        {
          id: 2,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Green Chilli 100 g (Hari Mirch)",
          secondP:"100 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/27055af4-f9ca-49f5-a84b-cf407583be43.jpg?ts=1711019907",
          price:"12",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
         
        },
        {
          id: 3,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Ginger (Adrak)",
          secondP:"200 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1a3564c0-b467-4a8e-90f2-fe5bec7c613b.jpg?ts=1722935025",
          price:"24",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
        },
        {
          id: 4,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/579cb70a-afb9-4b8c-a03e-fb6fe7a40044.jpg?ts=1707312503",
          FirstP:"Red Carrot - 500 g (Gajar)",
          secondP:"500 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/63526075-fec6-42e9-a34c-086a069a0aac.jpg?ts=1711014093",
          price:"18",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"21%",
          off:"OFF",
        },
        {
          id: 5,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Cauliflower (Phool Gobhi)",
          secondP:"1 piece (400 - 600) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/107f1c0e-6648-4de2-852e-ab2325e44afb.jpg?ts=1735364289",
          price:"15",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"21%",
          off:"OFF",
        },
        {
          id: 6,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Potato - New Crop",
          secondP:"10.95 kg - 1.05 kg",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/da/cms-assets/cms/product/c11437d7-3fa3-454c-a5b1-ec2dc911c014.jpg?ts=1734429255",
          price:"33",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
         
        },
        {
          id: 7,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Desi Tomato (Tamatar)",
          secondP:"500 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/d6339148-f4ee-4645-94f3-aac845a60c7f.jpg?ts=1719824311",
          price:"16",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
        },
      
        {
          id: 8,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Lemon",
          secondP:"(220 - 250) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c655faa5-2b29-4714-8411-c98b67f4ef51.jpg?ts=1726553686",
          price:"28",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"26%",
          off:"OFF",
         
        },
        {
          id: 9,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"English Cucumber (Kheera)",
          secondP:"(500 - 600) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/4a7cbdcc-d74d-403f-a0cb-b130572ad296.jpg?ts=1711022176",
          price:"36",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"21%",
          off:"OFF",
        },
        {
          id: 10,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Cabbage (Patta Gobhi)",
          secondP:"1 piece (400 - 600) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/9a806b4f-1793-465f-a3ae-b3b221acbfb9.jpg?ts=1711016570",
          price:"17",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"22%",
          off:"OFF",
        },
        {
          id: 11,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Green Peas (Matar)",
          secondP:"250 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/259fecd2-ccc0-434f-938f-61c10ed44b3d.jpg?ts=1711017375",
          price:"24",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
        },
        {
          id: 12,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"French Beans 250 g",
          secondP:"250 g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/188ab70e-d817-44d5-967e-17a842a5ac81.jpg?ts=1711100797",
          price:"24",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"27%",
          off:"OFF",
        },
        {
          id: 13,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Radish (Mooli)",
          secondP:"Radish (Mooli)",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/74094d0b-b147-46ff-bd8f-3c9a64dc66ec.jpg?ts=1726561108",
          price:"18",
          svg: <svg width="34" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"23%",
          off:"OFF",
        },
        {
          id: 14,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Beetroot (Chukandar)",
          secondP:"(500 - 600) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/a68103f6-9518-454b-aa1a-9d068ac33ffc.jpg?ts=1711472827",
          price:"35",
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"25%",
          off:"OFF",
        },
        {
          id: 15,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Lady Finger (Bhindi)",
          secondP:"(260 - 275) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/28b248cd-5f36-413d-b5d5-5f867cfdb762.jpg?ts=1711016008",
          price:"140",
          
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"20%",
          off:"OFF",
        },
        {
          id: 15,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Lady Finger (Bhindi)",
          secondP:"(260 - 275) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/28b248cd-5f36-413d-b5d5-5f867cfdb762.jpg?ts=1711016008",
          price:"140",
          
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"20%",
          off:"OFF",
        },
        {
          id: 15,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Lady Finger (Bhindi)",
          secondP:"(260 - 275) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/28b248cd-5f36-413d-b5d5-5f867cfdb762.jpg?ts=1711016008",
          price:"140",
          
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"20%",
          off:"OFF",
        },
        {
          id: 15,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Lady Finger (Bhindi)",
          secondP:"(260 - 275) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/28b248cd-5f36-413d-b5d5-5f867cfdb762.jpg?ts=1711016008",
          price:"140",
          
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"20%",
          off:"OFF",
        },
        {
          id: 15,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Lady Finger (Bhindi)",
          secondP:"(260 - 275) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/28b248cd-5f36-413d-b5d5-5f867cfdb762.jpg?ts=1711016008",
          price:"140",
          
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"20%",
          off:"OFF",
        },
        {
          id: 15,
          min:"8 min",
          watch:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
          FirstP:"Lady Finger (Bhindi)",
          secondP:"(260 - 275) g",
          img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/28b248cd-5f36-413d-b5d5-5f867cfdb762.jpg?ts=1711016008",
          price:"140",
          
          svg: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>,
          parcentage:"20%",
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
                        <div key={index} className="rightpharmacy-item">
                            <Link to={`/selectedVegitable/${item.id}/${item.FirstP}`} className="rightpharmacy-img">
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
                            </Link>
                            <p className='pharmacy-para-details'>{item.FirstP}</p>
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
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default VegitableTwo
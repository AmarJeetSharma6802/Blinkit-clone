import React, { useState, useEffect } from "react";
import "../SelctedProduct/selectedimage.css";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";
import { useNavigate, useParams } from "react-router-dom";
import throttle from "lodash/throttle";
import { useDispatch } from "react-redux";
import { addItem } from "../Reducer/cartSlice";

const images = [
  {
    id: 1,
    name: "Onion (Pyaz)",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP:"0.95  - 1.05 kg",
    price: "47",

    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/a1ba074a-c085-4dd1-b4a4-2f247d6f211d.jpg?ts=1711010249",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/3e73bfa7-1dfc-4a53-983c-59a95366b8dc.jpg?ts=1711010249",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/d104419e-e128-405a-ae42-13794e50858d.jpg?ts=1711010249",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/40c2925c-9832-49ae-b2d8-08481466e448.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 2,
    name: "Green Chilli 100 g (Hari Mirch)",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "100 g",
    price: "12",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/27055af4-f9ca-49f5-a84b-cf407583be43.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/e8f3f700-5127-4d6b-826e-301bf6cdbfa6.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/669b8658-52de-4583-bfe4-b84d31e34ea5.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/96315cd0-d465-4f3a-b44f-404265c3742f.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 3,
    name: "Ginger (Adrak)",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "200 g ",
    price: "24",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/1a3564c0-b467-4a8e-90f2-fe5bec7c613b.jpg?ts=1722935025",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/92f94032-2a10-4511-93cf-9a0bd333eba8.jpg?ts=1722935027",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/a4f15ad9-7010-46d5-bfcd-e0e495cd8de2.jpg?ts=1722935028",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/96315cd0-d465-4f3a-b44f-404265c3742f.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 4,
    name: "Red Carrot - 500 g (Gajar)",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "500 g",
    price: "18",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/efcea8f8-e69c-44ce-af01-1da24d569026.jpg?ts=1737976289",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/6efa6bd8-a77c-4921-8197-e455a8cf6231.jpg?ts=1737976290",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/e1753e60-2201-409c-95f5-40417393ab58.jpg?ts=1737976290",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/97c00d29-4d0c-4d27-b5af-47f521ef3d07.jpg?ts=1737976290",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/96315cd0-d465-4f3a-b44f-404265c3742f.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 5,
    name: "Cauliflower (Phool Gobhi)",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP:"1 piece (400 - 600) g",
    price: "15",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/107f1c0e-6648-4de2-852e-ab2325e44afb.jpg?ts=1735364289",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/ddd4945c-1527-44e7-a077-0a1b6cec1c09.jpg?ts=1735364290",
      "https://cdn.grofers.com/da/cms-assets/cms/product/0bd2d1b7-d1d3-4289-9ddf-ff200cde0a99.jpg?ts=1735364290",
      "https://cdn.grofers.com/da/cms-assets/cms/product/410e511a-d7dc-4520-b947-9f3573681376.jpg?ts=1735364290",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/96315cd0-d465-4f3a-b44f-404265c3742f.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 6,
    name: "Potato - New Crop",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "10.95 kg - 1.05 kg",
    price: "33",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/c11437d7-3fa3-454c-a5b1-ec2dc911c014.jpg?ts=1734429255",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/e9a29c27-620c-4930-9562-f3e595bc5e24.jpg?ts=1734429254",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/51871887-962f-4048-b73d-891bd879c50c.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/7e350642-5ac3-49e0-98ab-6d3a1fc4c29e.jpg",
     "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/96315cd0-d465-4f3a-b44f-404265c3742f.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 7,
    name: "Desi Tomato (Tamatar)",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "500 g",
    price: "15",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/d6339148-f4ee-4645-94f3-aac845a60c7f.jpg?ts=1719824311",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/6649cede-fe6f-4d74-ac64-4f6a947ebd0b.jpg?ts=1719824313",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1800/app/assets/products/sliding_images/jpeg/e2109465-8b06-4522-ad5f-e34fe74a47e2.jpg?ts=1719824314",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/96315cd0-d465-4f3a-b44f-404265c3742f.jpg?ts=1711019907",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 8,
    name: "Harvest Gold - White Bread",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "350 g",
    price: "30",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/a9b8e4d0-62ae-4a55-b0f7-c07d16a09326.jpg?ts=1707564212",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/23779b.jpg?ts=1690808192",
      "https://cdn.grofers.com/app/images/products/sliding_image/23779c.jpg?ts=1690808192",
      "https://cdn.grofers.com/app/images/products/sliding_image/23779d.jpg?ts=1690808192",
      "https://cdn.grofers.com/app/images/products/sliding_image/23779e.jpg?ts=1690808192",
      "https://cdn.grofers.com/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 9,
    name: "Amul Homogenised Toned Milk",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "1 l",
    price: "71",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/6d41a6e4-eb1b-413c-8e20-7b9e892e42f8.jpg?ts=1712325555",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/176b.jpg?ts=1624537541",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/176c.jpg?ts=1654778816",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/176d.jpg?ts=1654778816",
      "https://cdn.grofers.com/app/images/products/sliding_image/176e.jpg?ts=1654778816",
      "https://cdn.grofers.com/app/images/products/sliding_image/176g.jpg?ts=1654778816",
      "https://cdn.grofers.com/app/images/products/sliding_image/176h.jpg",
    ],
  },
  {
    id: 10,
    name: "Mother Dairy Classic Pouch Curd",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "400 g",
    price: "34",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/app/images/products/sliding_image/86446a.jpg?ts=1687948913",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/86446b.jpg?ts=1641540332",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/86446c.jpg?ts=1641540332",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/86446d.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/86446f.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/86446f.jpg",
      "https://cdn.grofers.com/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 13,
    name: "Foods Baked Coated Peanuts",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "50 g",
    price: "69",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/da/cms-assets/cms/product/672eb8df-71a6-4fde-a825-8d64aa94d4da.jpg?ts=1736245592",
      "https://cdn.grofers.com/da/cms-assets/cms/product/8b46667e-0ef5-4da7-88ec-560ab4149c0b.jpg?ts=1736245593https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/176b.jpg?ts=1624537541",
      "https://cdn.grofers.com/da/cms-assets/cms/product/017fa9e9-b51a-4a57-ba95-52a67a2b20fc.jpg?ts=1736245593",
      "https://cdn.grofers.com/da/cms-assets/cms/product/c172b190-4468-441f-803a-a96d378783d2.jpg?ts=1736245594",
      "https://cdn.grofers.com/da/cms-assets/cms/product/7813302c-5118-45ef-823f-a2b683c20d09.jpg?ts=1736245594",
      "https://cdn.grofers.com/da/cms-assets/cms/product/4b96fcb7-7767-40a7-a323-be73fa17834d.jpg?ts=1736245594",
      "https://cdn.grofers.com/da/cms-assets/cms/product/0ffca658-c18f-4602-a330-37d01aee21d9.jpg?ts=1734682399",
    ],
  },
  {
    id: 14,
    name: "Orion Turtle Mexican Lime Corn Chips",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "115 g",
    price: "95",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/519582a.jpg?ts=1690830565",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/519582b.jpg?ts=1690830565",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/519582c.jpg?ts=1690830565",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/519582d.jpg?ts=1690830565",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/519582e.jpg?ts=1690830565",
      "https://cdn.grofers.com/app/images/products/sliding_image/519582f.jpg?ts=1690830565",
    ],
  },
  {
    id: 15,
    name: "Cheetos Cheese Flavoured Puffs",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "24.8 g",
    price: "28",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1800/app/assets/products/sliding_images/jpeg/ef3c74a4-c809-4799-919d-27f75fba37eb.jpg?ts=1723100801",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1800/app/images/products/sliding_image/537312b.jpg",
      "https://cdn.grofers.com/app/images/products/sliding_image/537312c.jpg",
      "https://cdn.grofers.com/app/images/products/sliding_image/537312d.jpg",
      "https://cdn.grofers.com/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 16,
    name: "Kab's Jackpot Cheese Balls",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "24.8 g",
    price: "28",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/c4653af6-718b-497d-96a5-4eb6146b9a2b.jpg?ts=1720446269",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/dbcf8db7-9a15-4344-a43b-015c8dcc6dc0.jpg?ts=1720446271",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/2d782321-ee38-4b15-972a-a64c5c7cf2a1.jpg?ts=1720446272",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/4cc1f003-0df8-4a52-9442-5990749bfe3c.jpg",
    ],
  },
  {
    id: 17,
    name: "CheetoPuffs",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "24.8 g",
    price: "28",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/c4653af6-718b-497d-96a5-4eb6146b9a2b.jpg?ts=1720446269",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/dbcf8db7-9a15-4344-a43b-015c8dcc6dc0.jpg?ts=1720446271",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/2d782321-ee38-4b15-972a-a64c5c7cf2a1.jpg?ts=1720446272",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/assets/products/sliding_images/jpeg/4cc1f003-0df8-4a52-9442-5990749bfe3c.jpg",
    ],
  },
];

const SelctedVegitable = () => {
  const { id } = useParams();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});

  const dispatch = useDispatch();

  const product = images.find((item) => item.id === parseInt(id));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} Price${product.price}`;
    } else {
      document.title = "Blink kit clone";
    }
  }, [id, product]);

  const handleMouseMove = throttle((e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = target;

    const xPercent = (offsetX / offsetWidth) * 100;
    const yPercent = (offsetY / offsetHeight) * 100;

    setZoomStyle({
      backgroundImage: `url(${product.img[selectedIndex]})`,
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundSize: "200%",
    });
  }, 100);

  const handleMouseLeave = () => setZoomStyle({});

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % product.img.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? product.img.length - 1 : prev - 1
    );
  };

  const navigate = useNavigate();

  const HomeBtn = () => {
    navigate("/");
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="caroucel-details">
      <div className="carousel-container">
        <div
          className="main-image"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={zoomStyle.backgroundImage ? { ...zoomStyle } : {}}
        >
          {!zoomStyle.backgroundImage && (
            <img src={product.img[selectedIndex]} alt="Selected Item" />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="carousel-buttons">
          <button onClick={handlePrev}>
            <img src={leftArrow} alt="" id="left-img" />
          </button>
          <button onClick={handleNext}>
            {" "}
            <img src={rightArrow} alt="" id="right-img" />
          </button>
        </div>

        {/* Thumbnails Carousel */}
        <div className="thumbnails-carousel">
          {product.img.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className={index === selectedIndex ? "active" : ""}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
        <div className="main-img-para">
          <div className="p">Product Details</div>
          <div className="type-product">
            <p className="bold">type</p>
            <p className="type light">{product.name}</p>
          </div>
          <div className="unit">
            <li className="bold">Unit</li>
            <li className="light">{product.secondP}</li>
          </div>
          <div className="key">
            <li className="bold">Key Features</li>
            <ul>
              <li className="key light"> Delicious and nutritious.</li>
              <li className="key light"> Ideal meal time accompaniment.</li>
              <li className="key light">
                {" "}
                Can be used in the preparation of Lassi, Dahi Wada, etc.
              </li>
            </ul>
          </div>
          <div className="fassai">
            <li>FSSAI License</li>
            <li className="light">10012021000071</li>
          </div>
          <div className="country">
            <p className="bold">Country of Origin</p>
            <p className="light">India</p>
          </div>

          <div className="return">
            <p className="bold">Return policy</p>
            <p className="light return-para">
              This Item is non-returnable. For a damaged, defective, incorrect
              or expired item, you can request a replacement within 72 hours of
              delivery. In case of an incorrect item, you may raise a
              replacement or return request only if the item is sealed/
              unopened/ unused and in original condition.
            </p>
          </div>
        </div>
      </div>
      <div className="product-items-details">
        <div className="product-item">
          <div className="home-milk">
            <p onClick={HomeBtn}>Home</p>
            <p className="slace">/</p>
            <p>Vegitable</p>
            <p>{product.name}</p>
          </div>
          <div className="product-name">{product.name}</div>
          <div className="watch-min">
            <img src={product.watch} alt="" id="selected-watch-img" />
            <p>{product.min}</p>
          </div>
          <div className="view-all">
            <p className="view-all-para">
              View all by Amul{" "}
              <span>
                <i class="fa-solid fa-caret-right"></i>
              </span>{" "}
            </p>
          </div>

          <p className="select-p">select unit</p>
          <div className="slected-unit">
            <p className="ml">{product.secondP}</p>
            <p>
              MRP <span className="price-bold">₹{product.price}</span>
            </p>
          </div>
          <p className="inclusive">(Inclusive of all taxes)</p>
          <div className="addbtN">
            <button className="selectAddbtn" onClick={(e) => {
              e.preventDefault();
              handleAddToCart(product);
            }}>
              <span className="add-child">ADD </span>
              <span className="add-child-1">Add to cart</span>
            </button>
          </div>
        </div>

        <div className="main-img-para mobile-view-main-img">
          <div className="p">Product Details</div>
          <div className="type-product">
            <p className="bold">type</p>
            <p className="type light">{product.name}</p>
          </div>
          <div className="unit">
            <li className="bold">Unit</li>
            <li className="light">{product.secondP}</li>
          </div>
          <div className="key">
            <li className="bold">Key Features</li>
            <ul>
              <li className="key light"> Delicious and nutritious.</li>
              <li className="key light"> Ideal meal time accompaniment.</li>
              <li className="key light">
                {" "}
                Can be used in the preparation of Lassi, Dahi Wada, etc.
              </li>
            </ul>
          </div>
          <div className="fassai">
            <li>FSSAI License</li>
            <li className="light">10012021000071</li>
          </div>
          <div className="country">
            <p className="bold">Country of Origin</p>
            <p className="light">India</p>
          </div>

          <div className="return">
            <p className="bold">Return policy</p>
            <p className="light return-para">
              This Item is non-returnable. For a damaged, defective, incorrect
              or expired item, you can request a replacement within 72 hours of
              delivery. In case of an incorrect item, you may raise a
              replacement or return request only if the item is sealed/
              unopened/ unused and in original condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelctedVegitable;

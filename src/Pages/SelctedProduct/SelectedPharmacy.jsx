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
    name: "Wellbeing Nutrition Throat Relief Strips",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: " pack (30 strips)",
    price: "522",

    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/499611a.jpg?ts=1701153266",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/499611b.jpg?ts=1701153266",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/499611c.jpg?ts=1701153266",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/499611d.jpg?ts=1701153270",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/499611e.jpg?ts=1701153270",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/images/products/sliding_image/499611f.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 2,
    name: "Amul Taaza Toned Fresh Milk",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "500 ml",
    price: "34",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/f89ee8fd-269f-4468-9da9-e7d88047593a.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/f9e75c62-98d1-4d92-9d1f-3c4cf720e315.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/833bfa36-0f7b-4257-82ff-f14573fbf87b.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/833bfa36-0f7b-4257-82ff-f14573fbf87b.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/833bfa36-0f7b-4257-82ff-f14573fbf87b.jpg",
    ],
  },
  {
    id: 3,
    name: "Amul Masti Pouch Curd",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "400 ml",
    price: "35",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/08dd3416-cad8-45ff-bd43-62444164a625.jpg?ts=1726473590",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/08dd3416-cad8-45ff-bd43-62444164a625.jpg?ts=1726473590",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/6b6771cc-2c08-49e7-ac81-f89bc2865032.jpg?ts=1726473594",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/fe3ef41a-a620-4247-9fbc-21a3860b9854.jpg?ts=1726473595",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/76bc22ce-02f2-43db-9468-6a518882848d.jpg?ts=1726473596",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/4ff0b097-f131-410a-a8a0-8fbbdf137861.jpg?ts=1726473597",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/752bc349-eb58-45fa-8026-53b47f2b94f9.jpg?ts=1726473598",
    ],
  },
  {
    id: 4,
    name: "Mother Dairy Toned Milk",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "500 ml",
    price: "28",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/2ec7b217-fc34-4da9-90b7-ff769e354af7.jpg?ts=1711189562",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/sliding_images/jpeg/e3f63e12-631f-4193-9160-ea4ddcbd6c5c.jpg?ts=1711189562",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/19925b.jpg?ts=1687350633",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/19925c.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/19925d.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/19925e.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 5,
    name: "Amul Salted Butter",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "100 g",
    price: "60",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/159b.jpg?ts=1654778815",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/159c.jpg?ts=1654778815",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/159d.jpg?ts=1654778815",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/159e.jpg?ts=1654778815",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/159f.jpg?ts=1654778815",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/images/products/sliding_image/159g.jpg",
    ],
  },
  {
    id: 6,
    name: "Mother Dairy Full Cream Fresh Milk",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "500 ml",
    price: "34",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/8f6bfafc-ad44-422a-8e96-7e2d2994012a.jpg?ts=1707998856",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1440/app/assets/products/sliding_images/jpeg/f2d3ab42-55a2-462f-819c-6a6be622cfc0.jpg?ts=1707998856",
      "https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/ca783765-0d11-4156-9d9d-5e0043eba1c7.jpg?ts=1707998856",
      "https://cdn.grofers.com/app/assets/products/sliding_images/jpeg/375a0f64-c752-4969-9571-7640e32a6466.jpg?ts=1707998856",
      "https://cdn.grofers.com/app/images/products/common/customer_care.jpg",
    ],
  },
  {
    id: 7,
    name: "Mother Dairy Full Cream Fresh Milk",
    min: "8 min",
    watch:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png",
    secondP: "500 ml",
    price: "34",
    img: [
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=900/app/assets/products/sliding_images/jpeg/ba929c05-aba2-4838-b674-e2072089022b.jpg?ts=1712325614",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/images/products/sliding_image/339309b.jpg?ts=1687350633",
      "https://cdn.grofers.com/app/images/products/sliding_image/339309c.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/images/products/sliding_image/339309e.jpg",
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/app/images/products/common/customer_care.jpg",
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

const SelectedPharmacy = () => {
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
            <p>Milk</p>
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

export default SelectedPharmacy;

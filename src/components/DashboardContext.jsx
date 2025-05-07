import { useState } from 'react';
import React, { createContext } from 'react';

import leather from '../assets/images/leather_jacket.png'
import wireless_headphones from '../assets/images/wireless_headphones.png'
import watch from '../assets/images/smart_watch.png'
import Slim from '../assets/images/Slim Fit Chino Pants.jpeg'
import Neck_T_Shirt from '../assets/images/tee-shirt.jpeg'

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Leather Jacket', price: '₹120', image: leather },
    { id: 2, name: 'Wireless Headphones', price: '₹80', image: wireless_headphones },
    { id: 3, name: 'Smart Watch', price: '₹150', image: watch },
    { id: 4, name: 'Slim Fit Chino Pants', price: '₹750', image: Slim },
    { id: 5, name: 'Cotton Crew Neck T-Shirt', price: '₹1500', image: Neck_T_Shirt },
    { id: 6, name: 'Denim jacket', price: '₹1570', image: 'https://img.tatacliq.com/images/i13/437Wx649H/MP000000019055928_437Wx649H_202309051853091.jpeg' },
    { id: 7, name: 'Crossbody Travel SlingBag', price: '₹150', image: 'https://cdn.packhacker.com/2019/08/991e97b1-heimplanet-transit-line-sling-pocket-in-porto-portugal-2.jpg' },
    { id: 8, name: 'Premium Leather Wallet', price: '₹150', image: 'https://www.leathertalks.com/cdn/shop/files/IMG_3281_5247c4fe-8305-4513-86ec-9a264537708a_800x.jpg?v=1741259789' },
    { id: 9, name: 'Compact Air Purifier', price: '₹150', image: 'https://m.media-amazon.com/images/I/61kbbgWlXlL._AC_UF350,350_QL80_.jpg' },
    { id: 10, name: 'Soft Plush Throw Blanket', price: '₹150', image: 'https://m.media-amazon.com/images/I/81jbJp1NT4L._AC_UF894,1000_QL80_.jpg' },
    { id: 11, name: 'Reusable Thermal Water Bottle', price: '₹150', image: 'https://m.media-amazon.com/images/I/71RJ2TqYasL.jpg' },
    { id: 12, name: 'Minimalist Wall Clock', price: '₹150', image: 'https://m.media-amazon.com/images/I/81+Ve0+pR5L._AC_UF894,1000_QL80_.jpg' },
    { id: 13, name: 'Himalayan Salt Lamp', price: '₹150', image: 'https://m.media-amazon.com/images/I/41FyksD18VL._AC_UF1000,1000_QL80_.jpg' },
    { id: 14, name: 'USB-C Travel Power Bank', price: '₹150', image: 'https://images-cdn.ubuy.co.in/661f0b71f342020b3c6a5e7e-65w-laptop-power-bank-50000mah-fast.jpg' },
    { id: 15, name: '4K Action Camera', price: '₹150', image: 'https://www.maizic.com/cdn/shop/products/51gtfrp27ql_1_b8d35475-238d-4677-98e1-7c6b3f7fd9bb.jpg?v=1679920948' },
    { id: 16, name: 'Wireless Charging Pad', price: '₹150', image: 'https://www.belkin.com/dw/image/v2/BGBH_PRD/on/demandware.static/-/Sites-master-product-catalog-blk/default/dwc7d91003/images/hi-res/d/349cf9b564a073a2_WIZ021ttBK-boostcharge-pro-2-in-1-magnetic-wireless-charging-pad-with-qi2-15w-webgg-hero-01__lz__en_US.jpg?sfrm=png' },
    { id: 17, name: 'Smart Fitness Band', price: '₹150', image: 'https://zebronics.com/cdn/shop/files/DRIP-Pro-pic5.jpg?v=1684580731&width=1200' },
    { id: 18, name: 'Bluetooth Portable Speaker', price: '₹150', image: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/categories/noise_cancelling_headphones/AEM_CARDIFF_SUB-CAT-PAGE_HEADPHONES_SILO.png/jcr:content/renditions/cq5dam.web.320.320.png' },
    { id: 19, name: 'Noise-Cancelling Headphones', price: '₹150', image: 'https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/categories/noise_cancelling_headphones/AEM_CARDIFF_SUB-CAT-PAGE_HEADPHONES_SILO.png/jcr:content/renditions/cq5dam.web.320.320.png' },
    { id: 20, name: 'Vintage Leather Boots', price: '₹150', image: 'https://craftandglory.in/cdn/shop/files/0003s_0056_DSC04100.ARW.jpg?v=1745994646&width=533' },
    { id: 21, name: 'Aviator Sunglasses', price: '₹150', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/28422492/2024/3/21/f74a6566-531a-41cd-9b57-520beca6036e1711040210824Sunglasses1.jpg' },
    { id: 22, name: 'Waterproof Windbreaker', price: '₹150', image: 'https://m.media-amazon.com/images/I/61NUq8NU2KL._AC_UY1100_.jpg' },
    { id: 23, name: 'Casual Canvas Sneakers', price: '₹150', image: 'https://m.media-amazon.com/images/I/51jslggR6jL._AC_UY1000_.jpg' },
    { id: 24, name: 'Cotton Crew Neck T-Shirt', price: '₹150', image: 'https://assets.ajio.com/medias/sys_master/root/20230413/f2x6/64381739711cf97ba721ccee/-473Wx593H-443012128-orange-MODEL.jpg' },
    { id: 25, name: 'Slim Fit Chino Pants', price: '₹150', image: 'https://images.bestsellerclothing.in/data/selected/01-april-2024/205618005_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto' },
    { id: 26, name: 'Classic Denim Jacketf', price: '₹150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Aedwr7snbfRFfHMspscRK2jXeTd9ZABYUA&s' }
  ]

  const offers = [
    { id: 1, title: 'Flat 50% Off', description: 'On all jackets this week only!' },
    { id: 2, title: 'Buy 1 Get 1 Free', description: 'Select categories only.' },
  ];

  //  Now supports multiple cart items
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <DashboardContext.Provider value={{ products, cart, addToCart, offers }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider
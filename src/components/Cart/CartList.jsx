import React from "react";
import CartItem from "./CartItem";

// Sample static cart data
const cartItems = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    platform: "Digital Download - PC",
    price: 29.99,
    originalPrice: 59.99,
    discount: "50%",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
  },
  {
    id: 2,
    title: "Elden Ring",
    platform: "Digital Download - PC",
    price: 49.99,
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
  },
  {
    id: 3,
    title: "God of War Ragnarök",
    platform: "Digital Download - PC",
    price: 39.99,
    originalPrice: 69.99,
    discount: "43%",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
  },
];

const CartList = () => {
  return (
    <div className="space-y-6">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;

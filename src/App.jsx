import { useState } from "react"
import RestaurantCard from "./components/RestaurantCard";

export default function App() {
  const [restaruant] = useState([
    {
    name: "Şirvan Restoranı",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/570/745/92/comida-mexico-plato-tacos-wallpaper-preview.jpg",
    rating: 4.5,
    cuisine: "Azərbaycan mətbəxi",
    },
    {
      name: "Italiano Pizza",
      imageUrl: "https://www.shutterstock.com/shutterstock/videos/1105246327/thumb/1.jpg?ip=x480",
      rating: 4.2,
      cuisine: "İtalyan mətbəxi",
    },
    {
      name: "Sushi World",
      imageUrl: "https://i.pinimg.com/1200x/4f/1c/f0/4f1cf0a91fdee088f1d0ca9284181252.jpg",
      rating: 4.7,
      cuisine: "Yapon mətbəxi",
    },
  ]);
  return (
    <div className="card-container">
    {restaruant.map((res, index) => (
      <RestaurantCard key={index} {...res} />
    ))}
  </div>
  );
};
import { useState } from "react"
import RestaurantCard from "./components/RestaurantCard";

export default function App() {
  const [restaruant] = useState([
    {
    name: "Şirvan Restoranı",
    imageUrl: "https://source.unsplash.com/300x200/?restaurant",
    rating: 4.5,
    cuisine: "Azərbaycan mətbəxi",
    },{
      name: "Italiano Pizza",
      imageUrl: "https://source.unsplash.com/300x200/?pizza",
      rating: 4.2,
      cuisine: "İtalyan mətbəxi",
    },
    {
      name: "Sushi World",
      imageUrl: "https://source.unsplash.com/300x200/?sushi",
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
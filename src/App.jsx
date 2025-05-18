import { useState } from "react"
import RestaurantCard from "./components/RestaurantCard";

export default function App() {
  const [restaruant] = useState([
    {
    name: "Casa Mexico",
    imageUrl: "https://c4.wallpaperflare.com/wallpaper/570/745/92/comida-mexico-plato-tacos-wallpaper-preview.jpg",
    rating: 4.5,
    cuisine: "Meksika mətbəxi",
    },
    {
      name: "Sushi World",
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/282/207/746/comida-cuenco-japon-pescado-wallpaper-preview.jpg",
      rating: 4.7,
      cuisine: "Yapon mətbəxi",
    },
    {
      name: "Italiano Pizza",
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/545/786/565/pizza-4k-image-wallpaper-preview.jpg",
      rating: 4.9,
      cuisine: "İtalyan mətbəxi",
    },
    {
      name: "Burger Town",
      imageUrl: "https://i.pinimg.com/736x/de/46/ef/de46ef982efb3131b4dee36516e74764.jpg",
      rating: 4.2,
      cuisine: "Amerika mətbəxi",
    },
    {
      name: "Tandoori Palace",
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/959/866/476/food-rice-biryani-mutton-wallpaper-preview.jpg",
      rating: 4.6,
      cuisine: "Hindistan mətbəxi",
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
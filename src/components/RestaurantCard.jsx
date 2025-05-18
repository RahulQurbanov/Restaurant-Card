import "./card.css";
export default function RestaurantCard({name,cuisine,rating,imageUrl}) {
    return (
        <div className="card">
          <div className="image"><img src={imageUrl} alt={name} className="card-image" /></div>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="card-cuisine">{cuisine}</p>
            <p className="card-rating">⭐ {rating}</p>
          </div>
        </div>
      );
};
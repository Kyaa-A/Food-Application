export default function FoodItem({ food, setFoodId }) {
  return (
    <div className="itemContainer">
      <img
        src={food.image}
        alt={food.title}
        className="object-cover w-full h-48"
      />
      <div className="itemContent">
        <p className="itemName">{food.title}</p>
        <button
          onClick={() => {
            console.log(food.id);
            setFoodId(food.id);
          }}
          className="foodItemBtn"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
const API_KEY = "503ca7ec5b124f7f88291e5ecb21ee63";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>⏱️ Ready in {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong>🍴 Servings: {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? " 🥕 Vegetarian" : " 🍖 Non-Vegetarian"}
          </span>
          <span>{food.vegan ? " 🌱 Vegan" : ""}</span>
        </div>
        <div>
          $ <span>{food.pricePerServing / 100} Per Serving</span>
        </div>
      </div>

      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}

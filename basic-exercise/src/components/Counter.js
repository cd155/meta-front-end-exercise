import { useMealsListContext1 } from "../providers/MealsProvider";

function Counter() {
  const { meals } = useMealsListContext1();

  return (
    <div>
      <h3>Number of meals today: {meals.length}</h3>
    </div>
  );
}

export default Counter;
import Fruit from "../Fruit/Fruit.jsx";

export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", " Orange"];
  const fruits = [
    { name: "Apple", price: 10, sale: false },
    { name: "Mango", price: 7, sale: true },
    { name: "Banana", price: 8, sale: false },
    { name: 'Orange"', price: 4, sale: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            rey={fruit.name}
            name={fruit.name}
            price={fruit.price}
            sale={fruit.sale}
          />
        ))}
      </ul>
    </div>
  );
}

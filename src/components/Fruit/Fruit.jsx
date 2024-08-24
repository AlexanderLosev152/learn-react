export default function Fruit({ name, price, sale }) {
  return (
    <>
      <li>
        {name}-{price}-{sale ? "sale" : ""}
      </li>
    </>
  );
}

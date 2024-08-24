export default function Message() {
  function handleClick() {
    console.log("btn click");
  }
  return (
    <>
      <button onClick={handleClick}>Message</button>
    </>
  );
}
